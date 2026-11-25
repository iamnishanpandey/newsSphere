import Link from "next/link";
import { notFound } from "next/navigation";
import StoryCard from "@/components/StoryCard";
import FreePlanAd from "@/components/freePlanAd";
import { stories } from "@/data/stories";
export const dynamicParams = false;
export function generateStaticParams() { return stories.map((story) => ({ slug: story.slug })); }
export default async function Article({ params }) {
  const { slug } = await params;
  const story = stories.find((item) => item.slug === slug);
  if (!story) notFound();
  const related = stories.filter((item) => item.category === story.category && item.slug !== slug).slice(0, 3);
  const visibleContent = story.isPremium ? story.content.slice(0, 1) : story.content;
  return <main className="article"><header className="article-head container"><span className="eyebrow">{story.category} · NewsSphere</span><h1>{story.title}</h1><p>{story.excerpt}</p><div className="byline"><Link href={"/author/" + story.authorSlug}>{story.author}</Link><span>{new Date(story.publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} · {story.readTime} min read</span></div></header><img className="article-image" src={story.image} alt=""/><div className="article-body">{visibleContent.map((paragraph, index) => <p key={index}>{paragraph}</p>)}{story.isPremium && <div className="premium-banner"><span className="premium">Premium report</span><h2>Continue reading with NewsSphere Premium</h2><p>This report is reserved for members. Subscribe for ad-free reading and full access to every Premium story.</p><Link className="btn btn-primary" href="/subscribe">Get Premium — रु 499 / month</Link><p className="small-text">Already a member? <Link href="/login">Log in</Link></p></div>}<div className="tags">{story.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><FreePlanAd campaign="khalti"/>{related.length > 0 && <section className="section container"><span className="eyebrow">Continue reading</span><h2>More in {story.category}</h2><div className="story-grid">{related.map((item) => <StoryCard story={item} key={item.slug}/>)}</div></section>}</main>;
}
