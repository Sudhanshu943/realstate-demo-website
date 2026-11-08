"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { properties } from "@/data/properties";
import styles from "./brutalist.module.css";

const materialSpecs = [
  {
    name: "01 · C35/45 Board-Formed Concrete",
    tag: "STRUCTURAL SHEAR WALLS",
    spec: "Unpolished board-formed structural shear walls with exposed tie-rod holes. Compressive strength 45 N/mm² providing high thermal mass and fire resistance.",
    metrics: "45 N/mm² Compressive · Zero Plasterboard · Natural Patina",
  },
  {
    name: "02 · Fe 550D High-Tensile Steel",
    tag: "SEISMIC REINFORCEMENT",
    spec: "Earthquake-resistant Grade 550D high-ductility rebar engineered for Himalayan Seismic Zone IV with minimum 18% uniform elongation safety.",
    metrics: "Fe 550D High Ductility · 18% Elongation · Zone IV Compliant",
  },
  {
    name: "03 · 32mm Acoustic Double Glazing",
    tag: "FENESTRATION ENVELOPE",
    spec: "Argon-gas filled toughened glass units attenuating 42dB ambient road noise while maintaining high solar heat gain rejection.",
    metrics: "42dB Acoustic Damping · Argon Filled · Low-E Coating",
  },
  {
    name: "04 · Cast-in-Situ Terrazzo Screeds",
    tag: "MINERAL FLOORING",
    spec: "Crushed riverbed quartzite aggregate set in white cement and hand-ground to expose natural mineral grains with zero synthetic polyurethane resin.",
    metrics: "Zero VOC · 100% Mineral · Lifetime Thermal Storage",
  },
];

export default function UrbanNeoBrutalistPage() {
  const [filterType, setFilterType] = useState<string>("ALL");
  const [activeMatIndex, setActiveMatIndex] = useState<number>(0);
  const [enquirySent, setEnquirySent] = useState<string | null>(null);

  // Form states
  const [buyerName, setBuyerName] = useState("");
  const [buyerPhone, setBuyerPhone] = useState("");
  const [buyerType, setBuyerType] = useState("Direct Homeowner");
  const [leadSuccess, setLeadSuccess] = useState(false);

  const filtered = properties.filter((p) => {
    if (filterType === "VILLAS") return p.propertyType === "Villa";
    if (filterType === "APARTMENTS")
      return p.propertyType === "Apartment" || p.propertyType === "Duplex";
    if (filterType === "COMMERCIAL") return p.propertyType === "Commercial";
    if (filterType === "PLOTS") return p.propertyType === "Plot";
    return true;
  });

  const activeMaterial = materialSpecs[activeMatIndex];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!buyerPhone.trim()) return;
    setLeadSuccess(true);
  };

  return (
    <div className={styles.brutalistPage}>
      {/* 1. TICKER BAND */}
      <div className={styles.tickerBand}>
        <div className={styles.tickerInner}>
          <span>DEHRADUN URBAN INVENTORY // <em>LIVE TELEMETRY</em></span>
          <span>•</span>
          <span>CONCRETE GRADE: C35/45</span>
          <span>•</span>
          <span>ZERO HYPERBOLE // REAL METRICS</span>
        </div>
        <div>
          <span>CONCEPT 06 · URBAN NEO-BRUTALIST</span>
        </div>
      </div>

      {/* 2. BRAND NAVBAR */}
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <Link href="/designs/urban-neo-brutalist" className={styles.brandGroup}>
            <div className={styles.brandLogoBox}>RAW</div>
            <div>
              <div className={styles.brandTitle}>AGS RAW // TECTONIC SPACES</div>
              <div className={styles.brandSub}>Dehradun Urban Portfolio · Concrete &amp; Steel</div>
            </div>
          </Link>

          <ul className={styles.navLinks}>
            <li><a href="#inventory" className={styles.navLink}>Inventory</a></li>
            <li><a href="#inspector" className={styles.navLink}>Material Dossier</a></li>
            <li><a href="#manifesto" className={styles.navLink}>Manifesto</a></li>
            <li><a href="#acquisition" className={styles.navLink}>Acquisition</a></li>
          </ul>

          <div>
            <a href="#acquisition" className={styles.navActionBtn}>
              Acquire Unit →
            </a>
          </div>
        </div>
      </nav>

      {/* 3. HERO SECTION */}
      <section className={styles.heroSection}>
        <div>
          <span className={styles.kickerTag}>Industrial Luxury Real Estate</span>
          <h1 className={styles.heroHeading}>
            Real Spaces.<br />Zero Fluff.
          </h1>
          <p className={styles.heroLead}>
            Engineered for city dwellers, architects, and studio operators who value structural transparency.
            We display raw floor heights, exact square footage, unadorned concrete finishes, and genuine developer pricing without decorative sales jargon.
          </p>
        </div>

        <div className={styles.heroSpecBlock}>
          <h3>Structural Baseline Matrix</h3>
          <div className={styles.heroSpecRow}>
            <span>MINIMUM CEILING HEIGHT</span>
            <span>3.40m CLEAR SPAN</span>
          </div>
          <div className={styles.heroSpecRow}>
            <span>STRUCTURAL CORE</span>
            <span>BOARD-FORMED RCC FRAME</span>
          </div>
          <div className={styles.heroSpecRow}>
            <span>SEISMIC SAFETY</span>
            <span>ZONE IV (IS 1893:2016)</span>
          </div>
          <div className={styles.heroSpecRow}>
            <span>COMMISSION / BROKERAGE</span>
            <span>0% DIRECT PRICING</span>
          </div>
        </div>
      </section>

      {/* 4. SEARCH & COMMAND FILTER BAR */}
      <section id="inventory" className={styles.filterSection}>
        <div className={styles.filterInner}>
          <div className={styles.filterBtns}>
            {["ALL", "APARTMENTS", "VILLAS", "COMMERCIAL", "PLOTS"].map((cat) => (
              <button
                key={cat}
                type="button"
                className={`${styles.termBtn} ${filterType === cat ? styles.active : ""}`}
                onClick={() => setFilterType(cat)}
              >
                [ {cat} ]
              </button>
            ))}
          </div>

          <div style={{ fontSize: "0.75rem", color: "#888888" }}>
            SHOWING <strong>{filtered.length}</strong> RAW SPECIMENS
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE MATERIAL SPEC INSPECTOR */}
      <section id="inspector" className={styles.materialInspectorSection}>
        <div className={styles.inspectorBox}>
          <div className={styles.inspectorHeader}>
            <div>
              <h3>Material Tectonics &amp; Load Dossier</h3>
              <span style={{ fontSize: "0.78rem", color: "#888888" }}>
                Select an engineering layer to inspect physical characteristics
              </span>
            </div>
            <div style={{ color: "#ffff00", fontSize: "0.75rem", fontWeight: 700 }}>
              VERIFIED CONSTRUCTION METRICS
            </div>
          </div>

          <div className={styles.materialSelectorRow}>
            {materialSpecs.map((mat, idx) => (
              <button
                key={idx}
                type="button"
                className={`${styles.matSelectBtn} ${activeMatIndex === idx ? styles.activeMat : ""}`}
                onClick={() => setActiveMatIndex(idx)}
              >
                {mat.name.split("·")[0]}
              </button>
            ))}
          </div>

          <div className={styles.materialDetailCard}>
            <div>
              <div style={{ fontSize: "0.7rem", color: "#ffff00", fontWeight: 700, marginBottom: "4px" }}>
                {activeMaterial.tag}
              </div>
              <h4 className={styles.matTitle}>{activeMaterial.name}</h4>
              <p className={styles.matDesc}>{activeMaterial.spec}</p>
            </div>
            <div className={styles.matStats}>
              <div style={{ borderBottom: "1px dashed #444", paddingBottom: "6px", color: "#888" }}>
                LAB TESTING &amp; RATINGS
              </div>
              <div style={{ color: "#ffffff", fontWeight: 700 }}>{activeMaterial.metrics}</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. RAW PROPERTIES INVENTORY GRID */}
      <section className={styles.inventorySection}>
        <h2 className={styles.sectionTitle}>Available Raw Units ({filtered.length})</h2>

        <div className={styles.grid}>
          {filtered.map((item, idx) => (
            <article key={item.id} className={styles.card}>
              <div className={styles.cardImageWrap}>
                <Image
                  src={item.images[idx % item.images.length]}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={styles.cardImg}
                />
                <div className={styles.cardStamps}>
                  <span className={styles.stampPrice}>{item.price}</span>
                  <span className={styles.stampBadge}>{item.propertyType}</span>
                </div>
              </div>

              <div className={styles.cardBody}>
                <div className={styles.cardMetaRow}>
                  <span>LOC: {item.locality.toUpperCase()}</span>
                  <span>•</span>
                  <span>FOR: {item.purpose.toUpperCase()}</span>
                </div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <div className={styles.specBox}>
                  <div>
                    <span>FLOOR AREA</span>
                    <strong>{item.area}</strong>
                  </div>
                  <div>
                    <span>CONFIG</span>
                    <strong>{item.bhk ? `${item.bhk} BHK` : "STUDIO"}</strong>
                  </div>
                  <div>
                    <span>STATUS</span>
                    <strong style={{ color: "#ffff00" }}>READY</strong>
                  </div>
                </div>

                <button
                  type="button"
                  className={styles.actionBtn}
                  onClick={() => setEnquirySent(item.title)}
                >
                  {enquirySent === item.title ? "✓ DISPATCHED VIA WHATSAPP" : "FAST TRACK ENQUIRY →"}
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 7. BRUTALIST MANIFESTO (4-COLUMN GRID) */}
      <section id="manifesto" className={styles.manifestoSection}>
        <h2 className={styles.sectionTitle}>The Neo-Brutalist Construction Manifesto</h2>

        <div className={styles.manifestoGrid}>
          <div className={styles.manifestoCard}>
            <span className={styles.manifestoNum}>01</span>
            <h4>Truth in Materials</h4>
            <p>
              Concrete is left exposed. Steel retains its mill-scale patina. We never apply faux marble vinyl wraps or plastic moldings over honest structure.
            </p>
          </div>

          <div className={styles.manifestoCard}>
            <span className={styles.manifestoNum}>02</span>
            <h4>Volume Over Trim</h4>
            <p>
              We spend capital on 3.6m ceiling clearances and deep daylight apertures rather than disposable gold-plated fixtures and synthetic wallpaper.
            </p>
          </div>

          <div className={styles.manifestoCard}>
            <span className={styles.manifestoNum}>03</span>
            <h4>Acoustic Mass</h4>
            <p>
              300mm solid envelope walls insulate against Himalayan winter frost and eliminate urban traffic noise naturally without synthetic batting.
            </p>
          </div>

          <div className={styles.manifestoCard}>
            <span className={styles.manifestoNum}>04</span>
            <h4>Permanent Durability</h4>
            <p>
              Raw board-formed concrete weathers with time into a dignified stone-gray facade that never requires periodic repainting or chemical sealing.
            </p>
          </div>
        </div>
      </section>

      {/* 8. PRIVATE ACQUISITION LEAD TERMINAL */}
      <section id="acquisition" className={styles.leadSection}>
        <div className={styles.leadInner}>
          <div className={styles.leadText}>
            <h2>Direct Unit Acquisition Terminal</h2>
            <p>
              Direct developer terms. No intermediary broker markups. Schedule an on-site structural inspection or lock down an unlisted raw loft.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.85rem", color: "#888888" }}>
              <div>✓ Immediate WhatsApp floorplan dispatch</div>
              <div>✓ Structural core test reports on request</div>
              <div>✓ Accompanied site visit with lead engineer</div>
            </div>
          </div>

          <div className={styles.formBox}>
            {leadSuccess ? (
              <div style={{ textAlign: "center", padding: "28px 10px" }}>
                <div style={{ fontSize: "2rem", marginBottom: "8px" }}>⚡</div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 900, color: "#ffff00", margin: "0 0 8px" }}>
                  DISPATCH CONFIRMED
                </h3>
                <p style={{ fontSize: "0.82rem", color: "#aaaaaa", margin: 0 }}>
                  Raw unit technical particulars and pricing sheets transmitted to <strong>{buyerPhone}</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 900, color: "#ffffff", margin: "0 0 4px" }}>
                  ACQUISITION DISPATCH
                </h3>
                <div>
                  <label style={{ fontSize: "0.68rem", fontWeight: 700, color: "#ffff00", textTransform: "uppercase" }}>
                    FULL NAME
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikram Malhotra"
                    className={styles.formInput}
                    value={buyerName}
                    onChange={(e) => setBuyerName(e.target.value)}
                  />
                </div>
                <div>
                  <label style={{ fontSize: "0.68rem", fontWeight: 700, color: "#ffff00", textTransform: "uppercase" }}>
                    MOBILE NUMBER (WHATSAPP)
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    className={styles.formInput}
                    value={buyerPhone}
                    onChange={(e) => setBuyerPhone(e.target.value)}
                  />
                </div>
                <div>
                  <label style={{ fontSize: "0.68rem", fontWeight: 700, color: "#ffff00", textTransform: "uppercase" }}>
                    ACQUISITION PROFILE
                  </label>
                  <select
                    className={styles.formInput}
                    value={buyerType}
                    onChange={(e) => setBuyerType(e.target.value)}
                  >
                    <option>Direct Homeowner / Resident</option>
                    <option>Design Studio / Creative Office</option>
                    <option>Real Estate Investor</option>
                  </select>
                </div>
                <button type="submit" className={styles.submitBtn}>
                  DISPATCH UNIT PARTICULARS →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerTop}>
            <div>
              <strong style={{ color: "#ffffff", letterSpacing: "0.05em" }}>AGS RAW // URBAN NEO-BRUTALIST DIVISION</strong>
              <div style={{ color: "#888888", marginTop: "4px" }}>
                Level 2, Rajpur Heights, Rajpur Road, Dehradun 248001
              </div>
            </div>

            <div className={styles.footerLinks}>
              <Link href="/">← Design Lab Menu</Link>
              <Link href="/designs/foothill-quiet-luxury">Concept 01</Link>
              <Link href="/designs/monochrome-editorial">Concept 02</Link>
              <Link href="/designs/map-first-property-finder">Concept 03</Link>
              <Link href="/designs/architectural-grid">Concept 04</Link>
              <Link href="/designs/biophilic-wellness">Concept 05</Link>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "10px" }}>
            <div>
              Tectonic Standard: Unfinished Concrete C35/45 • Fe 550D Rebar • Seismic Zone IV • 0% Brokerage.
            </div>
            <div>
              Concept 06 of 10 · Antigravity Real Estate Design Lab
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
