import Link from "next/link";

export default function Subscribe() {
  return (
    <main className="membership-page">
      <section className="membership-intro container">
        <span className="eyebrow">NewsSphere membership</span>
        <h1>Good journalism takes time.</h1>
        <p className="lede">
          Make room for reporting that goes beyond the headlines. Choose the
          way you want to read NewsSphere.
        </p>
        <a className="membership-preview-link" href="#plans">
          Compare membership plans <span aria-hidden="true">↓</span>
        </a>
      </section>
      <section className="plans-section container" id="plans">
        <div className="plans">
          <section className="card plan">
            <span className="eyebrow">Free</span>
            <h2>रु 0</h2>
            <p>Essential reporting, supported by advertising.</p>
            <ul>
              <li>Public stories</li>
              <li>Weekly newsletter</li>
              <li>Advertising-supported reading</li>
            </ul>
            <Link className="btn btn-ghost" href="/register">
              Start free
            </Link>
          </section>
          <section className="card plan featured-plan">
            <span className="premium">Most popular</span>
            <span className="eyebrow">NewsSphere Premium</span>
            <h2>
              रु 499 <small>/ month</small>
            </h2>
            <p>A quieter, deeper reading experience.</p>
            <ul>
              <li>Ad-free reading</li>
              <li>Every Premium report</li>
              <li>Full publication access</li>
            </ul>
            <Link className="btn btn-primary" href="/payment">
              Continue to payment
            </Link>
            <p className="small-text">रु 4,999 billed yearly</p>
          </section>
        </div>
        <p className="preview-note">
          Not ready to subscribe?{" "}
          <Link href="/premium-preview">
            Preview the Premium reading experience
          </Link>
          . It’s a visual sample only and does not include member-only stories.
        </p>
      </section>
    </main>
  );
}
