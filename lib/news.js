import { getDb } from "./mongodb";

export async function getPublishedNews() {
  const db = await getDb();
  if (!db) return [];
  return db
    .collection("news")
    .find({ status: "published" })
    .sort({ publishedAt: -1 })
    .limit(30)
    .toArray();
}

export function newsToStory(item) {
  return {
    title: item.title,
    description: item.excerpt,
    image: item.imageUrl,
    category: item.category,
    author: item.authorName,
    authorSlug: item.authorSlug,
    read: `${item.readTime || 5} min read`,
    href: `/article/${item.slug}`,
    isPremium: item.isPremium,
  };
}
