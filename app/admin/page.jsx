import Link from "next/link";
import { authors } from "@/data/authors";
import { categories } from "@/data/categories";
import { stories } from "@/data/stories";

export const metadata = {
  title: "Newsroom admin — NewsSphere",
  description: "NewsSphere newsroom overview and content management links.",
};

const recentStories = [...stories]
  .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
  .slice(0, 5);

const stats = [
  { label: "Published stories", value: stories.length, detail: "Across all desks" },
  {
    label: "Premium stories",
    value: stories.filter((story) => story.isPremium).length,
    detail: "Member-only reads",
  },
  { label: "Contributors", value: authors.length, detail: "In the newsroom" },
  { label: "Editorial desks", value: categories.length, detail: "Active sections" },
];

export default function AdminPage() {
  return (
    <main className="admin-page">
      <div className="container">
        <header className="admin-heading">
          <div>
            <span className="eyebrow">NewsSphere · Workspace</span>
            <h1>Newsroom overview</h1>
            <p className="lede">
              A clear view of your stories, contributors, and publishing tools.
            </p>
          </div>
          <Link className="btn btn-primary" href="/">
            View publication
          </Link>
        </header>

        <aside className="admin-demo-notice">
          <span className="admin-demo-mark" aria-hidden="true">i</span>
          <p>
            <strong>Demo workspace</strong>
            This overview uses local sample content. It has no admin sign-in,
            backend, or publishing controls.
          </p>
        </aside>

        <section className="admin-stat-grid" aria-label="Newsroom statistics">
          {stats.map((stat) => (
            <article className="card admin-stat-card" key={stat.label}>
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
              <small>{stat.detail}</small>
            </article>
          ))}
        </section>

        <div className="admin-content-grid">
          <section className="card admin-stories-card">
            <div className="admin-section-heading">
              <div>
                <span className="eyebrow">The latest</span>
                <h2>Recent stories</h2>
              </div>
              <Link href="/search">Browse all <span aria-hidden="true">→</span></Link>
            </div>
            <div className="admin-story-list">
              {recentStories.map((story) => (
                <article className="admin-story-row" key={story.slug}>
                  <div className="admin-story-copy">
                    <Link
                      className="admin-story-title"
                      href={`/article/${story.slug}`}
                    >
                      {story.title}
                    </Link>
                    <span>
                      {story.category} <span aria-hidden="true">·</span>{" "}
                      {story.author}
                    </span>
                  </div>
                  <div className="admin-story-meta">
                    <time dateTime={story.publishedAt}>
                      {new Date(`${story.publishedAt}T12:00:00`).toLocaleDateString(
                        "en-US",
                        { month: "short", day: "numeric" },
                      )}
                    </time>
                    <span className={story.isPremium ? "admin-status premium" : "admin-status"}>
                      {story.isPremium ? "Premium" : "Published"}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <aside className="admin-side-column">
            <section className="card admin-tools-card">
              <span className="eyebrow">Manage</span>
              <h2>Workspace tools</h2>
              <Link className="admin-tool-link" href="/admin/ads">
                <span>
                  <strong>Ad campaigns</strong>
                  <small>Update demo banner placements</small>
                </span>
                <span aria-hidden="true">→</span>
              </Link>
              <Link className="admin-tool-link" href="/search">
                <span>
                  <strong>Story library</strong>
                  <small>Find published coverage</small>
                </span>
                <span aria-hidden="true">→</span>
              </Link>
            </section>

            <section className="card admin-team-card">
              <div className="admin-section-heading">
                <div>
                  <span className="eyebrow">Byline roster</span>
                  <h2>Contributors</h2>
                </div>
              </div>
              {authors.slice(0, 4).map((author) => (
                <Link
                  className="admin-contributor-row"
                  href={`/author/${author.slug}`}
                  key={author.slug}
                >
                  <span className="admin-avatar" aria-hidden="true">
                    {author.initials}
                  </span>
                  <span>
                    <strong>{author.name}</strong>
                    <small>{author.role}</small>
                  </span>
                  <span aria-hidden="true">→</span>
                </Link>
              ))}
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}
