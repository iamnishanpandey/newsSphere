"use client";

import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [notice, setNotice] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setNotice(
      "Sign-in is not connected yet. This preview does not authenticate accounts or store your details.",
    );
  }

  return (
    <main className="auth-page login-page">
      <div className="login-layout">
        <section className="login-intro" aria-label="About NewsSphere">
          <span className="login-kicker">Independent journalism</span>
          <div>
            <p className="login-quote">
              A clearer view of a complex world.
            </p>
            <p className="login-description">
              Thoughtful reporting and fresh perspectives, selected for curious
              minds.
            </p>
          </div>
          <span className="login-signoff">The daily signal · NewsSphere</span>
        </section>

        <section className="auth-card login-card">
          <span className="eyebrow">Welcome back</span>
          <h1>Log in to NewsSphere</h1>
          <p className="login-subtitle">
            Sign in to continue reading your stories.
          </p>

          <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="login-email">
              Email address
              <input
                autoComplete="email"
                id="login-email"
                name="email"
                placeholder="you@example.com"
                required
                type="email"
              />
            </label>

            <label htmlFor="login-password">
              Password
              <span className="password-field">
                <input
                  autoComplete="current-password"
                  id="login-password"
                  name="password"
                  placeholder="Enter your password"
                  required
                  type={showPassword ? "text" : "password"}
                />
                <button
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  aria-pressed={showPassword}
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  type="button"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </span>
            </label>

            <button className="btn btn-primary login-submit" type="submit">
              Log in
            </button>
          </form>

          {notice && (
            <p className="login-notice" role="status">
              {notice}
            </p>
          )}

          <p className="login-signup">
            New to NewsSphere? <Link href="/register">Create an account</Link>
          </p>
        </section>
      </div>
    </main>
  );
}
