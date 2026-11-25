"use client";

import Link from "next/link";
import { useState } from "react";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [notice, setNotice] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    if (formData.get("password") !== formData.get("confirmPassword")) {
      setNotice("Your passwords do not match. Please try again.");
      return;
    }

    setNotice(
      "Sign-up is not connected yet. This preview does not create an account or store your details.",
    );
  }

  return (
    <main className="auth-page login-page">
      <div className="login-layout">
        <section className="login-intro" aria-label="About NewsSphere">
          <span className="login-kicker">A more informed perspective</span>
          <div>
            <p className="login-quote">Make room for a deeper read.</p>
            <p className="login-description">
              Join a community that values independent journalism and
              considered reporting.
            </p>
          </div>
          <span className="login-signoff">The daily signal · NewsSphere</span>
        </section>

        <section className="auth-card login-card">
          <span className="eyebrow">Join NewsSphere</span>
          <h1>Create your account</h1>
          <p className="login-subtitle">
            Get started with thoughtful journalism.
          </p>

          <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="register-name">
              Name
              <input
                autoComplete="name"
                id="register-name"
                name="name"
                placeholder="Your name"
                required
              />
            </label>

            <label htmlFor="register-email">
              Email address
              <input
                autoComplete="email"
                id="register-email"
                name="email"
                placeholder="you@example.com"
                required
                type="email"
              />
            </label>

            <label htmlFor="register-password">
              Password
              <span className="password-field">
                <input
                  autoComplete="new-password"
                  id="register-password"
                  minLength={8}
                  name="password"
                  placeholder="At least 8 characters"
                  required
                  type={showPassword ? "text" : "password"}
                />
                <button
                  aria-label={showPassword ? "Hide passwords" : "Show passwords"}
                  aria-pressed={showPassword}
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  type="button"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </span>
            </label>

            <label htmlFor="register-confirm-password">
              Confirm password
              <input
                autoComplete="new-password"
                id="register-confirm-password"
                minLength={8}
                name="confirmPassword"
                placeholder="Re-enter your password"
                required
                type={showPassword ? "text" : "password"}
              />
            </label>

            <button className="btn btn-primary login-submit" type="submit">
              Create account
            </button>
          </form>

          {notice && (
            <p className="login-notice" role="status">
              {notice}
            </p>
          )}

          <p className="login-signup">
            Already have an account? <Link href="/login">Log in</Link>
          </p>
        </section>
      </div>
    </main>
  );
}
