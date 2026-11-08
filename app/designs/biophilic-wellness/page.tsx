"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { properties } from "@/data/properties";
import styles from "./biophilic.module.css";

type CircadianTime = "dawn" | "midday" | "golden" | "twilight";

const circadianData: Record<
  CircadianTime,
  { label: string; time: string; light: string; bg: string; tempDrop: string; aqi: string; desc: string }
> = {
  dawn: {
    label: "01 · Dawn Mist",
    time: "06:15 AM",
    light: "Cool diffused morning light (~4,500K)",
    bg: "linear-gradient(135deg, #a8c0b2 0%, #d4e0d8 100%)",
    tempDrop: "14°C Morning Crisp",
    aqi: "AQI 22 (Pristine)",
    desc: "Mist gathers in the valley as initial solar rays break across the eastern mountain ridge. Bedrooms receive early blue spectrum light that naturally activates the human circadian wake rhythm.",
  },
  midday: {
    label: "02 · Canopy Shade",
    time: "12:30 PM",
    light: "Filtered overhead daylight (~5,500K)",
    bg: "linear-gradient(135deg, #71856b 0%, #a4b89f 100%)",
    tempDrop: "4.2°C Cooler Than City Plains",
    aqi: "AQI 28 (Excellent)",
    desc: "Deep verandahs and broad-leaf Sal tree canopies intercept direct high-altitude solar heat gain, creating microclimates substantially cooler than open valley urban centers.",
  },
  golden: {
    label: "03 · Golden Ridge",
    time: "05:45 PM",
    light: "Warm amber glow (~2,700K)",
    bg: "linear-gradient(135deg, #b46d4d 0%, #dfa586 100%)",
    tempDrop: "20°C Mild Foothill Breeze",
    aqi: "AQI 26 (Pristine)",
    desc: "Long shadow lines cast over courtyard gardens. High-thermal stone walls absorb residual warmth to gently radiate heat into interior living spaces throughout the cool foothill evening.",
  },
  twilight: {
    label: "04 · Starlight Night",
    time: "09:00 PM",
    light: "Zero light pollution sky (~1,800K warm interior)",
    bg: "linear-gradient(135deg, #1b3127 0%, #244236 100%)",
    tempDrop: "16°C Night Draft",
    aqi: "AQI 18 (Alpine Air)",
    desc: "Clean sub-Himalayan skies with unpolluted star visibility. Natural mountain valley draft provides gentle cross-ventilation, completely eliminating dependency on mechanical cooling.",
  },
};

const floraSpecies = [
  {
    name: "Shorea Robusta (Sal Tree)",
    role: "Thermal Canopy Buffer",
    desc: "Native canopy tree providing dense summer shade, moisture retention on steep slopes, and high natural oxygen output.",
  },
  {
    name: "Cedrus Deodara (Himalayan Cedar)",
    role: "Acoustic Shield & Phytoncides",
    desc: "Aromatic evergreen barrier attenuating distant valley sounds and releasing airborne antimicrobial phytoncides.",
  },
  {
    name: "Jasminum Humile (Yellow Jasmine)",
    role: "Sensory Landscape",
    desc: "Wild foothill flora attracting native mountain pollinators and filling garden verandahs with seasonal evening fragrance.",
  },
  {
    name: "Cymbopogon (Wild Lemongrass)",
    role: "Natural Insect Deterrent",
    desc: "Perennial medicinal grass planted along courtyard perimeters as a chemical-free pest deterrent.",
  },
];

export default function BiophilicWellnessPage() {
  const [circadianTime, setCircadianTime] = useState<CircadianTime>("dawn");
  const [proximityFilter, setProximityFilter] = useState<string>("All");
  const [purposeFilter, setPurposeFilter] = useState<string>("All");

  // Lead form state
  const [leadName, setLeadName] = useState("");
  const [leadPhone, setLeadPhone] = useState("");
  const [leadDate, setLeadDate] = useState("Saturday Morning (07:00 AM)");
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  const activeTime = circadianData[circadianTime];

  const filteredProperties = useMemo(() => {
    return properties.filter((p) => {
      const matchesProximity =
        proximityFilter === "All" ||
        (proximityFilter === "Rajpur" && p.locality.includes("Rajpur")) ||
        (proximityFilter === "Mussoorie" && p.locality.includes("Mussoorie")) ||
        (proximityFilter === "Sahastradhara" && p.locality.includes("Sahastradhara")) ||
        (proximityFilter === "Dalanwala" && p.locality.includes("Dalanwala"));

      const matchesPurpose =
        purposeFilter === "All" || p.purpose === purposeFilter;

      return matchesProximity && matchesPurpose;
    });
  }, [proximityFilter, purposeFilter]);

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadPhone.trim()) return;
    setLeadSubmitted(true);
  };

  return (
    <div className={styles.biophilicPage}>
      {/* 1. TOP ECOLOGICAL TELEMETRY RIBBON */}
      <div className={styles.topTelemetryBar}>
        <div className={styles.topTelemetryInner}>
          <div className={telemetryGroupClass(styles.telemetryGroup)}>
            <div className={styles.telemetryItem}>
              <span className={styles.telemetryDot} />
              <span>Basin Air Quality: AQI 26 (Pristine Alpine)</span>
            </div>
            <div className={styles.telemetryItem}>
              <span>Sal Forest Canopy Cover: 78%</span>
            </div>
            <div className={styles.telemetryItem}>
              <span>Subterranean Spring: Flowing Clean</span>
            </div>
          </div>
          <div>
            <span className={styles.conceptBadge}>
              Concept 05 · Biophilic Wellness Living
            </span>
          </div>
        </div>
      </div>

      {/* 2. BRAND NAVBAR */}
      <header className={styles.brandNavbar}>
        <div className={styles.navInner}>
          <Link href="/designs/biophilic-wellness" className={styles.brandLogoGroup}>
            <div className={styles.leafLogo}>🌿</div>
            <div>
              <div className={styles.brandTitle}>AGS Biophilic Residences</div>
              <div className={styles.brandSub}>Sanctuary Living · Dehradun Foothills</div>
            </div>
          </Link>

          <ul className={styles.navMenuItems}>
            <li><a href="#circadian" className={styles.navLink}>Circadian Simulator</a></li>
            <li><a href="#sanctuary-homes" className={styles.navLink}>Sanctuary Homes</a></li>
            <li><a href="#flora-ledger" className={styles.navLink}>Canopy Ledger</a></li>
            <li><a href="#living-pillars" className={styles.navLink}>Wellness Pillars</a></li>
            <li><a href="#morning-walk" className={styles.navLink}>Morning Mist Walk</a></li>
          </ul>

          <div className={styles.navActions}>
            <a href="tel:+919876543210" className={styles.phoneLink}>
              📞 +91 98765 43210
            </a>
            <a href="#morning-walk" className={styles.walkBtn}>
              Book Forest Walk →
            </a>
          </div>
        </div>
      </header>

      {/* 3. HERO SEARCH & DISCOVERY SECTION */}
      <section className={styles.heroSection}>
        <div className={styles.heroLeadGroup}>
          <span className={styles.kicker}>Ecosystem-Led Foothill Living</span>
          <h1 className={styles.heroHeading}>
            A home should help you<br />
            <em>breathe deeper.</em>
          </h1>
          <p className={styles.heroIntro}>
            In an era of congested urban density, we prioritize spatial tranquility, 100% natural cross-ventilation,
            unfiltered Himalayan mountain air, and circadian daylight balance framed by centenary Sal canopies.
          </p>
        </div>

        {/* Botanical Search Filter Card */}
        <div className={styles.searchCard}>
          <div className={styles.searchField}>
            <label>Forest Proximity &amp; Corridor</label>
            <select
              className={styles.searchSelect}
              value={proximityFilter}
              onChange={(e) => setProximityFilter(e.target.value)}
            >
              <option value="All">All Sanctuary Locations ({properties.length} Listings)</option>
              <option value="Rajpur">Rajpur Malsi Forest Buffer</option>
              <option value="Mussoorie">Mussoorie Pine Ridge</option>
              <option value="Sahastradhara">Sahastradhara Spring Basin</option>
              <option value="Dalanwala">Dalanwala Orchard Canopy</option>
            </select>
          </div>

          <div className={styles.searchField}>
            <label>Ownership Purpose</label>
            <select
              className={styles.searchSelect}
              value={purposeFilter}
              onChange={(e) => setPurposeFilter(e.target.value)}
            >
              <option value="All">Buy &amp; Long-term Lease</option>
              <option value="Buy">Outright Purchase (Freehold)</option>
              <option value="Rent">Seasonal Wellness Lease</option>
            </select>
          </div>

          <div className={styles.searchField}>
            <label>Outdoor Living Space</label>
            <select className={styles.searchSelect}>
              <option>Any Outdoor Configuration</option>
              <option>Private Garden (1,500+ sq ft)</option>
              <option>Stepped Hillside Deck</option>
              <option>Central Open Courtyard</option>
            </select>
          </div>

          <button
            type="button"
            className={styles.resetBtn}
            onClick={() => {
              setProximityFilter("All");
              setPurposeFilter("All");
            }}
          >
            Reset Filters
          </button>
        </div>
      </section>

      {/* 4. CIRCADIAN DAYLIGHT & ATMOSPHERE SIMULATOR */}
      <section id="circadian" className={styles.circadianSection}>
        <div className={styles.circadianWidget}>
          <div className={styles.circadianHeader}>
            <div>
              <h2>Circadian Daylight &amp; Atmosphere Simulator</h2>
              <span style={{ fontSize: "0.85rem", color: "#71856b" }}>
                Interactive solar and microclimate study across the Dehradun foothill slope
              </span>
            </div>
            <div className={styles.timePills}>
              {(Object.keys(circadianData) as CircadianTime[]).map((timeKey) => (
                <button
                  key={timeKey}
                  type="button"
                  className={`${styles.timePill} ${circadianTime === timeKey ? styles.active : ""}`}
                  onClick={() => setCircadianTime(timeKey)}
                >
                  {circadianData[timeKey].label}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.circadianDetails}>
            <div className={styles.lightGraphic} style={{ background: activeTime.bg }}>
              <span>{activeTime.time} — {activeTime.light}</span>
            </div>
            <div className={styles.lightText}>
              <h4>{activeTime.label}</h4>
              <p>{activeTime.desc}</p>
              <div className={styles.lightMetricsBar}>
                <span>🌡️ {activeTime.tempDrop}</span>
                <span>🍃 {activeTime.aqi}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SANCTUARY PROPERTY CATALOGUE (3-COLUMN GRID) */}
      <section id="sanctuary-homes" className={styles.homesSection}>
        <div className={styles.sectionHeadingGroup}>
          <span className={styles.kicker}>Curated Living</span>
          <h2 className={styles.sectionHeading}>Homes Framed by Open Canopy</h2>
          <p className={styles.sectionSub}>
            Low-density residences featuring private garden boundaries, cross-ventilation corridors, and verified foothill views.
          </p>
        </div>

        <div className={styles.homesGrid}>
          {filteredProperties.slice(0, 6).map((home, idx) => (
            <article key={home.id} className={styles.homeCard}>
              <div className={styles.homeImgWrap}>
                <Image
                  src={home.images[idx % home.images.length]}
                  alt={home.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={styles.homeImg}
                />
                <span className={styles.natureBadge}>
                  {home.locality}
                </span>
              </div>
              <div className={styles.homeBody}>
                <span className={styles.homeLocality}>
                  {home.bhk ? `${home.bhk} BHK • ` : ""}{home.area} • For {home.purpose}
                </span>
                <h3 className={styles.homeTitle}>{home.title}</h3>
                <div className={styles.homePrice}>{home.price}</div>
                <p className={styles.homeDesc}>{home.description}</p>
                <div className={styles.wellnessTags}>
                  <span className={styles.tag}>🌿 100% Cross-Ventilated</span>
                  <span className={styles.tag}>☀️ Southern Daylight</span>
                  <span className={styles.tag}>💧 Spring Water Cistern</span>
                </div>
                <a href="#morning-walk" className={styles.homeCardAction}>
                  Inquire on Residence →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 6. NATIVE HIMALAYAN FLORA LEDGER (4-COLUMN GRID) */}
      <section id="flora-ledger" className={styles.floraSection}>
        <div className={styles.floraInner}>
          <div className={styles.floraHeader}>
            <span style={{ color: "#a7cfba", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 700 }}>
              Ecological Stewardship
            </span>
            <h2>Native Foothill Flora &amp; Canopy Ledger</h2>
            <p style={{ color: "#d1ded6", maxWidth: "680px", margin: "6px 0 0" }}>
              Our landscape planning preserves mature endemic species rather than clearing land for ornamental turf lawns.
            </p>
          </div>

          <div className={styles.floraGrid}>
            {floraSpecies.map((flora, i) => (
              <div key={i} className={styles.floraCard}>
                <h3>{flora.name}</h3>
                <span className={styles.floraSpecies}>{flora.role}</span>
                <p>{flora.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BIOPHILIC LIVING PILLARS (4-COLUMN GRID) */}
      <section id="living-pillars" className={styles.pillarsSection}>
        <div className={styles.sectionHeadingGroup}>
          <span className={styles.kicker}>Wellness Architecture</span>
          <h2 className={styles.sectionHeading}>The Four Biophilic Living Pillars</h2>
          <p className={styles.sectionSub}>
            Every residence is engineered around human biology and natural foothill environmental dynamics.
          </p>
        </div>

        <div className={styles.pillarsGrid}>
          <div className={styles.pillarCard}>
            <div className={styles.pillarIcon}>🌬️</div>
            <h3 className={styles.pillarTitle}>Air Purity by Design</h3>
            <p className={styles.pillarText}>
              Oriented toward natural Himalayan valley drafts that funnel fresh pine-scented air through living spaces, keeping indoor AQI consistently below 30.
            </p>
          </div>

          <div className={styles.pillarCard}>
            <div className={styles.pillarIcon}>🪵</div>
            <h3 className={styles.pillarTitle}>Non-Toxic Earth Palette</h3>
            <p className={styles.pillarText}>
              Constructed with local dressed quartzite, lime-wash plaster, and VOC-free Himalayan cedar timber that naturally breathes and ages gracefully.
            </p>
          </div>

          <div className={styles.pillarCard}>
            <div className={styles.pillarIcon}>💧</div>
            <h3 className={styles.pillarTitle}>Subterranean Spring Purity</h3>
            <p className={styles.pillarText}>
              Direct gravity-fed spring water collection paired with natural sand-gravel bio-filtration, providing mineral-rich water without chemical treatment.
            </p>
          </div>

          <div className={styles.pillarCard}>
            <div className={styles.pillarIcon}>☀️</div>
            <h3 className={styles.pillarTitle}>Circadian Alignment</h3>
            <p className={styles.pillarText}>
              Room fenestration mirrors the natural solar arc: blue morning light in bedrooms, shaded midday living pavilions, and warm amber light in courtyards.
            </p>
          </div>
        </div>
      </section>

      {/* 8. MORNING MIST WALKING TOUR LEAD FORM */}
      <section id="morning-walk" className={styles.leadSection}>
        <div className={styles.leadInner}>
          <div className={styles.leadTextGroup}>
            <h2>Reserve a Morning Mist Forest Walk</h2>
            <p>
              The best way to understand foothill biophilic living is during the early morning mist window (07:00 AM – 09:30 AM).
              Join our resident landscape naturalist for an unhurried walking tour of our forest sanctuary residences.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.85rem", color: "#f7e6df" }}>
              <div>✓ Experience true ambient silence and birdsong</div>
              <div>✓ Measure real-time morning pine air purity (AQI)</div>
              <div>✓ Complimentary herbal breakfast on the forest deck</div>
            </div>
          </div>

          <div className={styles.leadFormCard}>
            {leadSubmitted ? (
              <div style={{ textAlign: "center", padding: "30px 10px" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "10px" }}>🍃</div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, margin: "0 0 8px" }}>
                  Forest Walk Confirmed, {leadName || "Valued Guest"}
                </h3>
                <p style={{ fontSize: "0.85rem", color: "#71856b", margin: 0 }}>
                  We have reserved your morning walkthrough for <strong>{leadDate}</strong>. Our naturalist will contact you at <strong>{leadPhone}</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleLeadSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, margin: "0 0 4px" }}>
                  Plan Your Morning Site Walk
                </h3>
                <div>
                  <label style={{ fontSize: "0.68rem", fontWeight: 700, color: "#71856b", textTransform: "uppercase" }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Ananya Sen"
                    className={styles.formInput}
                    value={leadName}
                    onChange={(e) => setLeadName(e.target.value)}
                  />
                </div>
                <div>
                  <label style={{ fontSize: "0.68rem", fontWeight: 700, color: "#71856b", textTransform: "uppercase" }}>
                    Mobile Number (WhatsApp)
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    className={styles.formInput}
                    value={leadPhone}
                    onChange={(e) => setLeadPhone(e.target.value)}
                  />
                </div>
                <div>
                  <label style={{ fontSize: "0.68rem", fontWeight: 700, color: "#71856b", textTransform: "uppercase" }}>
                    Preferred Walking Window
                  </label>
                  <select
                    className={styles.formInput}
                    value={leadDate}
                    onChange={(e) => setLeadDate(e.target.value)}
                  >
                    <option>Saturday Morning (07:00 AM – 09:30 AM)</option>
                    <option>Sunday Morning (07:00 AM – 09:30 AM)</option>
                    <option>Weekday Dawn Walk (06:30 AM – 08:30 AM)</option>
                  </select>
                </div>
                <button type="submit" className={styles.formSubmitBtn}>
                  Confirm Morning Walk Reservation →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 9. COLOPHON & FOOTER */}
      <footer className={styles.siteFooter}>
        <div className={styles.footerContainer}>
          <div className={styles.footerTop}>
            <div style={{ maxWidth: "340px" }}>
              <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ffffff", marginBottom: "6px" }}>
                AGS Biophilic Residences
              </div>
              <p style={{ margin: 0, lineHeight: 1.6 }}>
                Dedicated to regenerative foothill living, organic architecture, and forest conservation in the Dehradun Basin, Uttarakhand.
              </p>
            </div>

            <div>
              <div style={{ fontWeight: 700, color: "#ffffff", marginBottom: "8px" }}>Sanctuary Office</div>
              <p style={{ margin: 0, lineHeight: 1.6 }}>
                Malsi Reserve Foothills<br />
                Near Old Rajpur Trail<br />
                Dehradun, Uttarakhand 248009
              </p>
            </div>

            <div>
              <div style={{ fontWeight: 700, color: "#ffffff", marginBottom: "8px" }}>Contact Naturalist</div>
              <p style={{ margin: 0, lineHeight: 1.6 }}>
                Phone: +91 98765 43210<br />
                Email: sanctuary@agsestates.in<br />
                Dawn walks: Daily 07:00 AM – 09:30 AM
              </p>
            </div>

            <div>
              <div style={{ fontWeight: 700, color: "#ffffff", marginBottom: "8px" }}>Design Lab Navigation</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <Link href="/" style={{ color: "#52b788", textDecoration: "none" }}>← Design Lab Menu</Link>
                <Link href="/designs/foothill-quiet-luxury" style={{ color: "#a7cfba", textDecoration: "none" }}>Concept 01 · Foothill Luxury</Link>
                <Link href="/designs/monochrome-editorial" style={{ color: "#a7cfba", textDecoration: "none" }}>Concept 02 · Editorial</Link>
                <Link href="/designs/map-first-property-finder" style={{ color: "#a7cfba", textDecoration: "none" }}>Concept 03 · Map Finder</Link>
                <Link href="/designs/architectural-grid" style={{ color: "#a7cfba", textDecoration: "none" }}>Concept 04 · Architectural Grid</Link>
              </div>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <div>
              Ecological Stewardship Standard: Native species preservation • Zero chemical runoff • Natural spring catchment.
            </div>
            <div>
              Concept 05 of 10 · Antigravity Real Estate Design Lab
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function telemetryGroupClass(base: string) {
  return base;
}
