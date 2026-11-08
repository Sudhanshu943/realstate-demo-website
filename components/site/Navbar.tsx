import Link from "next/link";

const links = [
  ["Foothill Home", "/designs/foothill-quiet-luxury"],
  ["Properties", "/properties"],
  ["Projects", "/projects"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

export function Navbar() {
  return (
    <>
      <div className="demo-ribbon">
        Concept Demo for AGS Realtors &amp; Construction — Sample Data
      </div>
      <header className="site-header">
        <Link href="/" className="brand" aria-label="AGS Realtors home">
          <span className="brand-mark">AGS</span>
          <span className="brand-copy">Realtors <i>&amp;</i> Construction</span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
        </nav>

        {/* Schedule a visit action in navbar */}
        <Link href="/contact#enquiry" className="nav-cta">
          Schedule a visit <span>↗</span>
        </Link>

        <details className="mobile-menu">
          <summary aria-label="Open menu"><span /><span /></summary>
          <div>
            <Link href="/" style={{ fontWeight: 800, color: "#a2613b" }}>
              ⊞ Open Design Lab Menu
            </Link>
            {links.map(([label, href]) => (
              <Link key={href} href={href}>{label}</Link>
            ))}
            <Link href="/contact#enquiry" className="mobile-menu-cta">Schedule a visit</Link>
          </div>
        </details>
      </header>
    </>
  );
}
