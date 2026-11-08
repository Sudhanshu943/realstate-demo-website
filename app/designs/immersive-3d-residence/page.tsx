"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { properties } from "@/data/properties";
import styles from "./immersive.module.css";

type FloorLevel = "04" | "03" | "02" | "01";
type OrbitAngle = 0 | 90 | 180 | 270;

const floorData: Record<
  FloorLevel,
  {
    title: string;
    levelName: string;
    area: string;
    config: string;
    terrace: string;
    price: string;
    desc: string;
    units: number;
    sunExposure: string;
  }
> = {
  "04": {
    title: "Level 04 · Sky Penthouse & Sun Deck",
    levelName: "Sky Penthouse",
    area: "3,850 sq ft",
    config: "4 BHK + Private Infinity Plunge Pool",
    terrace: "1,200 sq ft Open Sky Lounge",
    price: "₹2.85 Cr",
    desc: "Single-residence crown floor with 360-degree unobstructed panoramas of the Mussoorie mountain crest and Doon valley lights.",
    units: 1,
    sunExposure: "Unrestricted All-Day (360°)",
  },
  "03": {
    title: "Level 03 · Executive Duplex Suites",
    levelName: "Executive Duplex",
    area: "2,420 sq ft",
    config: "3 BHK + Double-Height Living Pavilion",
    terrace: "450 sq ft Cantilevered Deck",
    price: "₹1.65 Cr",
    desc: "Spacious duplex homes featuring floor-to-ceiling southern glazing, cantilevered viewing decks, and dedicated study libraries.",
    units: 2,
    sunExposure: "Southern Solar Gain (8.5 hrs)",
  },
  "02": {
    title: "Level 02 · Garden Terrace Residences",
    levelName: "Terrace Residence",
    area: "1,980 sq ft",
    config: "3 BHK + Extended Verandah",
    terrace: "320 sq ft Planter Verandah",
    price: "₹1.28 Cr",
    desc: "Family residences planned with perimeter planter buffers, morning kitchen light, and natural cross-ventilation shafts.",
    units: 3,
    sunExposure: "Eastern Morning Light (6 hrs)",
  },
  "01": {
    title: "Level 01 · Courtyard Pavilions & Wellness Lounge",
    levelName: "Courtyard Pavilion",
    area: "1,750 sq ft",
    config: "2 BHK + Private Lawn",
    terrace: "650 sq ft Private Lawn",
    price: "₹98 Lakh",
    desc: "Ground-level residences directly interfacing with the central water feature, resident fitness studio, and covered parking portal.",
    units: 2,
    sunExposure: "Filtered Canopy Light (5 hrs)",
  },
};

export default function Immersive3DResidencePage() {
  const [activeFloor, setActiveFloor] = useState<FloorLevel>("04");
  const [orbitAngle, setOrbitAngle] = useState<OrbitAngle>(0);
  const [shortlisted, setShortlisted] = useState<Record<string, boolean>>({});

  // Search Filter State
  const [selectedLocality, setSelectedLocality] = useState("Rajpur Hills");
  const [selectedLevel, setSelectedLevel] = useState("All Floor Tiers");
  const [selectedSun, setSelectedSun] = useState("South Facing");

  // VIP VR Booking Form State
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [demoType, setDemoType] = useState("Apple Vision Pro Courier Delivery");
  const [preferredSlot, setPreferredSlot] = useState("Weekend Afternoon");
  const [leadConfirmed, setLeadConfirmed] = useState(false);

  const currentFloor = floorData[activeFloor];
  const curatedHomes = properties.slice(0, 3);

  const toggleShortlist = (floorId: string) => {
    setShortlisted((prev) => ({
      ...prev,
      [floorId]: !prev[floorId],
    }));
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientPhone.trim()) return;
    setLeadConfirmed(true);
  };

  return (
    <div className={styles.immersivePage}>
      {/* 1. TOP SPATIAL TELEMETRY RIBBON */}
      <section className={styles.topBar}>
        <div className={styles.topBarStatus}>
          <span className={styles.pulseDot} />
          <span>SYS // WEBGL SPATIAL ENGINE v2.4</span>
          <span>·</span>
          <span>60 FPS LOCKED</span>
          <span>·</span>
          <span>HDR RAYCAST SHADOWS ON</span>
        </div>
        <div>
          <span>CONCEPT 10 · IMMERSIVE 3D RESIDENCES</span>
        </div>
      </section>

      {/* 2. BRAND NAVBAR */}
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <Link href="/designs/immersive-3d-residence" className={styles.brandGroup}>
            <div className={styles.brandLogoBox}>⎔</div>
            <div>
              <div className={styles.brandTitle}>AGS Spatial Residences</div>
              <div className={styles.brandSub}>Virtual Reality &amp; Pre-Construction Digital Twins</div>
            </div>
          </Link>

          <ul className={styles.navLinks}>
            <li><a href="#slicer" className={styles.navLink}>3D Floor Slicer</a></li>
            <li><a href="#specs" className={styles.navLink}>Spec Register</a></li>
            <li><a href="#vr-portfolio" className={styles.navLink}>3D Portfolio</a></li>
            <li><a href="#spatial-advantages" className={styles.navLink}>Spatial Advantages</a></li>
            <li><a href="#vr-booking" className={styles.navLink}>Request VR Tour</a></li>
          </ul>

          <div>
            <a href="#slicer" className={styles.orbitNavBtn}>
              Launch 3D Orbit →
            </a>
          </div>
        </div>
      </nav>

      {/* 3. HERO & SPATIAL SEARCH ENGINE */}
      <section className={styles.heroSection}>
        <div className={styles.heroTag}>
          <span>●</span> Interactive BIM &amp; Spatial Pre-Construction Twin
        </div>
        <h1 className={styles.heroTitle}>
          Walk Inside Your Foothill Residence{" "}
          <span className={styles.heroGradient}>Before The First Stone Is Laid.</span>
        </h1>
        <p className={styles.heroDesc}>
          Explore millimeter-precise digital twin models of upcoming Dehradun hillside estates.
          Evaluate sun vectors across seasons, inspect unobstructed Mussoorie ridge sightlines,
          and slice through floorplates directly in your browser or VR headset.
        </p>

        {/* Hero Search Ribbon */}
        <div className={styles.searchRibbon}>
          <div className={styles.searchField}>
            <label>Micro-Locality</label>
            <select
              value={selectedLocality}
              onChange={(e) => setSelectedLocality(e.target.value)}
            >
              <option value="Rajpur Hills">Rajpur Foothills (Elevation 920m)</option>
              <option value="Old Rajpur">Old Rajpur Heritage Road</option>
              <option value="Mussoorie Foothills">Mussoorie Ridge Corridor</option>
              <option value="Sahastradhara">Sahastradhara Springs</option>
            </select>
          </div>

          <div className={styles.searchField}>
            <label>Level / Tier</label>
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
            >
              <option value="All Floor Tiers">All Floor Tiers</option>
              <option value="Level 04 Sky Penthouse">Level 04 Sky Penthouse</option>
              <option value="Level 03 Duplex Suite">Level 03 Duplex Suite</option>
              <option value="Level 02 Garden Terrace">Level 02 Garden Terrace</option>
              <option value="Level 01 Courtyard">Level 01 Courtyard Lawn</option>
            </select>
          </div>

          <div className={styles.searchField}>
            <label>Solar Orientation</label>
            <select
              value={selectedSun}
              onChange={(e) => setSelectedSun(e.target.value)}
            >
              <option value="South Facing">South Facing (Max Winter Sun)</option>
              <option value="East Facing">East Facing (Morning Pine Breeze)</option>
              <option value="360 Panoramic">360° Unobstructed Ridge Vista</option>
            </select>
          </div>

          <div className={styles.searchField}>
            <label>Render Stack</label>
            <select defaultValue="WebGL 60FPS">
              <option value="WebGL 60FPS">WebGL 2.0 (Browser GPU)</option>
              <option value="WebXR VR">WebXR (Apple Vision / Meta Quest)</option>
              <option value="CAD 2D">2D Engineering Orthographic</option>
            </select>
          </div>

          <a href="#slicer" className={styles.searchBtn} style={{ textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "center" }}>
            Slice 3D Model ↓
          </a>
        </div>
      </section>

      {/* 4. 3D SPATIAL WORKSPACE CONTAINER */}
      <section id="slicer" className={styles.spatialSection}>
        <div className={styles.sectionHeading}>
          <div>
            <span className={styles.sectionKicker}>Interactive Spatial Model</span>
            <h2>Architectural Floorplate Slicer</h2>
          </div>

          <div className={styles.telemetryStrip}>
            <div>
              SUN RAYCAST:{" "}
              <strong>
                {orbitAngle === 0
                  ? "12:00 PM (Direct South)"
                  : orbitAngle === 90
                  ? "08:30 AM (East Sunrise)"
                  : orbitAngle === 180
                  ? "04:45 PM (Western Ridge)"
                  : "02:15 PM (Southwest Warmth)"}
              </strong>
            </div>
            <div>
              ORBIT AZIMUTH: <strong>{orbitAngle}° COMPASS</strong>
            </div>
            <div>
              ELEVATION: <strong>920m AMSL</strong>
            </div>
          </div>
        </div>

        <div className={styles.spatialWorkspace}>
          {/* Ribbon Controls */}
          <div className={styles.controlRibbon}>
            <div className={styles.floorSelector}>
              <span
                style={{
                  font: "700 0.72rem monospace",
                  color: "#64748b",
                  alignSelf: "center",
                  marginRight: "6px",
                  textTransform: "uppercase",
                }}
              >
                Floor Tier:
              </span>
              {(["04", "03", "02", "01"] as FloorLevel[]).map((fl) => (
                <button
                  key={fl}
                  type="button"
                  className={`${styles.floorBtn} ${activeFloor === fl ? styles.activeFloor : ""}`}
                  onClick={() => setActiveFloor(fl)}
                >
                  LEVEL {fl} · {floorData[fl].levelName}
                </button>
              ))}
            </div>

            <div className={styles.orbitControls}>
              <span>CAMERA ORBIT:</span>
              {([0, 90, 180, 270] as OrbitAngle[]).map((angle) => (
                <button
                  key={angle}
                  type="button"
                  className={`${styles.orbitBtn} ${orbitAngle === angle ? styles.activeOrbit : ""}`}
                  onClick={() => setOrbitAngle(angle)}
                >
                  {angle}° {angle === 0 ? "North" : angle === 90 ? "East" : angle === 180 ? "South" : "West"}
                </button>
              ))}
            </div>
          </div>

          {/* 3D Spatial Viewport Canvas */}
          <div className={styles.spatialViewport}>
            <div className={styles.gridLinesBg} />

            {/* Compass / Orientation HUD */}
            <div className={styles.compassOverlay}>
              <div>AZIMUTH: <span>{orbitAngle}°</span></div>
              <div>SOLAR GAIN: <span>{currentFloor.sunExposure}</span></div>
              <div>BIM STATUS: <span>LOD 400 VERIFIED</span></div>
            </div>

            {/* Isometric Vector Building with Highlighted Floor */}
            <svg
              className={styles.spatialSvg}
              viewBox="0 0 600 420"
              style={{
                transform: `scale(1.05) rotate(${
                  orbitAngle === 180 ? 3 : orbitAngle === 90 ? -3 : orbitAngle === 270 ? 2 : 0
                }deg)`,
              }}
            >
              {/* Ground Base / Foundation */}
              <polygon
                points="300,370 490,270 300,170 110,270"
                fill="#0b111a"
                stroke="#1e293b"
                strokeWidth="2"
              />

              {/* Foundation Soil Strata */}
              <polygon
                points="110,270 300,370 300,390 110,290"
                fill="#070c14"
                stroke="#1e293b"
                strokeWidth="1"
              />
              <polygon
                points="300,370 490,270 490,290 300,390"
                fill="#05080f"
                stroke="#1e293b"
                strokeWidth="1"
              />

              {/* Level 01 Block */}
              <g
                opacity={activeFloor === "01" ? 1 : 0.38}
                style={{ cursor: "pointer", transition: "opacity 0.25s ease" }}
                onClick={() => setActiveFloor("01")}
              >
                <polygon
                  points="120,270 300,170 300,130 120,230"
                  fill={activeFloor === "01" ? "#0369a1" : "#0f172a"}
                  stroke={activeFloor === "01" ? "#38bdf8" : "#334155"}
                  strokeWidth={activeFloor === "01" ? "2" : "1"}
                />
                <polygon
                  points="300,170 480,270 480,230 300,130"
                  fill={activeFloor === "01" ? "#0284c7" : "#0c1322"}
                  stroke={activeFloor === "01" ? "#38bdf8" : "#334155"}
                  strokeWidth={activeFloor === "01" ? "2" : "1"}
                />
              </g>

              {/* Level 02 Block */}
              <g
                opacity={activeFloor === "02" ? 1 : 0.38}
                transform="translate(0, -45)"
                style={{ cursor: "pointer", transition: "opacity 0.25s ease" }}
                onClick={() => setActiveFloor("02")}
              >
                <polygon
                  points="135,270 300,175 300,135 135,230"
                  fill={activeFloor === "02" ? "#0369a1" : "#0f172a"}
                  stroke={activeFloor === "02" ? "#38bdf8" : "#334155"}
                  strokeWidth={activeFloor === "02" ? "2" : "1"}
                />
                <polygon
                  points="300,175 465,270 465,230 300,135"
                  fill={activeFloor === "02" ? "#0284c7" : "#0c1322"}
                  stroke={activeFloor === "02" ? "#38bdf8" : "#334155"}
                  strokeWidth={activeFloor === "02" ? "2" : "1"}
                />
              </g>

              {/* Level 03 Block */}
              <g
                opacity={activeFloor === "03" ? 1 : 0.38}
                transform="translate(0, -90)"
                style={{ cursor: "pointer", transition: "opacity 0.25s ease" }}
                onClick={() => setActiveFloor("03")}
              >
                <polygon
                  points="150,270 300,180 300,140 150,230"
                  fill={activeFloor === "03" ? "#0369a1" : "#0f172a"}
                  stroke={activeFloor === "03" ? "#38bdf8" : "#334155"}
                  strokeWidth={activeFloor === "03" ? "2" : "1"}
                />
                <polygon
                  points="300,180 450,270 450,230 300,140"
                  fill={activeFloor === "03" ? "#0284c7" : "#0c1322"}
                  stroke={activeFloor === "03" ? "#38bdf8" : "#334155"}
                  strokeWidth={activeFloor === "03" ? "2" : "1"}
                />
              </g>

              {/* Level 04 Penthouse Block */}
              <g
                opacity={activeFloor === "04" ? 1 : 0.38}
                transform="translate(0, -135)"
                style={{ cursor: "pointer", transition: "opacity 0.25s ease" }}
                onClick={() => setActiveFloor("04")}
              >
                <polygon
                  points="170,270 300,190 300,150 170,230"
                  fill={activeFloor === "04" ? "#0284c7" : "#0f172a"}
                  stroke={activeFloor === "04" ? "#38bdf8" : "#334155"}
                  strokeWidth={activeFloor === "04" ? "2.5" : "1"}
                />
                <polygon
                  points="300,190 430,270 430,230 300,150"
                  fill={activeFloor === "04" ? "#0369a1" : "#0c1322"}
                  stroke={activeFloor === "04" ? "#38bdf8" : "#334155"}
                  strokeWidth={activeFloor === "04" ? "2.5" : "1"}
                />
                {/* Roof Deck */}
                <polygon
                  points="170,150 300,75 430,150 300,225"
                  fill={activeFloor === "04" ? "#0ea5e9" : "#1e293b"}
                  stroke="#38bdf8"
                  strokeWidth="2"
                />
              </g>

              {/* Hotspot Target Callout */}
              <circle
                cx="300"
                cy={
                  activeFloor === "04"
                    ? 140
                    : activeFloor === "03"
                    ? 185
                    : activeFloor === "02"
                    ? 230
                    : 275
                }
                r="7"
                fill="#38bdf8"
              />
              <circle
                cx="300"
                cy={
                  activeFloor === "04"
                    ? 140
                    : activeFloor === "03"
                    ? 185
                    : activeFloor === "02"
                    ? 230
                    : 275
                }
                r="16"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="1.5"
                opacity="0.75"
              />
            </svg>

            {/* Floating HUD info */}
            <div className={styles.hudInfoOverlay}>
              <strong>{currentFloor.title}</strong>
              <p>{currentFloor.desc}</p>
            </div>
          </div>

          {/* Unit Detail Drawer */}
          <div className={styles.unitDetailSection}>
            <div className={styles.unitStats}>
              <div className={styles.statItem}>
                <span>Internal Floor Space</span>
                <strong>{currentFloor.area}</strong>
              </div>
              <div className={styles.statItem}>
                <span>Living Configuration</span>
                <strong>{currentFloor.config}</strong>
              </div>
              <div className={styles.statItem}>
                <span>Outdoor Deck / Lawn</span>
                <strong>{currentFloor.terrace}</strong>
              </div>
              <div className={styles.statItem}>
                <span>Guide Price</span>
                <strong style={{ color: "#38bdf8" }}>{currentFloor.price}</strong>
              </div>
            </div>

            <button
              type="button"
              className={styles.reserveBtn}
              onClick={() => toggleShortlist(activeFloor)}
            >
              {shortlisted[activeFloor] ? "✓ Unit Shortlisted" : "Shortlist Unit →"}
            </button>
          </div>
        </div>
      </section>

      {/* 5. ACCESSIBLE 2D SPECIFICATION REGISTER */}
      <section id="specs" className={styles.fallbackSection}>
        <div className={styles.tableContainer}>
          <div className={styles.fallbackHeader}>
            <div>
              <h3>WCAG AA Engineering Specification Register</h3>
              <p style={{ margin: "4px 0 0", fontSize: "0.82rem", color: "#64748b" }}>
                Complete orthographic data table provided for screen-reader accessibility and low-bandwidth environments.
              </p>
            </div>
            <span>LOD 400 Architectural Specifications</span>
          </div>

          <table className={styles.unitTable}>
            <thead>
              <tr>
                <th>Tier</th>
                <th>Designation</th>
                <th>Carpet Area</th>
                <th>Configuration</th>
                <th>Outdoor Space</th>
                <th>Availability</th>
                <th>Guide Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {(["04", "03", "02", "01"] as FloorLevel[]).map((lvl) => {
                const item = floorData[lvl];
                const isSelected = activeFloor === lvl;
                return (
                  <tr
                    key={lvl}
                    style={{
                      background: isSelected ? "rgba(56, 189, 248, 0.08)" : "transparent",
                    }}
                  >
                    <td>
                      <strong style={{ color: isSelected ? "#38bdf8" : "#cbd5e1" }}>
                        L-{lvl}
                      </strong>
                    </td>
                    <td>{item.title.split("·")[1]}</td>
                    <td>{item.area}</td>
                    <td>{item.config}</td>
                    <td>{item.terrace}</td>
                    <td>
                      <span style={{ color: "#34d399", fontWeight: 600 }}>
                        {item.units} Available
                      </span>
                    </td>
                    <td>
                      <strong>{item.price}</strong>
                    </td>
                    <td>
                      <button
                        type="button"
                        onClick={() => {
                          setActiveFloor(lvl);
                          const el = document.getElementById("slicer");
                          if (el) el.scrollIntoView({ behavior: "smooth" });
                        }}
                        style={{
                          background: isSelected ? "#38bdf8" : "rgba(255, 255, 255, 0.08)",
                          color: isSelected ? "#020617" : "#cbd5e1",
                          border: "none",
                          padding: "6px 12px",
                          borderRadius: "4px",
                          fontSize: "0.72rem",
                          fontFamily: "monospace",
                          cursor: "pointer",
                        }}
                      >
                        {isSelected ? "Inspecting" : "Slice Tier"}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* 6. VR-READY PROPERTY CATALOGUE (3-COLUMN GRID) */}
      <section id="vr-portfolio" className={styles.catalogueSection}>
        <div className={styles.sectionHeading}>
          <div>
            <span className={styles.sectionKicker}>Spatial Development Portfolio</span>
            <h2>VR-Ready Hillside Residences</h2>
          </div>
          <div style={{ color: "#94a3b8", fontSize: "0.85rem" }}>
            Real-time interactive 3D twins calibrated to Dehradun coordinates.
          </div>
        </div>

        <div className={styles.grid3Col}>
          {curatedHomes.map((item, idx) => {
            const badges = [
              "4K MATTERPORT VR LOADED",
              "BIM LOD 400 ACTIVE",
              "SPATIAL TWIN ONLINE",
            ];
            return (
              <article key={item.id} className={styles.residenceCard}>
                <div className={styles.cardImageWrapper}>
                  <Image
                    src={item.images[0]}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                  <div className={styles.vrBadge}>⎔ {badges[idx % badges.length]}</div>
                  <div className={styles.fpsBadge}>60 FPS</div>
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.cardLocation}>{item.locality} · 900M ELEVATION</div>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.description}</p>

                  <div className={styles.cardSpecs}>
                    <span>{item.bhk} BHK</span>
                    <span>·</span>
                    <span>{item.propertyType}</span>
                    <span>·</span>
                    <span>{item.area}</span>
                  </div>

                  <div className={styles.cardFooter}>
                    <div className={styles.cardPrice}>{item.price}</div>
                    <a
                      href="#slicer"
                      className={styles.cardCta}
                      onClick={() => {
                        const el = document.getElementById("slicer");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      Inspect 3D →
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 7. SPATIAL ARCHITECTURE PILLARS (4-COLUMN GRID) */}
      <section id="spatial-advantages" className={styles.pillarsSection}>
        <div className={styles.pillarsInner}>
          <div className={styles.sectionHeading}>
            <div>
              <span className={styles.sectionKicker}>Computational Engineering</span>
              <h2>Why Tour In Spatial 3D Before Purchasing</h2>
            </div>
            <div style={{ color: "#94a3b8", fontSize: "0.85rem" }}>
              Eliminating construction uncertainty for discerning buyers.
            </div>
          </div>

          <div className={styles.grid4Col}>
            <div className={styles.pillarCard}>
              <span className={styles.pillarIcon}>☀️</span>
              <h4>Microclimate Sun Tracking</h4>
              <p>
                Simulate sun position for any date of the year. Verify that morning breakfast decks
                receive winter warmth while living rooms avoid harsh afternoon summer glare.
              </p>
            </div>

            <div className={styles.pillarCard}>
              <span className={styles.pillarIcon}>⛰️</span>
              <h4>Sightline Crest Verification</h4>
              <p>
                Our 3D models integrate regional LIDAR scans to confirm 100% permanent,
                unobstructed views of the Mussoorie ridge before civil foundations are poured.
              </p>
            </div>

            <div className={styles.pillarCard}>
              <span className={styles.pillarIcon}>📐</span>
              <h4>Pre-Civil Customization</h4>
              <p>
                Change internal partition walls, expand walk-in dressing suites, or reconfigure home
                theatres directly in the BIM model prior to concrete curing.
              </p>
            </div>

            <div className={styles.pillarCard}>
              <span className={styles.pillarIcon}>🌐</span>
              <h4>Remote Global Settlement</h4>
              <p>
                Walk through your home in real time with our principal architects from London, Dubai,
                or Singapore, making contractual decisions with total spatial clarity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. VIP VR HEADSET & WALKTHROUGH BOOKING FORM */}
      <section id="vr-booking" className={styles.bookingSection}>
        <div className={styles.bookingContainer}>
          <div className={styles.bookingInfo}>
            <span className={styles.sectionKicker}>Private Spatial Demonstration</span>
            <h3>Experience The Digital Twin In Immersive VR.</h3>
            <p>
              Request a complimentary Apple Vision Pro or Meta Quest 3 headset courier delivery to
              your home or schedule a private demonstration in our Dehradun Architectural Lab.
            </p>

            <div className={styles.bookingPills}>
              <div className={styles.bookingPillItem}>
                <span>✓</span> Hand-delivered VR Headset with Pre-Loaded 3D Twin Models
              </div>
              <div className={styles.bookingPillItem}>
                <span>✓</span> Guided 1-on-1 Spatial Walkthrough with Lead Structural Architect
              </div>
              <div className={styles.bookingPillItem}>
                <span>✓</span> Full Geotechnical and Microclimate Feasibility Report
              </div>
            </div>
          </div>

          <div className={styles.bookingForm}>
            {leadConfirmed ? (
              <div className={styles.successCard}>
                <h4>✓ VR Demonstration Scheduled</h4>
                <p>
                  Our spatial computing concierge will reach out to <strong>{clientPhone}</strong>{" "}
                  within 2 business hours to coordinate delivery and setup.
                </p>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit}>
                <div className={styles.formGroup}>
                  <label>Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikramaditya Singhania"
                    className={styles.formInput}
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>WhatsApp / Mobile Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    className={styles.formInput}
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Preferred Experience Mode</label>
                  <select
                    className={styles.formSelect}
                    value={demoType}
                    onChange={(e) => setDemoType(e.target.value)}
                  >
                    <option value="Apple Vision Pro Courier Delivery">
                      Apple Vision Pro Courier Delivery (Delhi NCR / Dehradun)
                    </option>
                    <option value="Private Studio VR Pod">
                      Private Studio VR Pod (Rajpur Road Lab)
                    </option>
                    <option value="Interactive Browser Screen Share">
                      Interactive Browser Screen Share (Global NRI Consultation)
                    </option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label>Preferred Consultation Slot</label>
                  <select
                    className={styles.formSelect}
                    value={preferredSlot}
                    onChange={(e) => setPreferredSlot(e.target.value)}
                  >
                    <option value="Weekend Afternoon">Weekend Afternoon (12:00 PM - 04:00 PM)</option>
                    <option value="Weekday Evening">Weekday Evening (06:00 PM - 09:00 PM)</option>
                    <option value="Priority Immediate">Next Day Priority</option>
                  </select>
                </div>

                <button type="submit" className={styles.submitBtn}>
                  Confirm Spatial Consultation →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 9. COLOPHON & FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerBrand}>
            <h4>AGS Spatial Computing &amp; Real Estate</h4>
            <p>
              Pioneering millimeter-accurate digital twins and interactive spatial simulations for
              foothill architectural estates across Uttarakhand and North India.
            </p>
            <div className={styles.legalNotice}>
              MODEL TOLERANCE: ±5MM · ALL RENDERS CALIBRATED TO SURVEY OF INDIA DATUM WGS84
            </div>
          </div>

          <div className={styles.footerCol}>
            <h5>Spatial Models</h5>
            <ul>
              <li><a href="#slicer">Level 04 Penthouse</a></li>
              <li><a href="#slicer">Level 03 Duplex Suite</a></li>
              <li><a href="#slicer">Level 02 Garden Terrace</a></li>
              <li><a href="#slicer">Level 01 Courtyard</a></li>
            </ul>
          </div>

          <div className={styles.footerCol}>
            <h5>Design Lab Links</h5>
            <ul>
              <li><Link href="/designs/foothill-quiet-luxury">01. Foothill Quiet Luxury</Link></li>
              <li><Link href="/designs/monochrome-editorial">02. Monochrome Editorial</Link></li>
              <li><Link href="/designs/map-first-property-finder">03. Map-First Finder</Link></li>
              <li><Link href="/designs/architectural-grid">04. Architectural Grid</Link></li>
              <li><Link href="/designs/biophilic-wellness">05. Biophilic Wellness</Link></li>
            </ul>
          </div>

          <div className={styles.footerCol}>
            <h5>Spatial Lab Hub</h5>
            <ul>
              <li>Rajpur Road Lab, Dehradun</li>
              <li>Hardware Hub: Aerocity, New Delhi</li>
              <li>concierge@ags-spatial.com</li>
              <li>+91 135 274 9010</li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div>© 2026 AGS Spatial Residences. All digital twins and architectural assets protected.</div>
          <div>WCAG 2.1 AA Compliant · WebGL 2.0 Hardware Accelerated</div>
        </div>
      </footer>
    </div>
  );
}
