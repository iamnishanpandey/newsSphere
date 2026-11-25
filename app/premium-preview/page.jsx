import Link from "next/link";

export const metadata = {
  title: "Premium preview — NewsSphere",
  description:
    "Preview the NewsSphere Premium reading experience. This page does not include subscriber-only stories.",
};

export default function PremiumPreview() {
  return (
    <main className="section container premium-preview-page">
      <div className="preview-heading">
        <div>
          <span className="eyebrow">NewsSphere Premium</span>
          <h1>A closer look at the member experience.</h1>
          <p className="lede">
            Explore the calmer, ad-free reading layout members get with every
            Premium report.
          </p>
        </div>
        <span className="preview-badge">Visual preview</span>
      </div>

      <section
        className="preview-report"
        aria-label="Premium article layout preview"
      >
        <div className="preview-report-topline">
          <span className="premium">Premium report</span>
          <span>Member reading experience</span>
        </div>
        <span className="eyebrow">The NewsSphere briefing</span>
        <h2>Context for a world that won’t stand still</h2>
        <p className="preview-deck">
          A sample layout showing how an in-depth report is presented to
          members. The reporting itself is not part of this preview.
        </p>
        <div className="preview-byline">
          <span>NewsSphere editors</span>
          <span>In-depth reading · 8 min</span>
        </div>
        <div className="preview-divider" />
        <div className="preview-content-placeholder" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="preview-lock">
          <span className="eyebrow">Your Premium access</span>
          <h3>Go beyond the headlines.</h3>
          <p>
            Subscriber-only reporting is kept behind membership. This sample
            shows the reading layout, not a way to access Premium articles.
          </p>
          <ul>
            <li>Ad-free reading</li>
            <li>Every Premium report</li>
            <li>Full publication access</li>
          </ul>
          <Link className="btn btn-primary" href="/subscribe">
            Explore Premium plans
          </Link>
        </div>
      </section>

      <p className="preview-return">
        <Link href="/subscribe">← Back to membership</Link>
      </p>
    </main>
  );
}
