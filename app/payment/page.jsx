"use client";
import Link from "next/link";
import { useState } from "react";
export default function Payment() {
  const [method, setMethod] = useState("");
  const [submitted, setSubmitted] = useState(false);
  return (
    <main className="auth-page">
      <section className="auth-card payment-card">
        <span className="eyebrow">NewsSphere Premium</span>
        <h1>Choose a payment method</h1>
        <p className="muted">रु 499 / month</p>
        {submitted ? (
          <div className="form-success">
            <b>Demo payment selected.</b>
            <p>
              Connect the official {method} merchant checkout API before
              enabling this in production. No payment was collected.
            </p>
            <Link className="btn btn-primary" href="/login">
              Log in
            </Link>
          </div>
        ) : (
          <>
            <button
              className={
                "payment-option " + (method === "eSewa" ? "selected" : "")
              }
              onClick={() => setMethod("eSewa")}
            >
              <b>eSewa</b>
              <span>Pay with eSewa wallet</span>
            </button>
            <button
              className={
                "payment-option " + (method === "Khalti" ? "selected" : "")
              }
              onClick={() => setMethod("Khalti")}
            >
              <b>Khalti</b>
              <span>Pay with Khalti wallet</span>
            </button>
            <button
              className="btn btn-primary"
              disabled={!method}
              onClick={() => setSubmitted(true)}
            >
              Continue with {method || "a payment method"}
            </button>
          </>
        )}
        <p className="small-text">
          Secure payment verification requires the official provider integration
          and a backend.
        </p>
      </section>
    </main>
  );
}
