"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { properties } from "@/data/properties";
import styles from "./coastal.module.css";

const dailyItinerary = [
  {
    time: "07:30 AM",
    title: "Morning Paddle & Tide",
    desc: "Launch private kayaks from the sheltered inlet as high tide brings crystal mountain-fed river waters into the bay.",
  },
  {
    time: "11:00 AM",
    title: "Deck Coffee & Horizon",
    desc: "Verandah views facing open southern sunlight, cooled by perpetual coastal valley cross-drafts and pine sea-breeze.",
  },
  {
    time: "04:30 PM",
    title: "Sunset Mooring",
    desc: "Dock inspection and private sailing charter returns as the amber sun dips behind the western mountain ridge.",
  },
  {
    time: "08:00 PM",
    title: "Open Air Dining",
    desc: "Terrace gatherings sheltered by salt-tolerant indigenous groves and ambient garden lighting over tranquil waters.",
  },
];

export default function CoastalLifestylePage() {
  const [stayBooked, setStayBooked] = useState<string | null>(null);

  // Form states
  const [guestName, setGuestName] = useState("");
  const [guestPhone, setGuestPhone] = useState("");
  const [guestParty, setGuestParty] = useState("Weekend Discovery Stay (2 Guests)");
  const [leadConfirmed, setLeadConfirmed] = useState(false);

  const coastalHomes = properties.slice(0, 6);

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestPhone.trim()) return;
    setLeadConfirmed(true);
  };

  return (
    <div className={styles.coastalPage}>
      {/* 1. NAUTICAL LIVE HUD */}
      <section className={styles.nauticalHud}>
        <div className={styles.hudInner}>
          <div className={styles.hudGroup}>
            <div className={styles.hudItem}>
              <span>Tide Status</span>
              <strong>High Tide (+1.4m · 09:42 AM)</strong>
            </div>
            <div className={styles.hudItem}>
              <span>Dockage Clearance</span>
              <strong>14.2 ft Private Draft</strong>
            </div>
            <div className={styles.hudItem}>
              <span>Marine Breeze</span>
              <strong>8 kts WSW · Gentle</strong>
            </div>
            <div className={styles.hudItem}>
              <span>Water Temp</span>
              <strong>23.5°C Calm Waters</strong>
            </div>
          </div>

          <div style={{ fontSize: "0.72rem", color: "#38bdf8", fontWeight: 700 }}>
            CONCEPT 09 · COASTAL &amp; WATERFRONT LIFESTYLE
          </div>
        </div>
      </section>

      {/* 2. BRAND NAVBAR */}
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <Link href="/designs/coastal-lifestyle" className={styles.brandGroup}>
            <div className={styles.brandLogoBox}>⚓</div>
            <div>
              <div className={styles.brandTitle}>AGS Waterfront Residences</div>
              <div className={styles.brandSub}>Nautical &amp; Riparian Estates · Coastal Living</div>
            </div>
          </Link>

          <ul className={styles.navLinks}>
            <li><a href="#itinerary" className={styles.navLink}>Daily Itinerary</a></li>
            <li><a href="#residences" className={styles.navLink}>Waterfront Homes</a></li>
            <li><a href="#standards" className={styles.navLink}>Riparian Safety</a></li>
            <li><a href="#discovery-stay" className={styles.navLink}>Discovery Stay</a></li>
          </ul>

          <div>
            <a href="#discovery-stay" className={styles.tourBtn}>
              Book Shore Tour →
            </a>
          </div>
        </div>
      </nav>

      {/* 3. HERO SECTION */}
      <section className={styles.hero}>
        <span className={styles.kicker}>Riparian Serenity &amp; Horizon Living</span>
        <h1>
          Find your way back to <em>the water.</em>
        </h1>
        <p className={styles.heroLead}>
          A different rhythm of living. Unhurried mornings, open panoramic horizons, and homes shaped around direct nautical access, private moorings, and relaxed waterfront leisure.
        </p>
      </section>

      {/* 4. NAUTICAL DAILY LIVING ITINERARY (4-COLUMN GRID) */}
      <section id="itinerary" className={styles.itinerarySection}>
        <div className={styles.itineraryHeader}>
          <div>
            <h2>A Day by the Water</h2>
            <span style={{ fontSize: "0.85rem", color: "#f27e62", fontWeight: 700 }}>
              Sample Coastal Living Routine
            </span>
          </div>
          <div style={{ color: "#0a2540", fontSize: "0.78rem", fontWeight: 700 }}>
            4-STAGE LIVING RHYTHM
          </div>
        </div>

        <div className={styles.itineraryGrid}>
          {dailyItinerary.map((item, i) => (
            <div key={i} className={styles.itineraryCard}>
              <span className={styles.timeTag}>{item.time}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. WATERFRONT RESIDENCES COLLECTION (3-COLUMN GRID) */}
      <section id="residences" className={styles.homesSection}>
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <span className={styles.kicker}>Available Properties</span>
          <h2 className={styles.sectionHeading}>Waterfront &amp; Riparian Residences</h2>
          <p style={{ color: "#475569", margin: "6px auto 0", maxWidth: "600px" }}>
            Private docks, broad wrap-around decks, and unhindered horizon views across verified riverfront parcels.
          </p>
        </div>

        <div className={styles.homesGrid}>
          {coastalHomes.map((home, idx) => (
            <article key={home.id} className={styles.homeCard}>
              <div className={styles.homeImgWrap}>
                <Image
                  src={home.images[idx % home.images.length]}
                  alt={home.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={styles.homeImg}
                />
              </div>

              <div className={styles.homeBody}>
                <span className={styles.homeLocality}>
                  📍 {home.locality} · {home.area}
                </span>
                <h3 className={styles.homeTitle}>{home.title}</h3>
                <div className={styles.homePrice}>{home.price}</div>
                <p className={styles.homeDesc}>{home.description}</p>

                <div className={styles.coastalPill}>
                  <span className={styles.pill}>⛵ Private Mooring</span>
                  <span className={styles.pill}>🌅 Sunset Horizon</span>
                  <span className={styles.pill}>🏊 Solar-heated Pool</span>
                </div>

                <button
                  type="button"
                  className={styles.discoveryBtn}
                  onClick={() => setStayBooked(home.title)}
                >
                  {stayBooked === home.title ? "✓ Discovery Stay Reserved" : "Plan a Discovery Stay →"}
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 6. RIPARIAN STANDARDS (4-COLUMN GRID) */}
      <section id="standards" className={styles.standardsSection}>
        <div className={styles.standardsInner}>
          <div className={styles.standardsHeader}>
            <span style={{ color: "#38bdf8", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 700 }}>
              Marine Engineering
            </span>
            <h2>Coastal Architecture &amp; Riparian Standards</h2>
            <p style={{ color: "#cbd5e1", maxWidth: "680px", margin: "6px auto 0" }}>
              Every waterfront parcel is protected by certified flood-resilience engineering and marine-grade materials.
            </p>
          </div>

          <div className={styles.standardsGrid}>
            <div className={styles.standardCard}>
              <div className={styles.standardIcon}>🌊</div>
              <h3>100m Riparian Buffer</h3>
              <p>
                All structural floorplates are elevated 3.5m above historical 100-year high-water marks with natural riparian reed bed filtration.
              </p>
            </div>

            <div className={styles.standardCard}>
              <div className={styles.standardIcon}>🔩</div>
              <h3>Marine Grade 316L Alloys</h3>
              <p>
                All structural fasteners, deck railings, and exterior hardware use marine-grade 316L stainless steel that resists corrosion.
              </p>
            </div>

            <div className={styles.standardCard}>
              <div className={styles.standardIcon}>🚤</div>
              <h3>Licensed Private Moorings</h3>
              <p>
                Guaranteed riparian access rights and licensed pontoon moorings approved by regional water transport authorities.
              </p>
            </div>

            <div className={styles.standardCard}>
              <div className={styles.standardIcon}>🌬️</div>
              <h3>Cross-Ventilation Flow</h3>
              <p>
                Stepped pavilions capture diurnal offshore and onshore breezes, delivering natural cooling without high mechanical AC loads.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. DISCOVERY STAY LEAD FORM */}
      <section id="discovery-stay" className={styles.leadSection}>
        <div className={styles.leadBox}>
          <div className={styles.leadText}>
            <h2>Reserve a Coastal Discovery Stay</h2>
            <p>
              Experience the water firsthand before committing. Stay 2 nights at our guest waterfront villa, complete with an accompanied private boat tour and sunset dock tasting.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.85rem", color: "#475569" }}>
              <div>✓ Complimentary 2-hour private yacht cruise</div>
              <div>✓ On-site mooring inspection with harbor master</div>
              <div>✓ Full architectural &amp; water rights documentation</div>
            </div>
          </div>

          <div className={styles.formBox}>
            {leadConfirmed ? (
              <div style={{ textAlign: "center", padding: "30px 10px" }}>
                <div style={{ fontSize: "2.2rem", marginBottom: "8px" }}>⛵</div>
                <h3 style={{ fontSize: "1.2rem", color: "#0a2540", margin: "0 0 8px" }}>
                  Discovery Stay Reserved
                </h3>
                <p style={{ fontSize: "0.85rem", color: "#475569", margin: 0 }}>
                  Our concierge will contact <strong>{guestPhone}</strong> to confirm your weekend itinerary.
                </p>
              </div>
            ) : (
              <form onSubmit={handleLeadSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <h3 style={{ fontSize: "1.1rem", color: "#0a2540", margin: "0 0 4px" }}>
                  Book Discovery Stay
                </h3>
                <div>
                  <label style={{ fontSize: "0.68rem", fontWeight: 700, color: "#64748b", textTransform: "uppercase" }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Capt. Arjun Varma"
                    className={styles.formInput}
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                  />
                </div>
                <div>
                  <label style={{ fontSize: "0.68rem", fontWeight: 700, color: "#64748b", textTransform: "uppercase" }}>
                    Mobile Number (WhatsApp)
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    className={styles.formInput}
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                  />
                </div>
                <div>
                  <label style={{ fontSize: "0.68rem", fontWeight: 700, color: "#64748b", textTransform: "uppercase" }}>
                    Reservation Preference
                  </label>
                  <select
                    className={styles.formInput}
                    value={guestParty}
                    onChange={(e) => setGuestParty(e.target.value)}
                  >
                    <option>Weekend Discovery Stay (2 Guests)</option>
                    <option>Family Waterfront Tour (4+ Guests)</option>
                    <option>Single Day Private Boat Survey</option>
                  </select>
                </div>
                <button type="submit" className={styles.formSubmitBtn}>
                  Confirm Discovery Stay →
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
              <strong style={{ color: "#ffffff", fontSize: "1rem" }}>AGS WATERFRONT // COASTAL LIVING DIVISION</strong>
              <div style={{ color: "#8da4be", marginTop: "4px" }}>
                Marina Office, Asan Lakefront Corridor, Dehradun 248197
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
              <Link href="/designs/heritage-estate">Concept 08</Link>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "10px" }}>
            <div>
              Nautical Standard: Hydrographic Surveyed • Riparian Setback Compliant • Certified Flood Buffer.
            </div>
            <div>
              Concept 09 of 10 · Antigravity Real Estate Design Lab
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
