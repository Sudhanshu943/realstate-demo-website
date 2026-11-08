"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { designConcepts } from "@/data/designConcepts";
import styles from "./designs.module.css";

const conceptThumbnails: Record<string, string> = {
  "foothill-quiet-luxury": "/images/hero-dehradun.png",
  "monochrome-editorial": "/images/residence.png",
  "map-first-property-finder": "/images/hero-dehradun.png",
  "architectural-grid": "/images/villa.png",
  "biophilic-wellness": "/images/residence.png",
  "urban-neo-brutalist": "/images/hero-dehradun.png",
  "investment-intelligence": "/images/villa.png",
  "heritage-estate": "/images/residence.png",
  "coastal-lifestyle": "/images/hero-dehradun.png",
  "immersive-3d-residence": "/images/villa.png",
};

const themeBadges: Record<string, string> = {
  foothill: "710m ASL · Foothills",
  editorial: "Issue 01 · Didone Folio",
  map: "📍 Topo · 18m Isochrone",
  architecture: "SYS: 12-COL CAD",
  biophilic: "🌿 Circadian Daylight",
  brutalist: "RAW // ZERO FLUFF",
  investment: "▲ 5.8% Gross Yield",
  heritage: "Deed 1926 · Provenance",
  coastal: "⚓ Tidal & Marina Dock",
  immersive: "⌖ 3D Orbit Raycast",
};

export function DesignMenu() {
  const [filter, setFilter] = useState<"all" | "lifestyle" | "technical">("all");

  const lifestyleSlugs = [
    "foothill-quiet-luxury",
    "monochrome-editorial",
    "biophilic-wellness",
    "heritage-estate",
    "coastal-lifestyle",
  ];

  const visibleConcepts = designConcepts.filter((c) => {
    if (filter === "lifestyle") return lifestyleSlugs.includes(c.slug);
    if (filter === "technical") return !lifestyleSlugs.includes(c.slug);
    return true;
  });

  return (
    <main className={styles.menu}>
      {/* Compact Header */}
      <header className={styles.menuHeader}>
        <div>
          <div className={styles.labBadge}>
            <span>AGS Lab</span>
            <span>·</span>
            <span>Real-Estate Interface Directions</span>
          </div>
          <h1>
            Ten Ways a Property Brand Can <em>Feel.</em>
          </h1>
          <p className={styles.headerSubtitle}>
            Research-backed architectural systems tailored for different audiences, inventories, and business models.
          </p>
        </div>

        <div className={styles.headerLinks}>
          <div className={styles.statPill}>
            <strong>10</strong>
            <span>Concepts</span>
          </div>
          <a
            href="https://github.com/Sudhanshu943/realstate-demo-website/blob/main/docs/real-estate-design-research.md"
            target="_blank"
            rel="noreferrer"
            className={styles.researchBtn}
          >
            Research Report ↗
          </a>
        </div>
      </header>

      {/* Filter Tabs & Count */}
      <section className={styles.filterStrip}>
        <div className={styles.tabGroup}>
          <button
            type="button"
            className={`${styles.tabBtn} ${filter === "all" ? styles.activeTab : ""}`}
            onClick={() => setFilter("all")}
          >
            All 10 Concepts
          </button>
          <button
            type="button"
            className={`${styles.tabBtn} ${filter === "lifestyle" ? styles.activeTab : ""}`}
            onClick={() => setFilter("lifestyle")}
          >
            Lifestyle &amp; Heritage (5)
          </button>
          <button
            type="button"
            className={`${styles.tabBtn} ${filter === "technical" ? styles.activeTab : ""}`}
            onClick={() => setFilter("technical")}
          >
            Data, Tech &amp; 3D (5)
          </button>
        </div>
        <span className={styles.conceptHint}>
          Click any card to launch the isolated live route
        </span>
      </section>

      {/* Themed Concept Grid */}
      <section className={styles.compactConceptGrid}>
        {visibleConcepts.map((concept) => {
          const thumb = conceptThumbnails[concept.slug] || "/images/hero-dehradun.png";
          const themeClass = styles[`card_${concept.theme}`] || "";

          return (
            <Link
              href={concept.href}
              className={`${styles.compactCard} ${themeClass}`}
              key={concept.slug}
            >
              {/* Card Thumbnail */}
              <div className={styles.compactCardImage}>
                <Image
                  src={thumb}
                  alt={concept.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={styles.thumbImg}
                />
                <span className={styles.cardNumBadge}>{concept.number}</span>
                <span className={styles.themeFeatureTag}>
                  {themeBadges[concept.theme] || concept.shortTitle}
                </span>
              </div>

              {/* Card Content */}
              <div className={styles.compactCardBody}>
                <div className={styles.cardHeader}>
                  <span className={styles.audienceTag}>{concept.audience}</span>
                  <h3 className={styles.cardHeading}>{concept.title}</h3>
                </div>

                <p className={styles.cardTagline}>{concept.tagline}</p>

                <div className={styles.featureMeta}>
                  <div className={styles.metaRow}>
                    <span>Signature</span>
                    <strong>{concept.signature}</strong>
                  </div>
                  <div className={styles.metaRow}>
                    <span>Typography</span>
                    <strong>{concept.typography}</strong>
                  </div>
                </div>

                <div className={styles.cardFooter}>
                  <div className={styles.compactPalette}>
                    {concept.palette.map((color) => (
                      <span
                        key={color}
                        style={{ backgroundColor: color }}
                        title={color}
                        className={styles.colorDot}
                      />
                    ))}
                  </div>

                  <span className={styles.launchLink}>
                    Launch {concept.shortTitle} <span>↗</span>
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </section>

      {/* Footer */}
      <footer className={styles.menuFooter}>
        <span>10 Design Systems · 1 Cohesive Repository</span>
        <div style={{ display: "flex", gap: "20px" }}>
          <Link href="/designs/foothill-quiet-luxury">Concept 01 (Foothill Site) →</Link>
          <Link href="/properties">Sample Properties →</Link>
        </div>
      </footer>
    </main>
  );
}
