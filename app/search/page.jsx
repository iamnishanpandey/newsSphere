"use client";
import { useState } from "react";
import StoryCard from "@/components/StoryCard";
import FreePlanAd from "@/components/freePlanAd";
import { stories } from "@/data/stories";
export default function Search() {
  const [q, setQ] = useState("");
  const results = stories.filter((s) =>
    [s.title, s.excerpt, s.category, s.author, ...s.tags]
      .join(" ")
      .toLowerCase()
      .includes(q.trim().toLowerCase()),
  );
  return (
    <main className="section">
      <div className="container">
        <span className="eyebrow">NewsSphere archive</span>
        <h1>Search stories</h1>
        <input
          className="search-input"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search topics, writers, and stories"
        />
        <p className="muted">
          {q
            ? `${results.length} result${results.length === 1 ? "" : "s"}`
            : "Browse our latest reporting"}
        </p>
        <div className="story-grid">
          {results.map((s) => (
            <StoryCard story={s} key={s.slug} />
          ))}
        </div>
      </div>
      <FreePlanAd />
    </main>
  );
}
