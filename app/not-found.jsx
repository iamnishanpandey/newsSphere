import Link from "next/link";
import StoryCard from "@/components/StoryCard";
import { stories } from "@/data/stories";
export default function NotFound() {
  return (
    <main className="section container not-found">
      <div className="error-code">404</div>
      <h1>Story not found</h1>
      <p>
        The page you are looking for has moved or never made it to our front
        page.
      </p>
      <Link className="btn btn-primary" href="/">
        Return home
      </Link>
      <h2>Recommended stories</h2>
      <div className="story-grid">
        {stories.slice(0, 3).map((s) => (
          <StoryCard story={s} key={s.slug} />
        ))}
      </div>
    </main>
  );
}
