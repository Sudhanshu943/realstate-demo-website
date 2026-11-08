"use client";

import { useState } from "react";
import Image from "next/image";
import { properties, projects } from "@/data/properties";
import styles from "./editorial.module.css";

interface Plate {
  name: string;
  image: string;
  caption: string;
  meta: string;
}

const plates: Plate[] = [
  {
    name: "Plate I · The North Terrace",
    image: "/images/hero-dehradun.png",
    caption: "Morning fog dissipating along the Mussoorie ridge. Terraced slate overhangs create sheltered passive solar pockets.",
    meta: "Leica M11 · 35mm Summilux · f/5.6 · 1/250s · 940m ASL",
  },
  {
    name: "Plate II · Deodar Verandah",
    image: "/images/residence.png",
    caption: "Seasoned Himalayan cedar joists paired with hand-hewn local quartzite masonry. Direct southern light orientation.",
    meta: "Leica M11 · 50mm Noctilux · Natural diffused morning light",
  },
  {
    name: "Plate III · The Stone Hearth",
    image: "/images/villa.png",
    caption: "Massive thermal stone core providing radiant warmth during mountain winters. Double-height ceiling volume.",
    meta: "Leica M11 · 28mm Elmarit · Dusk exposure",
  },
];

const architecturalEssays = [
  {
    number: "01",
    title: "The Tectonic Language of the Foothills",
    author: "Ar. Vikram Singhania · Lead Curator",
    excerpt: "Why the vernacular masonry of Uttarakhand—dry-stacked quartzite and slate—outperforms imported glass facades in seismic resilience and thermal inertia.",
  },
  {
    number: "02",
    title: "Light, Shadow, and the Southern Slope",
    author: "Elena Rostova · Lighting Specialist",
    excerpt: "Tracking the 14-degree winter sun angle through deep verandahs. Designing apertures that harvest low morning warmth while shading harsh summer rays.",
  },
  {
    number: "03",
    title: "The Lost Craft of Lime Mortar in Doon Valley",
    author: "Kalyan Bhatt · Master Conservator",
    excerpt: "Lime plaster allows traditional masonry walls to breathe naturally, preventing the internal condensation and efflorescence common to modern cement plaster.",
  },
];

const editorialPrinciples = [
  {
    number: "01",
    title: "Zero Promotional Hyperbole",
    desc: "We do not write generic slogans or invent fake luxury awards. Every property statement is an honest architectural description.",
  },
  {
    number: "02",
    title: "Verifiable Provenance",
    desc: "Every residence features documented municipal survey records, zoning clearances, and historical land ownership validation.",
  },
  {
    number: "03",
    title: "Environmental Belonging",
    desc: "A true luxury home does not conquer the landscape; it frames and respects the slope, pine canopy, and mountain breezes.",
  },
  {
    number: "04",
    title: "Discreet Client Advisory",
    desc: "High-consideration acquisitions require privacy. We coordinate private viewings and confidential dossier dispatches without commercial spam.",
  },
];

export default function MonochromeEditorialPage() {
  const [activePlateIndex, setActivePlateIndex] = useState<number>(0);
  const [selectedPropertyDossier, setSelectedPropertyDossier] = useState<typeof properties[0] | null>(null);
  const [pdfDownloaded, setPdfDownloaded] = useState<boolean>(false);
  const [enquirySubmitted, setEnquirySubmitted] = useState<boolean>(false);

  const activePlate = plates[activePlateIndex];
  const leadProperty = properties[0];
  const folioProperties = properties.slice(1, 7);

  return (
    <div className={styles.editorialPage}>
      {/* 1. Top Banner & ISSN Bar */}
      <div className={styles.issnBar}>
        <span>ISSN 2684-1102 · DEHRADUN ARCHITECTURAL FOLIO</span>
        <span>AUTUMN / WINTER 2026 EDITION · VOL. 01</span>
        <span>PRICE: <strong>COMPLIMENTARY DOSSIER</strong></span>
      </div>

      {/* 2. Journal Masthead */}
      <header className={styles.masthead}>
        <span className={styles.journalCategory}>Monochrome Editorial · Issue 01</span>
        <h1 className={styles.journalTitle}>The Dehradun Property Journal</h1>
        <div className={styles.mastheadDetails}>
          <span>FOUNDED ON PROVENANCE &amp; ARCHITECTURAL RESTRAINT</span>
          <span>CURATED BY AGS STUDIO &amp; DEHRADUN GUILD</span>
          <span>CIRCULATION: PRIVATE CLIENT REGISTER</span>
        </div>
      </header>

      {/* 3. Sticky Journal Navigation Bar */}
      <nav className={styles.journalNav}>
        <ul className={styles.navLinks}>
          <li><a href="#cover-story">Cover Story</a></li>
          <li><a href="#curator-essays">Essays</a></li>
          <li><a href="#folio-catalogue">Folio Catalogue</a></li>
          <li><a href="#manifesto">Principles</a></li>
          <li><a href="#developments">Projects</a></li>
          <li><a href="#private-register">Client Register</a></li>
        </ul>
        <a href="#private-register" className={styles.modeToggle}>
          Request Folio ↗
        </a>
      </nav>

      {/* 4. Concept Rationale & Explanation Manifesto */}
      <section className={styles.conceptExplainer} id="manifesto">
        <div>
          <span className={styles.explainerBadge}>Design Concept 02 Breakdown</span>
          <h3>Why Monochrome Editorial?</h3>
        </div>
        <p className={styles.explainerText}>
          Most real-estate websites treat property as a crowded commodity, overwhelming visitors with noisy search bars, neon badges, and generic promotional slogans. 
          <strong> Monochrome Editorial</strong> adopts the discipline of fine art monographs and architectural journals. It respects the intelligence of high-consideration buyers by leading with photographic atmosphere, tectonic material truth, paced typography, and discrete confidential dossiers.
        </p>
      </section>

      {/* 5. Feature Cover Story Section */}
      <article className={styles.coverStory} id="cover-story">
        <div className={styles.coverGrid}>
          {/* Left Column: Interactive Multi-Plate Viewer */}
          <div className={styles.plateContainer}>
            <div className={styles.mainPlateWrap}>
              <Image
                src={activePlate.image}
                alt={activePlate.name}
                fill
                priority
                sizes="(max-width: 900px) 100vw, 60vw"
                className={styles.plateImg}
              />
            </div>

            {/* Plate Switcher Tabs */}
            <div className={styles.plateThumbStrip}>
              {plates.map((plate, idx) => (
                <button
                  key={plate.name}
                  type="button"
                  className={`${styles.plateThumb} ${activePlateIndex === idx ? styles.activePlate : ""}`}
                  onClick={() => setActivePlateIndex(idx)}
                >
                  {plate.name.split("·")[0]}
                </button>
              ))}
            </div>

            <div className={styles.plateCaption}>
              <span>{activePlate.caption}</span>
              <span>{activePlate.meta}</span>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Specifications */}
          <div className={styles.narrativeCol}>
            <span className={styles.storyFolioNum}>01</span>
            <h2 className={styles.storyTitle}>{leadProperty.title}</h2>

            <div className={styles.storyColumns}>
              <p className={styles.dropCap}>
                In an era dominated by superficial glass towers, this residence is an ode to permanence. Nestled at 940 meters altitude along the Mussoorie Ridge, the estate anchors itself into the hill through heavy local slate, dressed quartzite masonry, and reclaimed deodar beams.
              </p>
              <p>
                The home was conceived not merely to be occupied, but to be inhabited in dialogue with the valley seasons. Deep cantilevered verandahs capture morning warmth while protecting living pavilions from high-monsoon rain.
              </p>
            </div>

            <blockquote className={styles.pullQuote}>
              &ldquo;A residence should not shout over the mountain; it should listen to the slope.&rdquo;
            </blockquote>

            <ul className={styles.particularsList}>
              <li><span>Acquisition Price</span><strong>{leadProperty.price}</strong></li>
              <li><span>Spatial Extent</span><strong>{leadProperty.area}</strong></li>
              <li><span>Plan &amp; Scale</span><strong>{leadProperty.bhk} Bed Suites · 5 Baths</strong></li>
              <li><span>Locality Setting</span><strong>{leadProperty.locality}, Dehradun</strong></li>
              <li><span>Title Provenance</span><strong>Freehold Verified · Ready to Occupy</strong></li>
            </ul>

            <div className={styles.actionRow}>
              <button
                type="button"
                className={styles.dossierBtn}
                onClick={() => setSelectedPropertyDossier(leadProperty)}
              >
                Inspect Confidential Dossier →
              </button>
              <button
                type="button"
                className={styles.viewingLink}
                onClick={() => setSelectedPropertyDossier(leadProperty)}
              >
                Request Private Viewing
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* 6. Section: Curator's Architectural Essays */}
      <section className={styles.essaysSection} id="curator-essays">
        <div className={styles.sectionHeadingBlock}>
          <div>
            <span className={styles.sectionKicker}>Architectural Dispatches</span>
            <h2>Essays on Craft, Climate &amp; Permanence</h2>
          </div>
          <span style={{ fontSize: "0.76rem", fontFamily: "Courier New, monospace", color: "#666" }}>
            VOL. 01 / THREE ESSAYS
          </span>
        </div>

        <div className={styles.essaysGrid}>
          {architecturalEssays.map((essay) => (
            <article key={essay.number} className={styles.essayCard}>
              <span className={styles.essayNumber}>{essay.number}</span>
              <h3>{essay.title}</h3>
              <p>{essay.excerpt}</p>
              <div className={styles.essayAuthor}>{essay.author}</div>
            </article>
          ))}
        </div>
      </section>

      {/* 7. Section: Full Curated Folio Catalogue */}
      <section className={styles.folioSection} id="folio-catalogue">
        <div className={styles.sectionHeadingBlock}>
          <div>
            <span className={styles.sectionKicker}>Curated Works Folio</span>
            <h2>Selected Foothill Residences</h2>
          </div>
          <span style={{ fontSize: "0.76rem", fontFamily: "Courier New, monospace", color: "#666" }}>
            {folioProperties.length} PROPERTIES REGISTERED
          </span>
        </div>

        <div className={styles.folioGrid}>
          {folioProperties.map((prop, index) => (
            <article key={prop.id} className={styles.folioCard}>
              <div className={styles.folioCardImgWrap}>
                <Image
                  src={prop.images[0]}
                  alt={prop.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={styles.folioCardImg}
                />
              </div>

              <div className={styles.folioCardMeta}>
                <div className={styles.folioCardTop}>
                  <span>FOLIO 0{index + 2} · {prop.locality.toUpperCase()}</span>
                  <span>{prop.propertyType}</span>
                </div>
                <h4>{prop.title}</h4>
                <div className={styles.folioPrice}>{prop.price}</div>
                <p>{prop.description}</p>

                <div className={styles.folioCardSpecs}>
                  <span>{prop.area}</span>
                  <span>•</span>
                  <span>{prop.bhk ? `${prop.bhk} BHK` : "Custom Layout"}</span>
                  <span>•</span>
                  <span>{prop.purpose}</span>
                </div>

                <button
                  type="button"
                  className={styles.folioCardAction}
                  onClick={() => setSelectedPropertyDossier(prop)}
                >
                  <span>View Archival Dossier</span>
                  <span>→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 8. Section: Editorial Principles Manifesto */}
      <section className={styles.principlesSection}>
        <div className={styles.principlesInner}>
          <div className={styles.principlesHeader}>
            <span className={styles.sectionKicker}>The Journal Protocol</span>
            <h2>Four Tenets of High-Consideration Curation</h2>
          </div>

          <div className={styles.principlesGrid}>
            {editorialPrinciples.map((item) => (
              <div key={item.number} className={styles.principleItem}>
                <span className={styles.principleNum}>TENET {item.number}</span>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Section: Architectural Projects & Construction Preview */}
      <section className={styles.projectsSection} id="developments">
        <div className={styles.sectionHeadingBlock}>
          <div>
            <span className={styles.sectionKicker}>Commissioned Works</span>
            <h2>Architectural Developments</h2>
          </div>
          <span style={{ fontSize: "0.76rem", fontFamily: "Courier New, monospace", color: "#666" }}>
            CONSTRUCTION COHORTS
          </span>
        </div>

        <div className={styles.projectsGrid}>
          {projects.map((proj) => (
            <article key={proj.id} className={styles.projectCard}>
              <div className={styles.projectImgWrap}>
                <Image
                  src={proj.image}
                  alt={proj.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <span className={styles.location}>{proj.location} · {proj.status}</span>
              <h4>{proj.name}</h4>
              <p>
                A study in low-density community architecture. Integrated rain catchment, vernacular stone footings, and passive southern solar daylighting.
              </p>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", borderTop: "1px solid #111", paddingTop: "10px" }}>
                <span>TYPOLOGY:</span>
                <strong>{proj.type}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 10. Section: Private Acquisition & Client Register Form */}
      <section className={styles.enquirySection} id="private-register">
        <div className={styles.enquiryInner}>
          <div className={styles.enquiryIntro}>
            <span className={styles.sectionKicker}>Direct Client Service</span>
            <h2>Commission a Search or Request the Print Folio</h2>
            <p>
              Our private advisory desk operates on absolute discretion. Share your spatial preferences or project requirements, and we will prepare a dedicated portfolio dossier.
            </p>
            <div style={{ marginTop: "32px", fontSize: "0.85rem", color: "#555" }}>
              <p><strong>Dehradun Bureau:</strong> Rajpur Road, Dehradun 248009</p>
              <p><strong>Private Desk:</strong> direct@ags-journal.example</p>
            </div>
          </div>

          <form
            className={styles.enquiryForm}
            onSubmit={(e) => {
              e.preventDefault();
              setEnquirySubmitted(true);
            }}
          >
            {enquirySubmitted ? (
              <div style={{ padding: "32px 0", textAlign: "center" }}>
                <h3 style={{ fontFamily: "Didot, serif", fontSize: "1.8rem", margin: "0 0 12px" }}>
                  Particulars Request Received
                </h3>
                <p style={{ color: "#555", fontSize: "0.9rem" }}>
                  A private advisor from AGS Studio will review your specifications and contact you shortly.
                </p>
              </div>
            ) : (
              <>
                <div className={styles.formField}>
                  <label>Full Name</label>
                  <input type="text" placeholder="Lord / Lady / Dr. / Mr. / Ms." required />
                </div>
                <div className={styles.formField}>
                  <label>Email or WhatsApp Contact</label>
                  <input type="text" placeholder="+91 / direct email address" required />
                </div>
                <div className={styles.formField}>
                  <label>Target Consideration / Budget</label>
                  <select defaultValue="1.5cr-3cr">
                    <option value="under-1cr">₹60 Lakh – ₹1 Crore</option>
                    <option value="1cr-1.5cr">₹1 Crore – ₹1.5 Crore</option>
                    <option value="1.5cr-3cr">₹1.5 Crore – ₹3.0 Crore</option>
                    <option value="above-3cr">Above ₹3.0 Crore (Estate Class)</option>
                  </select>
                </div>
                <div className={styles.formField}>
                  <label>Preferred Locality &amp; Architectural Focus</label>
                  <textarea rows={3} placeholder="e.g. Mussoorie ridge hillside villa, minimum 3 bedrooms with old-growth trees" />
                </div>
                <button type="submit" className={styles.dossierBtn}>
                  Submit to Private Register →
                </button>
              </>
            )}
          </form>
        </div>
      </section>

      {/* 11. Colophon & Full Publication Footer */}
      <footer className={styles.colophonFooter}>
        <div className={styles.colophonGrid}>
          <div>
            <h4>The Dehradun Property Journal</h4>
            <p>
              A considered architectural publication dedicated to spatial honesty, vernacular permanence, and quiet luxury in the Himalayan foothills.
            </p>
            <p style={{ marginTop: "16px", color: "#777", fontSize: "0.78rem" }}>
              Sample property demonstrator for AGS Realtors &amp; Construction.
            </p>
          </div>

          <div>
            <h5>Navigation</h5>
            <ul>
              <li><a href="#cover-story">Cover Story</a></li>
              <li><a href="#curator-essays">Essays &amp; Craft</a></li>
              <li><a href="#folio-catalogue">Folio Catalogue</a></li>
              <li><a href="#developments">Developments</a></li>
            </ul>
          </div>

          <div>
            <h5>Locality Editions</h5>
            <ul>
              <li><a href="#folio-catalogue">Mussoorie Ridge</a></li>
              <li><a href="#folio-catalogue">Rajpur Road</a></li>
              <li><a href="#folio-catalogue">Sahastradhara</a></li>
              <li><a href="#folio-catalogue">Clement Town</a></li>
            </ul>
          </div>

          <div>
            <h5>Colophon</h5>
            <ul>
              <li>ISSN: 2684-1102</li>
              <li>Typeset in Didot &amp; Grotesk</li>
              <li>Autumn / Winter 2026</li>
              <li>Bureau: Dehradun</li>
            </ul>
          </div>
        </div>

        <div className={styles.colophonBottom}>
          <span>© 2026 The Dehradun Property Journal · AGS Realtors Studio</span>
          <span>Sample Fictional Dataset · Architectural Prototype</span>
        </div>
      </footer>

      {/* Slide-Out Confidential Dossier Drawer */}
      {selectedPropertyDossier && (
        <div
          className={styles.dossierOverlay}
          onClick={() => setSelectedPropertyDossier(null)}
        >
          <div
            className={styles.dossierDrawer}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className={styles.closeDrawerBtn}
              onClick={() => setSelectedPropertyDossier(null)}
            >
              ✕ Close Dossier
            </button>

            <div className={styles.dossierHeader}>
              <span>Confidential Architectural Particulars</span>
              <h2>{selectedPropertyDossier.title}</h2>
              <small style={{ color: "#777", textTransform: "uppercase" }}>
                Cadastral Survey Register · Dehradun Basin
              </small>
            </div>

            <table className={styles.dossierTable}>
              <tbody>
                <tr>
                  <td>Locality / Sector</td>
                  <td>{selectedPropertyDossier.locality}, Dehradun</td>
                </tr>
                <tr>
                  <td>Guide Consideration</td>
                  <td>{selectedPropertyDossier.price}</td>
                </tr>
                <tr>
                  <td>Gross Covered Area</td>
                  <td>{selectedPropertyDossier.area}</td>
                </tr>
                <tr>
                  <td>Configuration</td>
                  <td>{selectedPropertyDossier.bhk ? `${selectedPropertyDossier.bhk} Bedroom Suites` : selectedPropertyDossier.propertyType}</td>
                </tr>
                <tr>
                  <td>Ceiling Clearances</td>
                  <td>3.4m ground floor · 4.2m living volume</td>
                </tr>
                <tr>
                  <td>Zoning Classification</td>
                  <td>Low-Density Residential · Foothill Buffer</td>
                </tr>
                <tr>
                  <td>Solar Orientation</td>
                  <td>Direct South-Southwest Exposure</td>
                </tr>
                <tr>
                  <td>Primary Materials</td>
                  <td>Dressed Quartzite, Seasoned Cedar, Slate</td>
                </tr>
              </tbody>
            </table>

            <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "12px" }}>
              <button
                type="button"
                className={styles.dossierBtn}
                style={{ width: "100%", textAlign: "center" }}
                onClick={() => setPdfDownloaded(true)}
              >
                {pdfDownloaded ? "✓ Particulars PDF Prepared for Client" : "Download PDF Particulars (Demo) ↓"}
              </button>
              <span style={{ fontSize: "0.72rem", color: "#888", textAlign: "center" }}>
                Dispatched under client-advisor confidentiality agreement. Fictional demo dataset.
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
