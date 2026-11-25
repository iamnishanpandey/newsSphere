import Link from "next/link";
export default function StoryCard({ story }) {
  return (
    <article className="card story-card">
      <Link href={`/article/${story.slug}`}>
        <img src={story.image} alt="" />
      </Link>
      <div className="story-body">
        <div className="card-meta">
          <span className="eyebrow">{story.category}</span>
          {story.isPremium && <span className="premium">Premium</span>}
        </div>
        <h3>
          <Link href={`/article/${story.slug}`}>{story.title}</Link>
        </h3>
        <p>{story.excerpt}</p>
        <div className="byline">
          <Link href={`/author/${story.authorSlug}`}>{story.author}</Link>
          <span>{story.readTime} min read</span>
        </div>
      </div>
    </article>
  );
}
