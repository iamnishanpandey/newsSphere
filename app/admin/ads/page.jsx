import AdManager from "@/components/AdManager";
import Link from "next/link";

export const metadata = {
  title: "Ad manager — NewsSphere",
  description: "Manage the demo ad campaigns displayed on NewsSphere.",
};

export default function AdminAds() {
  return (
    <main className="section container">
      <span className="eyebrow">Admin · Advertising</span>
      <h1>Ad campaigns</h1>
      <p className="lede">
        Update the sample campaigns shown in the site’s banner ad slots.
      </p>
      <Link className="btn btn-ghost" href="/admin">
        Back to newsroom overview
      </Link>
      <AdManager />
    </main>
  );
}
