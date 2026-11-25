"use client";
import Link from "next/link";
import { useState } from "react";
export default function Header() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  function toggle() {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  }
  return (
    <header className="site-header">
      <div className="container nav">
        <Link className="brand" href="/">
          News<span>Sphere</span>
        </Link>
        <nav className={open ? "nav-links open" : "nav-links"}>
          {["Technology", "Business", "Science", "Environment"].map((item) => (
            <Link
              key={item}
              onClick={() => setOpen(false)}
              href={"/category/" + item.toLowerCase()}
            >
              {item}
            </Link>
          ))}
          <Link href="/search">Search</Link>
        </nav>
        <div className="nav-actions">
          <button
            className="icon-btn"
            onClick={toggle}
            aria-label="Toggle colour theme"
          >
            {dark ? "☀" : "◐"}
          </button>
          <Link className="login-link" href="/login">
            Log in
          </Link>
          <Link className="btn btn-primary" href="/subscribe">
            Subscribe
          </Link>
          <button
            className="icon-btn mobile-toggle"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}
