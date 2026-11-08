import Link from "next/link";
import { PublicShell } from "@/components/site/PublicShell";
import { Hero } from "@/components/site/Hero";
import { PropertyCard } from "@/components/site/PropertyCard";
import { ProjectCard } from "@/components/site/ProjectCard";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { properties, projects } from "@/data/properties";

const benefits = [
  { n: "01", title: "Local market understanding", copy: "Explore locations with context around neighbourhood fit and property type." },
  { n: "02", title: "Property discovery assistance", copy: "Shortlist sample options around your preferences, purpose and budget." },
  { n: "03", title: "Site visit coordination", copy: "Move from browsing to an organised in-person property visit." },
  { n: "04", title: "Buyer and seller support", copy: "A direct line for questions across a property conversation." },
];

export default function FoothillQuietLuxuryPage() {
  return (
    <PublicShell>
      <main>
        <Hero />
        <section className="intro-slice">
          <div>
            <p className="section-kicker">Curated for everyday living</p>
            <h2>A more considered way to discover Dehradun.</h2>
          </div>
          <p>Explore sample homes across the city’s best-known neighbourhoods, then connect directly to plan a visit.</p>
        </section>

        <section className="featured-section">
          <div className="section-head">
            <div>
              <p className="section-kicker">Featured selection</p>
              <h2>Homes to start with.</h2>
            </div>
            <div>
              <span className="demo-pill">All listings use demo data</span>
              <Link className="text-link" href="/properties">View all properties <span>→</span></Link>
            </div>
          </div>
          <div className="property-grid">
            {properties.filter((p) => p.featured).map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        </section>

        <section className="why-section">
          <div className="why-intro">
            <p className="section-kicker">Why choose AGS</p>
            <h2>Guidance that keeps the next step clear.</h2>
            <p>Non-factual benefit statements for concept presentation. Final claims should be reviewed by AGS.</p>
          </div>
          <div className="benefit-grid">
            {benefits.map((item) => (
              <article key={item.n}>
                <span>{item.n}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="projects-preview">
          <div className="section-head">
            <div>
              <p className="section-kicker">Construction concepts</p>
              <h2>Projects, thoughtfully presented.</h2>
            </div>
            <Link className="text-link" href="/projects">Explore demo projects <span>→</span></Link>
          </div>
          <div className="project-grid">
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </section>

        <section className="lead-section" id="enquire">
          <div>
            <p className="section-kicker">Looking for something specific?</p>
            <h2>Tell us what kind of property you’re looking for.</h2>
            <p>Share the broad outline. In a live version, AGS could respond with relevant options and coordinate the next step.</p>
          </div>
          <EnquiryForm />
        </section>

        <section className="bottom-cta">
          <p>Prefer to talk directly?</p>
          <h2>Let’s narrow down the right property together.</h2>
          <div>
            <a href="https://wa.me/910000000000" className="button button-light">WhatsApp enquiry <span>↗</span></a>
            <Link href="/contact" className="button button-glass">Schedule a visit</Link>
          </div>
        </section>
      </main>
    </PublicShell>
  );
}
