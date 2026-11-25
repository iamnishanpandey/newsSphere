"use client";
import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  function submit(event) {
    event.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  }
  return (
    <form className="newsletter-form" onSubmit={submit}>
      {submitted ? (
        <p style={{ margin: 0, color: "white" }}>
          You’re on the list. Check your inbox soon.
        </p>
      ) : (
        <>
          <input
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Your email address"
          />
          <button className="btn">Subscribe now</button>
        </>
      )}
    </form>
  );
}
