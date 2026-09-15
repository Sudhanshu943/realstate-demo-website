import Link from "next/link";

export function Footer() {
  return <footer className="footer"><div className="footer-main"><div><Link href="/" className="brand footer-brand"><span className="brand-mark">AGS</span><span className="brand-copy">Realtors <i>&amp;</i> Construction</span></Link><p>Property discovery and project assistance in Dehradun.</p><span className="demo-pill">Concept demo · sample data</span></div><div><h4>Explore</h4><Link href="/properties">Properties</Link><Link href="/projects">Projects</Link><Link href="/about">About</Link></div><div><h4>Enquiries</h4><Link href="/contact">Schedule a visit</Link><a href="https://wa.me/910000000000">WhatsApp</a><Link href="/contact">List your property</Link></div><div><h4>Location</h4><p>Dehradun<br/>Uttarakhand, India</p><small>Exact address placeholder</small></div></div><div className="footer-bottom"><span>© 2026 AGS concept preview</span><span>For demonstration only — not an official business website</span></div></footer>;
}
