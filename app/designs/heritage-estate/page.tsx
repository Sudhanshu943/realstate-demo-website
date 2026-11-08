"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { properties } from "@/data/properties";
import styles from "./heritage.module.css";

type EraKey = "1928" | "1964" | "2026";

const eras: Record<EraKey, { title: string; image: string; desc: string; seal: string }> = {
  "1928": {
    title: "Era I · The Colonial Sanction (1928)",
    image: "/images/villa.png",
    desc: "Original hand-cut stone masonry laid under the direction of the Doon Valley British residency. Features 18-inch thick rubble core walls and seasoned Deodar rafters designed to withstand heavy monsoon deluges.",
    seal: "MUNICIPAL REGISTER NO. 412 // YEAR 1928",
  },
  "1964": {
    title: "Era II · Orchard Expansion (1964)",
    image: "/images/residence.png",
    desc: "Post-independence expansion by a prominent regional forestry family. The estate added wrap-around verandahs, a private litchi orchard, and terraced stone waterways utilizing natural gravity spring flow.",
    seal: "HERITAGE CONSERVATION REGISTER // FOLIO 1964",
  },
  "2026": {
    title: "Era III · Architectural Stewardship (2026)",
    image: "/images/hero-dehradun.png",
    desc: "Meticulously restored with traditional lime mortar, artisanal slate roof repairs, concealed discreet heating, and seismic zone safety retrofits. Modern luxury embedded inside authentic historical envelope.",
    seal: "RESTORED MONUMENT ARCHIVE // CURRENT RECORD",
  },
};

export default function HeritageEstatePage() {
  const [selectedEra, setSelectedEra] = useState<EraKey>("1928");
  const [particularsSent, setParticularsSent] = useState<string | null>(null);

  // Form states
  const [collectorName, setCollectorName] = useState("");
  const [collectorEmail, setCollectorEmail] = useState("");
  const [estateInterest, setEstateInterest] = useState("Colonial Verandah Bungalow");
  const [registered, setRegistered] = useState(false);

  const eraData = eras[selectedEra];
  const estates = properties.slice(0, 6);

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!collectorEmail.trim()) return;
    setRegistered(true);
  };

  return (
    <div className={styles.heritagePage}>
      {/* 1. TOP ARCHIVAL TELEMETRY BAR */}
      <header className={styles.topBar}>
        <div className={styles.topBarInner}>
          <div>
            <span>THE PRIVATE REGISTER OF HISTORICAL ESTATES // PROVENANCE VERIFIED</span>
          </div>
          <div className={styles.conceptBadge}>
            CONCEPT 08 · HERITAGE ESTATE // ARCHIVAL PROVENANCE
          </div>
        </div>
      </header>

      {/* 2. BRAND NAVBAR */}
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <Link href="/designs/heritage-estate" className={styles.brandGroup}>
            <div className={styles.sealMark}>🏛️</div>
            <div>
              <div className={styles.brandTitle}>AGS Heritage Estates</div>
              <div className={styles.brandSub}>Provenance Register · Dehradun &amp; Mussoorie</div>
            </div>
          </Link>

          <ul className={styles.navLinks}>
            <li><a href="#chronology" className={styles.navLink}>Provenance Timeline</a></li>
            <li><a href="#archive" className={styles.navLink}>The Curated Archive</a></li>
            <li><a href="#charter" className={styles.navLink}>Conservation Charter</a></li>
            <li><a href="#register" className={styles.navLink}>Acquisition Register</a></li>
          </ul>

          <div>
            <button
              type="button"
              className={styles.dossierBtn}
              onClick={() => alert("Downloading Archival Heritage Dossier [PDF] - Demo Pack.")}
            >
              Archival Dossier ↓
            </button>
          </div>
        </div>
      </nav>

      {/* 3. HERO SECTION */}
      <section className={styles.hero}>
        <span className={styles.kicker}>Established Provenance Since 1880</span>
        <h1>Homes with Memory, Held for What Comes Next.</h1>
        <p className={styles.heroLead}>
          A considered archive of rare foothill manors, centenary orchard estates, and colonial stone residences defined by artisanal continuity, clear cadastral titles, and enduring architectural stewardship.
        </p>
      </section>

      {/* 4. PROVENANCE CHRONOLOGY TIMELINE WIDGET */}
      <section id="chronology" className={styles.timelineSection}>
        <div className={styles.timelineCard}>
          <div className={styles.timelineHeader}>
            <div>
              <h2>Archival Provenance Chronology</h2>
              <span style={{ fontSize: "0.85rem", color: "#8c6d48", fontStyle: "italic" }}>
                Tracking 98 years of architectural continuity for the Mussoorie Ridge Manor
              </span>
            </div>
            <div style={{ color: "#3e161c", fontSize: "0.78rem", fontWeight: 700 }}>
              VERIFIED CADASTRAL RECORD
            </div>
          </div>

          <div className={styles.eraTabs}>
            {(["1928", "1964", "2026"] as EraKey[]).map((year) => (
              <button
                key={year}
                type="button"
                className={`${styles.eraBtn} ${selectedEra === year ? styles.active : ""}`}
                onClick={() => setSelectedEra(year)}
              >
                {year === "2026" ? "Year 2026 (Restored Era)" : `Year ${year}`}
              </button>
            ))}
          </div>

          <div className={styles.eraDisplay}>
            <div className={styles.eraImageWrap}>
              <Image
                src={eraData.image}
                alt={eraData.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.eraImg}
              />
            </div>

            <div className={styles.eraText}>
              <h3>{eraData.title}</h3>
              <p>{eraData.desc}</p>
              <div>
                <span className={styles.sealPill}>{eraData.seal}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HERITAGE ESTATE COLLECTION (3-COLUMN GRID) */}
      <section id="archive" className={styles.collectionSection}>
        <div className={styles.collectionHeader}>
          <span className={styles.kicker}>The Available Register</span>
          <h2>The Curated Heritage Archive</h2>
          <p style={{ color: "#5a3d31", fontStyle: "italic", margin: 0 }}>
            Every estate listed includes full title provenance, clear cadastral boundary surveys, and conservation dossiers.
          </p>
        </div>

        <div className={styles.estateGrid}>
          {estates.map((estate) => (
            <article key={estate.id} className={styles.estateCard}>
              <div className={styles.estateImgWrap}>
                <Image
                  src={estate.images[0]}
                  alt={estate.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={styles.estateImg}
                />
              </div>

              <div className={styles.estateBody}>
                <span className={styles.estateLocality}>
                  📍 {estate.locality} · Circa Heritage
                </span>
                <h3 className={styles.estateTitle}>{estate.title}</h3>
                <div className={styles.estatePrice}>{estate.price}</div>
                <p className={styles.estateDesc}>{estate.description}</p>

                <button
                  type="button"
                  className={styles.particularsBtn}
                  onClick={() => setParticularsSent(estate.title)}
                >
                  {particularsSent === estate.title ? "✓ Particulars Dispatched" : "Request Archival Particulars →"}
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 6. CONSERVATION CHARTER (4-COLUMN GRID) */}
      <section id="charter" className={styles.charterSection}>
        <div className={styles.charterInner}>
          <div className={styles.charterHeader}>
            <span style={{ color: "#d4af37", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 700 }}>
              Preservation Protocols
            </span>
            <h2>The Heritage Conservation Charter</h2>
            <p style={{ color: "#d9cec1", maxWidth: "680px", margin: "6px auto 0" }}>
              Our restoration architects operate under strict historical covenants to preserve original structural integrity.
            </p>
          </div>

          <div className={styles.charterGrid}>
            <div className={styles.charterCard}>
              <span className={styles.charterNum}>01</span>
              <h3>Lime Mortar Breathing</h3>
              <p>
                Zero Portland cement. All pointing and wall repairs use traditional slaked lime and river sand to allow stone walls to naturally breathe.
              </p>
            </div>

            <div className={styles.charterCard}>
              <span className={styles.charterNum}>02</span>
              <h3>Reclaimed Timber</h3>
              <p>
                Original Deodar beams and teak door frames are seasoned, oiled, and structurally reinforced without replacing antique woodwork.
              </p>
            </div>

            <div className={styles.charterCard}>
              <span className={styles.charterNum}>03</span>
              <h3>Cadastral Immunity</h3>
              <p>
                Complete 100% freehold land verification with unencumbered boundary walls and ancient litchi tree preservation covenants.
              </p>
            </div>

            <div className={styles.charterCard}>
              <span className={styles.charterNum}>04</span>
              <h3>Discreet Modernity</h3>
              <p>
                Concealed hydronic underfloor heating, concealed high-speed fiber conduits, and seismic damping embedded invisibly within historic floors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CONFIDENTIAL ACQUISITION REGISTER (LEAD FORM) */}
      <section id="register" className={styles.leadSection}>
        <div className={styles.leadBox}>
          <div className={styles.leadText}>
            <h2>Register for Off-Market Heritage Manors</h2>
            <p>
              Due to historical sensitivity, select colonial estates in Dalanwala and Mussoorie are held in off-market private trusts.
              Registered collectors receive private notifications prior to public listings.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.85rem", color: "#5a3d31" }}>
              <div>✓ Absolute client privacy &amp; NDA protection</div>
              <div>✓ Direct access to multi-generational family trusts</div>
              <div>✓ Accompanied private estate visits with heritage architects</div>
            </div>
          </div>

          <div className={styles.formBox}>
            {registered ? (
              <div style={{ textAlign: "center", padding: "30px 10px" }}>
                <div style={{ fontSize: "2rem", marginBottom: "8px" }}>📜</div>
                <h3 style={{ fontSize: "1.2rem", color: "#3e161c", margin: "0 0 8px" }}>
                  Registration Confirmed
                </h3>
                <p style={{ fontSize: "0.85rem", color: "#5a3d31", margin: 0 }}>
                  The archival trustee will contact <strong>{collectorEmail}</strong> regarding off-market acquisitions.
                </p>
              </div>
            ) : (
              <form onSubmit={handleRegisterSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <h3 style={{ fontSize: "1.1rem", color: "#3e161c", margin: "0 0 4px" }}>
                  Private Heritage Register
                </h3>
                <div>
                  <label style={{ fontSize: "0.68rem", fontWeight: 700, color: "#8c6d48", textTransform: "uppercase" }}>
                    Full Name / Family Trust
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Maharaja Vikramaditya Trust"
                    className={styles.formInput}
                    value={collectorName}
                    onChange={(e) => setCollectorName(e.target.value)}
                  />
                </div>
                <div>
                  <label style={{ fontSize: "0.68rem", fontWeight: 700, color: "#8c6d48", textTransform: "uppercase" }}>
                    Private Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="trustee@heritageholding.in"
                    className={styles.formInput}
                    value={collectorEmail}
                    onChange={(e) => setCollectorEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label style={{ fontSize: "0.68rem", fontWeight: 700, color: "#8c6d48", textTransform: "uppercase" }}>
                    Estate Typology Preference
                  </label>
                  <select
                    className={styles.formInput}
                    value={estateInterest}
                    onChange={(e) => setEstateInterest(e.target.value)}
                  >
                    <option>Colonial Verandah Bungalow (Dalanwala)</option>
                    <option>Hillside Stone Manor (Mussoorie Ridge)</option>
                    <option>Centenary Litchi Orchard Compound</option>
                  </select>
                </div>
                <button type="submit" className={styles.formSubmitBtn}>
                  Submit Private Registration →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerTop}>
            <div>
              <strong style={{ color: "#ffffff", fontSize: "1rem" }}>AGS HERITAGE ESTATES // ARCHIVAL TRUST</strong>
              <div style={{ color: "#bfaea5", marginTop: "4px" }}>
                Old Rajpur Heritage Trail, Dehradun, Uttarakhand 248009
              </div>
            </div>

            <div className={styles.footerLinks}>
              <Link href="/">← Design Lab Menu</Link>
              <Link href="/designs/foothill-quiet-luxury">Concept 01</Link>
              <Link href="/designs/monochrome-editorial">Concept 02</Link>
              <Link href="/designs/map-first-property-finder">Concept 03</Link>
              <Link href="/designs/architectural-grid">Concept 04</Link>
              <Link href="/designs/biophilic-wellness">Concept 05</Link>
              <Link href="/designs/urban-neo-brutalist">Concept 06</Link>
              <Link href="/designs/investment-intelligence">Concept 07</Link>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "10px" }}>
            <div>
              Provenance Archive: Historical deeds verified from 1880 Doon Valley Settlement Records.
            </div>
            <div>
              Concept 08 of 10 · Antigravity Real Estate Design Lab
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
