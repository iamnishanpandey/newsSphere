import Link from "next/link";
import StoryCard from "@/components/StoryCard";
import FreePlanAd from "@/components/freePlanAd";
import { categories } from "@/data/categories";
import { stories, categorySlug } from "@/data/stories";
export const dynamicParams = false;
export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}
export default async function Category({ params }) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  const list = stories.filter((s) => categorySlug(s.category) === slug);
  return (
    <main className="section">
      <div className="container">
        <span className="eyebrow">NewsSphere desk</span>
        <h1>{category?.name || "Stories"}</h1>
        <p className="lede">{category?.description}</p>
        <nav className="chips">
          {categories.map((c) => (
            <Link
              className={c.slug === slug ? "active" : ""}
              key={c.slug}
              href={`/category/${c.slug}`}
            >
              {c.name}
            </Link>
          ))}
        </nav>
        {list.length ? (
          <div className="story-grid">
            {list.map((s) => (
              <StoryCard story={s} key={s.slug} />
            ))}
          </div>
        ) : (
          <p>No stories here yet. Please check back soon.</p>
        )}
      </div>
      <FreePlanAd />
    </main>
  );
}
