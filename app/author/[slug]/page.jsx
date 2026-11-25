import StoryCard from "@/components/StoryCard";
import FreePlanAd from "@/components/freePlanAd";
import { authors } from "@/data/authors";
import { stories } from "@/data/stories";
import { notFound } from "next/navigation";
export const dynamicParams = false;
export function generateStaticParams() {
  return authors.map((a) => ({ slug: a.slug }));
}
export default async function Author({ params }) {
  const { slug } = await params;
  const author = authors.find((a) => a.slug === slug);
  if (!author) notFound();
  return (
    <main className="section">
      <div className="container">
        <section className="author-head">
          <div className="avatar">{author.initials}</div>
          <div>
            <span className="eyebrow">NewsSphere contributor</span>
            <h1>{author.name}</h1>
            <b>{author.role}</b>
            <p>{author.bio}</p>
          </div>
        </section>
        <div className="section-head">
          <h2>Stories by {author.name.split(" ")[0]}</h2>
        </div>
        <div className="story-grid">
          {stories
            .filter((s) => s.authorSlug === slug)
            .map((s) => (
              <StoryCard story={s} key={s.slug} />
            ))}
        </div>
      </div>
      <FreePlanAd />
    </main>
  );
}
