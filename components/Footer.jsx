import Link from "next/link";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="brand">
            News<span>Sphere</span>
          </div>
          <p>Independent journalism for a complex world.</p>
        </div>
        <div>
          <b>Explore</b>
          <Link href="/category/technology">Technology</Link>
          <Link href="/category/business">Business</Link>
          <Link href="/category/science">Science</Link>
        </div>
        <div>
          <b>More</b>
          <Link href="/search">Search stories</Link>
          <Link href="/author/elena-vance">Our authors</Link>
          <Link href="/subscribe">Membership</Link>
          <Link href="/admin/ads">Ad manager (demo)</Link>
        </div>
      </div>
      <div className="container copyright">
        © 2026 NewsSphere. All rights reserved.
      </div>
    </footer>
  );
}
