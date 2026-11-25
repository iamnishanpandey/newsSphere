import Link from "next/link";
import StoryCard from "@/components/StoryCard";
import NewsletterForm from "@/components/NewsletterForm";
import FreePlanAd from "@/components/freePlanAd";
import { stories } from "@/data/stories";
export default function Home() {
  const featured = stories.find((x) => x.featured) || stories[0];
  const latest = [...stories].sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt),
  );
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">The daily signal · August 2026</span>
            <h1>{featured.title}</h1>
            <p>{featured.excerpt}</p>
            <Link
              className="btn btn-primary"
              href={`/article/${featured.slug}`}
            >
              Read the story →
            </Link>
          </div>
          <img
            src={featured.image}
            alt="Abstract illustration for quantum computing"
          />
        </div>
      </section>
      <section className="section container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Stay ahead</span>
            <h2>Trending now</h2>
          </div>
          <Link href="/search">View all headlines →</Link>
        </div>
        <div className="trend-row">
          {latest.slice(0, 4).map((s, i) => (
            <Link key={s.slug} href={`/article/${s.slug}`}>
              <b>0{i + 1}</b>
              {s.title}
            </Link>
          ))}
        </div>
      </section>
      <section className="section container">
        <span className="eyebrow">Curated for you</span>
        <h2>Featured stories</h2>
        <div className="story-grid">
          {latest.slice(0, 3).map((s) => (
            <StoryCard story={s} key={s.slug} />
          ))}
        </div>
      </section>
      <FreePlanAd campaign="esewa" />
      <section className="section container">
        <div className="newsletter">
          <div>
            <span className="eyebrow">The Insight Report</span>
            <h2>A smarter briefing for a complex world.</h2>
            <p>Weekly analysis on technology, politics, and global culture.</p>
          </div>
          <NewsletterForm />
        </div>
      </section>
      <section className="section container">
        <span className="eyebrow">The newsroom</span>
        <h2>Latest news</h2>
        <div className="story-grid">
          {latest.slice(3).map((s) => (
            <StoryCard story={s} key={s.slug} />
          ))}
        </div>
      </section>
      <FreePlanAd campaign="khalti" />
    </main>
  );
}
