"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { properties } from "@/data/properties";
import styles from "./grid.module.css";

type BlueprintLayer = "structural" | "mep" | "daylight" | "materials";

export default function ArchitecturalGridPage() {
  const [activeLayer, setActiveLayer] = useState<BlueprintLayer>("structural");
  const [typologyFilter, setTypologyFilter] = useState<string>("All");
  const [localityFilter, setLocalityFilter] = useState<string>("All");
  const [clearanceFilter, setClearanceFilter] = useState<string>("All");

  // Lead form state
  const [leadName, setLeadName] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const [leadRole, setLeadRole] = useState("Private Buyer");
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  // Filtered properties
  const filteredProperties = useMemo(() => {
    return properties.filter((p) => {
      const matchesLocality =
        localityFilter === "All" ||
        p.locality.toLowerCase().includes(localityFilter.toLowerCase());

      const matchesTypology =
        typologyFilter === "All" ||
        (typologyFilter === "Villa" && p.propertyType === "Villa") ||
        (typologyFilter === "Apartment" && p.propertyType === "Apartment") ||
        (typologyFilter === "Commercial" && p.propertyType === "Commercial");

      return matchesLocality && matchesTypology;
    });
  }, [localityFilter, typologyFilter]);

  const heroProperty = properties[0];

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadEmail.trim()) return;
    setLeadSubmitted(true);
  };

  return (
    <div className={styles.gridPage}>
      <div className={styles.gridBackground} />

      <div className={styles.contentWrap}>
        {/* 1. TOP TECHNICAL TELEMETRY BAR */}
        <header className={styles.topBar}>
          <div className={styles.headerTelemetry}>
            <span className={styles.telemetryBadge}>SYS: ARCH-12COL</span>
            <span>COORD: 30.3165° N, 78.0322° E</span>
            <span>ELEV: 890M MSL</span>
            <span>CAD REV: 2026.04</span>
          </div>
          <div style={{ color: "#f26a2e", fontWeight: 700 }}>
            CONCEPT 04 · ARCHITECTURAL GRID // SWISS TECTONICS
          </div>
        </header>

        {/* 2. ARCHITECTURAL BRAND NAVBAR */}
        <nav className={styles.brandNav}>
          <Link href="/designs/architectural-grid" className={styles.brandGroup}>
            <div className={styles.cadLogoSquare}>CAD</div>
            <div className={styles.brandText}>
              <span className={styles.brandTitle}>AGS Architectural // Tectonics</span>
              <span className={styles.brandSubtitle}>Engineered Residences · Himalayan Foothills</span>
            </div>
          </Link>

          <ul className={styles.navLinks}>
            <li><a href="#hero-blueprint" className={styles.navLink}>Blueprints</a></li>
            <li><a href="#catalogue" className={styles.navLink}>Engineered Catalogue</a></li>
            <li><a href="#tenets" className={styles.navLink}>Tectonic Tenets</a></li>
            <li><a href="#audit" className={styles.navLink}>Structural Audit</a></li>
            <li><a href="#consultation" className={styles.navLink}>Book Survey</a></li>
          </ul>

          <div>
            <button
              type="button"
              className={styles.cadSpecSheetBtn}
              onClick={() => alert("Downloading CAD Drawing Dossier [DWG/PDF] - Demo Package.")}
            >
              Download Spec Dossier ↓
            </button>
          </div>
        </nav>

        {/* 3. HERO SEARCH & TECHNICAL FILTER RIBBON */}
        <section className={styles.searchSection}>
          <div className={styles.searchHeaderRow}>
            <div>
              <h1 className={styles.searchHeaderTitle}>
                Engineered Property Discovery // Structural Precision
              </h1>
              <p className={styles.searchHeaderSub}>
                Filter foothill residences by structural framing typology, seismic zone compliance, and spatial volume.
              </p>
            </div>
            <div style={{ fontSize: "0.8rem", color: "#8da4b8" }}>
              Roster: <strong>{filteredProperties.length}</strong> of {properties.length} engineered specimens
            </div>
          </div>

          <div className={styles.filterCard}>
            <div className={styles.filterField}>
              <label>Structural Typology</label>
              <select
                className={styles.filterSelect}
                value={typologyFilter}
                onChange={(e) => setTypologyFilter(e.target.value)}
              >
                <option value="All">All Structural Systems</option>
                <option value="Villa">RCC Moment Frames (Villas)</option>
                <option value="Apartment">Post-Tensioned Slabs (Flats)</option>
                <option value="Commercial">Steel Column Shells (Commercial)</option>
              </select>
            </div>

            <div className={styles.filterField}>
              <label>Foothill Corridor</label>
              <select
                className={styles.filterSelect}
                value={localityFilter}
                onChange={(e) => setLocalityFilter(e.target.value)}
              >
                <option value="All">All Valley Corridors</option>
                <option value="Rajpur">Rajpur Road Corridor</option>
                <option value="Mussoorie">Mussoorie Ridge Slope</option>
                <option value="Sahastradhara">Sahastradhara Basin</option>
                <option value="Dalanwala">Dalanwala Central</option>
                <option value="Clement">Clement Town Southern</option>
              </select>
            </div>

            <div className={styles.filterField}>
              <label>Clearance / Ceiling Height</label>
              <select
                className={styles.filterSelect}
                value={clearanceFilter}
                onChange={(e) => setClearanceFilter(e.target.value)}
              >
                <option value="All">All Clearances</option>
                <option value="3.2m">3.2m Clear Height</option>
                <option value="3.6m">3.6m High Volume</option>
                <option value="4.2m">4.2m Double Height</option>
              </select>
            </div>

            <button
              type="button"
              className={styles.resetBtn}
              onClick={() => {
                setTypologyFilter("All");
                setLocalityFilter("All");
                setClearanceFilter("All");
              }}
            >
              Reset Filters
            </button>
          </div>
        </section>

        {/* 4. HERO PROJECT & INTERACTIVE BLUEPRINT WORKSPACE */}
        <section id="hero-blueprint" className={styles.heroProject}>
          <div className={styles.projectTitleBlock}>
            <div>
              <span className={styles.projectIndexTag}>AGS Specimen // 2026-A1</span>
              <h1>{heroProperty.title}</h1>
              <p className={styles.heroProjectLead}>
                An architectural-first case study. Evaluated not through decorative marketing, but through structural logic, thermal mass, material provenance, and spatial volumetric efficiency.
              </p>
            </div>

            <div className={styles.dataGrid}>
              <div className={styles.dataCell}>
                <span>Gross Built-up Area</span>
                <strong>{heroProperty.area}</strong>
              </div>
              <div className={styles.dataCell}>
                <span>Structural System</span>
                <strong>Reinforced Concrete Frame + Steel Truss</strong>
              </div>
              <div className={styles.dataCell}>
                <span>Thermal Envelope</span>
                <strong>Double-glazed low-E + Cavity stone wall</strong>
              </div>
              <div className={styles.dataCell}>
                <span>Floor-to-Ceiling Clearance</span>
                <strong>3.4m Unobstructed Span</strong>
              </div>
              <div className={styles.dataCell}>
                <span>Seismic Resistance</span>
                <strong>Zone-IV IS 1893:2016 Compliant</strong>
              </div>
              <div className={styles.dataCell}>
                <span>Indicative Valuation</span>
                <strong>{heroProperty.price} (Freehold)</strong>
              </div>
            </div>

            <div className={styles.heroActionRow}>
              <a href="#consultation" className={styles.specBtnPrimary}>
                Book Technical Site Audit →
              </a>
              <button
                type="button"
                className={styles.specBtnSecondary}
                onClick={() => alert("Downloading full schematic package: DWG, BIM model, and structural notes.")}
              >
                Download DWG Floorplan ↓
              </button>
            </div>
          </div>

          {/* Interactive Blueprint Layer Switcher */}
          <div className={styles.blueprintSection}>
            <div className={styles.layerControls}>
              <span style={{ fontSize: "0.68rem", color: "#6d869c", textTransform: "uppercase" }}>
                Active CAD Layer:
              </span>
              <button
                type="button"
                className={`${styles.layerBtn} ${activeLayer === "structural" ? styles.active : ""}`}
                onClick={() => setActiveLayer("structural")}
              >
                1. Structural Grid
              </button>
              <button
                type="button"
                className={`${styles.layerBtn} ${activeLayer === "mep" ? styles.active : ""}`}
                onClick={() => setActiveLayer("mep")}
              >
                2. MEP Conduits
              </button>
              <button
                type="button"
                className={`${styles.layerBtn} ${activeLayer === "daylight" ? styles.active : ""}`}
                onClick={() => setActiveLayer("daylight")}
              >
                3. Solar / Daylight
              </button>
              <button
                type="button"
                className={`${styles.layerBtn} ${activeLayer === "materials" ? styles.active : ""}`}
                onClick={() => setActiveLayer("materials")}
              >
                4. Material Tectonics
              </button>
            </div>

            <div className={styles.canvasBox}>
              <svg className={styles.blueprintSvg} viewBox="0 0 600 400">
                {/* Structural Grid lines */}
                <g stroke="#18324a" strokeWidth="1">
                  <line x1="100" y1="40" x2="100" y2="360" strokeDasharray="3 3" />
                  <line x1="250" y1="40" x2="250" y2="360" strokeDasharray="3 3" />
                  <line x1="400" y1="40" x2="400" y2="360" strokeDasharray="3 3" />
                  <line x1="520" y1="40" x2="520" y2="360" strokeDasharray="3 3" />
                  <line x1="60" y1="120" x2="540" y2="120" strokeDasharray="3 3" />
                  <line x1="60" y1="240" x2="540" y2="240" strokeDasharray="3 3" />
                </g>

                {/* Building Outer Shell */}
                <rect
                  x="100"
                  y="120"
                  width="420"
                  height="180"
                  fill="none"
                  stroke="#cbd5e1"
                  strokeWidth="2.5"
                />

                {/* Internal partitions */}
                <line x1="250" y1="120" x2="250" y2="300" stroke="#cbd5e1" strokeWidth="2" />
                <line x1="400" y1="120" x2="400" y2="220" stroke="#cbd5e1" strokeWidth="2" />
                <line x1="250" y1="200" x2="400" y2="200" stroke="#cbd5e1" strokeWidth="1.5" />

                {/* Layer 1: Structural Columns & Cantilever */}
                {activeLayer === "structural" && (
                  <g>
                    {/* Columns */}
                    {[[100, 120], [250, 120], [400, 120], [520, 120], [100, 300], [250, 300], [400, 300], [520, 300]].map(([cx, cy], i) => (
                      <rect key={i} x={cx - 6} y={cy - 6} width="12" height="12" fill="#f26a2e" />
                    ))}
                    {/* Cantilever terrace */}
                    <rect x="520" y="140" width="50" height="120" fill="rgba(242, 106, 46, 0.15)" stroke="#f26a2e" strokeWidth="1.5" strokeDasharray="4 2" />
                    <text x="525" y="205" fill="#f26a2e" fontSize="9" fontWeight="700">3.2M CANTILEVER</text>
                    <text x="120" y="150" fill="#94a3b8" fontSize="10">LIVING PAVILION [8.4m × 6.2m]</text>
                    <text x="270" y="150" fill="#94a3b8" fontSize="10">CENTRAL COURTYARD</text>
                    <text x="420" y="150" fill="#94a3b8" fontSize="10">MASTER SUITE 01</text>
                  </g>
                )}

                {/* Layer 2: MEP Services */}
                {activeLayer === "mep" && (
                  <g>
                    {/* Rainwater Harvesting Conduit */}
                    <path d="M100,120 L100,340 L280,340" fill="none" stroke="#38bdf8" strokeWidth="3" />
                    <circle cx="280" cy="340" r="14" fill="none" stroke="#38bdf8" strokeWidth="2" />
                    <text x="280" y="344" textAnchor="middle" fill="#38bdf8" fontSize="8" fontWeight="700">45kL RWH CISTERN</text>
                    {/* HVAC Duct line */}
                    <path d="M120,210 L500,210" fill="none" stroke="#fbbf24" strokeWidth="2" strokeDasharray="6 3" />
                    <text x="130" y="200" fill="#fbbf24" fontSize="9">HIGH-EFFICIENCY VRV AIR DISTRIBUTION</text>
                  </g>
                )}

                {/* Layer 3: Daylight Vectors */}
                {activeLayer === "daylight" && (
                  <g>
                    <path d="M80,80 L180,180" stroke="#facc15" strokeWidth="2" />
                    <path d="M180,60 L280,160" stroke="#facc15" strokeWidth="2" />
                    <path d="M280,40 L380,140" stroke="#facc15" strokeWidth="2" />
                    <circle cx="280" cy="40" r="16" fill="rgba(250, 204, 21, 0.2)" stroke="#facc15" />
                    <text x="280" y="44" textAnchor="middle" fill="#facc15" fontSize="8" fontWeight="700">WINTER SUN 10:30 AM</text>
                    <text x="110" y="270" fill="#facc15" fontSize="9">SOUTH APERTURE: 92% DAYLIGHT AUTONOMY</text>
                  </g>
                )}

                {/* Layer 4: Material Index */}
                {activeLayer === "materials" && (
                  <g>
                    <rect x="105" y="125" width="140" height="170" fill="rgba(217, 215, 208, 0.15)" stroke="#d9d7d0" strokeDasharray="2 2" />
                    <text x="115" y="160" fill="#ffffff" fontSize="9" fontWeight="700">MAT-01: Dressed Quartzite</text>
                    <text x="115" y="180" fill="#cbd5e1" fontSize="8">Locally quarried · Thermal damping</text>

                    <rect x="405" y="125" width="110" height="90" fill="rgba(242, 106, 46, 0.12)" stroke="#f26a2e" strokeDasharray="2 2" />
                    <text x="415" y="160" fill="#ffffff" fontSize="9" fontWeight="700">MAT-02: Himalayan Cedar</text>
                    <text x="415" y="180" fill="#cbd5e1" fontSize="8">Seasoned timber louvers</text>
                  </g>
                )}
              </svg>
            </div>

            <div className={styles.layerInfoBox}>
              <strong>Layer Analysis:</strong>{" "}
              {activeLayer === "structural" && "Primary 12×8m RCC moment frames with post-tensioned 3.2m cantilevered balcony over foothill slope."}
              {activeLayer === "mep" && "Integrated gravity-fed rainwater harvesting conduit routed to 45,000L subterranean filtration cistern."}
              {activeLayer === "daylight" && "Southern fenestration tuned for winter passive heat gain with automated external louvers."}
              {activeLayer === "materials" && "Zero-carbon local stone aggregate and reclaimed FSC-certified cedar wood."}
            </div>
          </div>
        </section>

        {/* 5. FULL ENGINEERED RESIDENCES CATALOGUE */}
        <section id="catalogue" className={styles.catalogueSection}>
          <div className={styles.catalogueHeader}>
            <div>
              <h2 className={styles.catalogueTitle}>Active Construction Index</h2>
              <span style={{ fontSize: "0.85rem", color: "#8da4b8" }}>
                Structural Specifications &amp; Architectural Roster
              </span>
            </div>
            <div style={{ fontSize: "0.78rem", color: "#6d869c" }}>
              Total Listings: {filteredProperties.length}
            </div>
          </div>

          <div className={styles.catalogueGrid}>
            {filteredProperties.slice(0, 6).map((prop, idx) => (
              <article key={prop.id} className={styles.propertyCard}>
                <div className={styles.cardImgWrap}>
                  <Image
                    src={prop.images[0]}
                    alt={prop.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className={styles.cardImg}
                  />
                  <span className={styles.cardBadgeCad}>
                    SPEC // 0{idx + 1}
                  </span>
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.cardTopRow}>
                    <span className={styles.cardLocality}>📍 {prop.locality}</span>
                    <span>For {prop.purpose}</span>
                  </div>

                  <h3 className={styles.cardTitle}>{prop.title}</h3>
                  <p className={styles.cardDesc}>{prop.description}</p>

                  <div className={styles.specMatrix}>
                    <div className={styles.specRow}>
                      <span>Area</span>
                      <strong>{prop.area}</strong>
                    </div>
                    <div className={styles.specRow}>
                      <span>Typology</span>
                      <strong>{prop.propertyType}</strong>
                    </div>
                    <div className={styles.specRow}>
                      <span>BHK</span>
                      <strong>{prop.bhk ? `${prop.bhk} BHK` : "Studio/Plot"}</strong>
                    </div>
                    <div className={styles.specRow}>
                      <span>Seismic</span>
                      <strong>Zone IV Compliant</strong>
                    </div>
                  </div>

                  <div className={styles.cardPriceRow}>
                    <span className={styles.cardPrice}>{prop.price}</span>
                    <a href="#consultation" className={styles.cardCtaBtn}>
                      Request CAD Data →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 6. SWISS TECTONIC TENETS */}
        <section id="tenets" className={styles.tenetsSection}>
          <div className={styles.tenetsHeader}>
            <span className={styles.tenetsOverline}>Architectural Discipline</span>
            <h2 className={styles.tenetsTitle}>The Four Swiss Tectonic Tenets</h2>
            <p className={styles.tenetsSub}>
              We construct residences without superficial luxury facade cladding. Every column carries weight; every wall stores heat; every aperture balances solar exposure.
            </p>
          </div>

          <div className={styles.tenetsGrid}>
            <div className={styles.tenetCard}>
              <span className={styles.tenetNumber}>01</span>
              <h3 className={styles.tenetName}>Structural Honesty</h3>
              <p className={styles.tenetText}>
                Exposed RCC moment frames and visible steel trusses. No faux plaster finishes or ornamental columns. Load paths remain legible throughout the residence.
              </p>
            </div>

            <div className={styles.tenetCard}>
              <span className={styles.tenetNumber}>02</span>
              <h3 className={styles.tenetName}>Thermal Mass Damping</h3>
              <p className={styles.tenetText}>
                Dressed quartzite stone cavity walls insulate against severe Himalayan winter temperature drops, stabilizing indoor temperatures naturally.
              </p>
            </div>

            <div className={styles.tenetCard}>
              <span className={styles.tenetNumber}>03</span>
              <h3 className={styles.tenetName}>Daylight Autonomy</h3>
              <p className={styles.tenetText}>
                Southern-oriented floorplates optimized for 92% natural winter daylight illumination, backed by motorized exterior cedar timber louvers.
              </p>
            </div>

            <div className={styles.tenetCard}>
              <span className={styles.tenetNumber}>04</span>
              <h3 className={styles.tenetName}>Hydrological Flow</h3>
              <p className={styles.tenetText}>
                Engineered gravity-fed rainwater harvesting channels channeling rooftop runoff into 45,000L subterranean filtration sumps for self-sufficiency.
              </p>
            </div>
          </div>
        </section>

        {/* 7. STRUCTURAL AUDIT & SEISMIC SAFETY MATRIX */}
        <section id="audit" className={styles.auditSection}>
          <div className={styles.auditGrid}>
            <div className={styles.auditLead}>
              <h2>Foothill Seismic &amp; Soil Integrity Audit</h2>
              <p>
                Building on Himalayan slopes requires rigorous geotechnical calculations. Every AGS residence undergoes comprehensive core sampling and soil load-bearing verification before foundation casting.
              </p>
              <div style={{ display: "flex", gap: "12px" }}>
                <button
                  type="button"
                  className={styles.specBtnPrimary}
                  onClick={() => alert("Soil Bearing Test Report [PDF] - Dehradun Strata Analysis.")}
                >
                  Download Soil Audit [PDF] ↓
                </button>
              </div>
            </div>

            <div className={styles.auditSpecsTable}>
              <div className={styles.auditRow}>
                <span>Soil Bearing Capacity (Dehradun Strata)</span>
                <span>240 kN/m² (Gravel/Boulder Alluvium)</span>
              </div>
              <div className={styles.auditRow}>
                <span>Seismic Design Standard</span>
                <span>IS 1893:2016 Zone-IV Compliant</span>
              </div>
              <div className={styles.auditRow}>
                <span>Slope Stability Retaining Factor</span>
                <span>FOS 1.85 (Reinforced Gabion + RCC)</span>
              </div>
              <div className={styles.auditRow}>
                <span>Thermal Envelope U-Value</span>
                <span>0.32 W/m²K (Low-E Double Glazed)</span>
              </div>
              <div className={styles.auditRow}>
                <span>Rainwater Storage Capacity</span>
                <span>45,000 Litres Subterranean Sump</span>
              </div>
            </div>
          </div>
        </section>

        {/* 8. TECHNICAL SITE SURVEY & STRUCTURAL CONSULTATION FORM */}
        <section id="consultation" className={styles.leadSection}>
          <div className={styles.leadInfo}>
            <h2>Request Technical Site Survey &amp; CAD Package</h2>
            <p>
              Are you an architect, structural consultant, or discerning buyer looking to examine construction blueprints, MEP routing, or permit records?
              Schedule an on-site structural walkthrough with our lead site engineer.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.82rem", color: "#8da4b8" }}>
              <div>✓ Full access to CAD drawings &amp; BIM models</div>
              <div>✓ On-site structural engineer walkthrough</div>
              <div>✓ Freehold title &amp; MDDA sanction paperwork verification</div>
            </div>
          </div>

          <div className={styles.formBox}>
            {leadSubmitted ? (
              <div style={{ textAlign: "center", padding: "30px 10px" }}>
                <div style={{ fontSize: "2rem", marginBottom: "8px" }}>📐</div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#ffffff", margin: "0 0 8px" }}>
                  Survey Request Dispatched
                </h3>
                <p style={{ fontSize: "0.85rem", color: "#8da4b8", margin: 0 }}>
                  Our chief structural consultant will email the full CAD spec packet to <strong>{leadEmail}</strong> within 4 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleLeadSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#ffffff", margin: "0 0 4px" }}>
                  Technical Survey Request
                </h3>
                <div>
                  <label style={{ fontSize: "0.68rem", fontWeight: 700, color: "#f26a2e", textTransform: "uppercase" }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ar. Sandeep Mehta"
                    className={styles.formInput}
                    value={leadName}
                    onChange={(e) => setLeadName(e.target.value)}
                  />
                </div>
                <div>
                  <label style={{ fontSize: "0.68rem", fontWeight: 700, color: "#f26a2e", textTransform: "uppercase" }}>
                    Work / Personal Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="sandeep@architecture.in"
                    className={styles.formInput}
                    value={leadEmail}
                    onChange={(e) => setLeadEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label style={{ fontSize: "0.68rem", fontWeight: 700, color: "#f26a2e", textTransform: "uppercase" }}>
                    Professional Background
                  </label>
                  <select
                    className={styles.formInput}
                    value={leadRole}
                    onChange={(e) => setLeadRole(e.target.value)}
                  >
                    <option value="Private Buyer">Private Home Buyer / Investor</option>
                    <option value="Architect">Architect / Spatial Designer</option>
                    <option value="Civil Engineer">Structural / Civil Engineer</option>
                    <option value="Developer">Institutional Land Buyer</option>
                  </select>
                </div>
                <button type="submit" className={styles.formSubmitBtn}>
                  Confirm Technical Survey →
                </button>
              </form>
            )}
          </div>
        </section>

        {/* 9. TECHNICAL COLOPHON & FOOTER */}
        <footer className={styles.footer}>
          <div className={styles.footerTopRow}>
            <div>
              <strong style={{ color: "#ffffff" }}>AGS ARCHITECTURAL TECTONICS DIVISION</strong>
              <div style={{ color: "#6d869c", marginTop: "4px" }}>
                Level 2, Rajpur Heights, Rajpur Road, Dehradun 248001
              </div>
            </div>

            <div className={styles.footerLinks}>
              <Link href="/" style={{ color: "#f26a2e", textDecoration: "none" }}>← Design Lab Menu</Link>
              <Link href="/designs/foothill-quiet-luxury" style={{ color: "#8da4b8", textDecoration: "none" }}>Concept 01</Link>
              <Link href="/designs/monochrome-editorial" style={{ color: "#8da4b8", textDecoration: "none" }}>Concept 02</Link>
              <Link href="/designs/map-first-property-finder" style={{ color: "#8da4b8", textDecoration: "none" }}>Concept 03</Link>
            </div>
          </div>

          <div className={styles.footerBottomRow}>
            <div>
              Drafting Standard: ISO 128 / Swiss Tectonic 12-Col System • Scale: 1:100 / 1:50 Sample Drawings • Dehradun Foothills.
            </div>
            <div>
              Concept 04 of 10 · Antigravity Real Estate Design Lab
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
