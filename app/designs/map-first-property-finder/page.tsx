"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { properties, projects } from "@/data/properties";
import styles from "./map.module.css";

// Property coordinates mapped across the entire 800 x 600 valley map space
interface MapCoord {
  x: number;
  y: number;
  elevation: string;
  commute: string;
}

const propertyCoordinates: Record<string, MapCoord> = {
  "mussoorie-road-villa": { x: 390, y: 130, elevation: "990m", commute: "28 mins" },
  "rajpur-hillside-home": { x: 490, y: 200, elevation: "880m", commute: "18 mins" },
  "sahastradhara-residence": { x: 630, y: 250, elevation: "760m", commute: "22 mins" },
  "jakhan-urban-home": { x: 430, y: 290, elevation: "720m", commute: "12 mins" },
  "dalanwala-residence": { x: 510, y: 360, elevation: "680m", commute: "10 mins" },
  "gms-road-office": { x: 260, y: 370, elevation: "650m", commute: "15 mins" },
  "prem-nagar-plot": { x: 150, y: 400, elevation: "640m", commute: "25 mins" },
  "turner-road-home": { x: 310, y: 460, elevation: "630m", commute: "18 mins" },
  "clement-town-duplex": { x: 420, y: 510, elevation: "620m", commute: "20 mins" },
};

export default function MapFirstPropertyFinderPage() {
  const [selectedId, setSelectedId] = useState<string>("rajpur-hillside-home");
  const [localityFilter, setLocalityFilter] = useState<string>("All");
  const [purposeFilter, setPurposeFilter] = useState<string>("All");
  const [bhkFilter, setBhkFilter] = useState<string>("All");
  const [typeFilter, setTypeFilter] = useState<string>("All");
  const [showActiveCardOnMap, setShowActiveCardOnMap] = useState<boolean>(true);

  // Lead form state
  const [leadName, setLeadName] = useState("");
  const [leadPhone, setLeadPhone] = useState("");
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  // Filtered properties
  const filteredProperties = useMemo(() => {
    return properties.filter((p) => {
      const matchesLocality =
        localityFilter === "All" ||
        p.locality.toLowerCase().includes(localityFilter.toLowerCase());

      const matchesPurpose =
        purposeFilter === "All" || p.purpose === purposeFilter;

      const matchesBhk =
        bhkFilter === "All" ||
        (bhkFilter === "4+"
          ? (p.bhk || 0) >= 4
          : (p.bhk || 0) === parseInt(bhkFilter, 10));

      const matchesType =
        typeFilter === "All" ||
        p.propertyType.toLowerCase() === typeFilter.toLowerCase();

      return matchesLocality && matchesPurpose && matchesBhk && matchesType;
    });
  }, [localityFilter, purposeFilter, bhkFilter, typeFilter]);

  const activeProperty =
    properties.find((p) => p.id === selectedId) || filteredProperties[0] || properties[0];
  const activeCoord = propertyCoordinates[activeProperty.id];

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadPhone.trim()) return;
    setLeadSubmitted(true);
  };

  return (
    <div className={styles.portalWrapper}>
      {/* 1. CONCEPT LAB BANNER */}
      <div className={styles.conceptStrip}>
        <div className={styles.conceptStripInner}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span className={styles.conceptBadge}>Concept 03 · Map-First Property Finder</span>
            <span>Interactive Real Estate Discovery by Geography & Corridor</span>
          </div>
          <div>
            <Link href="/" style={{ color: "#38bdf8", textDecoration: "none", fontWeight: 600 }}>
              ← Return to Design Lab Menu
            </Link>
          </div>
        </div>
      </div>

      {/* 2. REAL ESTATE MAIN NAVBAR */}
      <header className={styles.mainNav}>
        <div className={styles.navContainer}>
          <Link href="/designs/map-first-property-finder" className={styles.brandLogoGroup}>
            <div className={styles.logoIcon}>AGS</div>
            <div>
              <div className={styles.brandName}>AGS Estates Dehradun</div>
              <div className={styles.brandTagline}>Himalayan Foothill & Valley Real Estate</div>
            </div>
          </Link>

          <ul className={styles.navMenuItems}>
            <li><a href="#map-section" className={styles.navLink}>Map Search</a></li>
            <li><a href="#featured-projects" className={styles.navLink}>Signature Projects</a></li>
            <li><a href="#neighborhoods" className={styles.navLink}>Neighborhood Guides</a></li>
            <li><a href="#why-choose-us" className={styles.navLink}>Why AGS</a></li>
            <li><a href="#book-visit" className={styles.navLink}>Schedule Visit</a></li>
          </ul>

          <div className={styles.navRightActions}>
            <a href="tel:+919876543210" className={styles.contactPhone}>
              📞 +91 98765 43210
            </a>
            <a href="#book-visit" className={styles.bookVisitBtn}>
              Book Site Tour
            </a>
          </div>
        </div>
      </header>

      {/* 3. HERO SEARCH SECTION */}
      <section id="map-section" className={styles.heroSearchSection}>
        <div className={styles.heroSearchInner}>
          <div className={styles.heroHeadRow}>
            <div>
              <h1 className={styles.heroMainTitle}>
                Explore Dehradun Homes on an Interactive Valley Map
              </h1>
              <p className={styles.heroSubtext}>
                Filter hillside villas, modern family apartments, and scenic land parcels by corridor, budget, and commute.
              </p>
            </div>
            <div style={{ fontSize: "0.82rem", color: "#64748b" }}>
              Showing <strong>{filteredProperties.length}</strong> of {properties.length} verified listings
            </div>
          </div>

          {/* Unified Horizontal Search Bar */}
          <div className={styles.searchBarCard}>
            <div className={styles.searchPill}>
              <label>Neighborhood</label>
              <select
                className={styles.searchSelect}
                value={localityFilter}
                onChange={(e) => setLocalityFilter(e.target.value)}
              >
                <option value="All">All Locations</option>
                <option value="Rajpur">Rajpur Road</option>
                <option value="Mussoorie">Mussoorie Road</option>
                <option value="Sahastradhara">Sahastradhara Road</option>
                <option value="Jakhan">Jakhan</option>
                <option value="Dalanwala">Dalanwala</option>
                <option value="Clement">Clement Town</option>
                <option value="Prem">Prem Nagar</option>
              </select>
            </div>

            <div className={styles.searchPill}>
              <label>Purpose</label>
              <select
                className={styles.searchSelect}
                value={purposeFilter}
                onChange={(e) => setPurposeFilter(e.target.value)}
              >
                <option value="All">Buy & Rent</option>
                <option value="Buy">For Sale (Buy)</option>
                <option value="Rent">For Lease (Rent)</option>
              </select>
            </div>

            <div className={styles.searchPill}>
              <label>Bedrooms</label>
              <select
                className={styles.searchSelect}
                value={bhkFilter}
                onChange={(e) => setBhkFilter(e.target.value)}
              >
                <option value="All">Any BHK</option>
                <option value="2">2 BHK</option>
                <option value="3">3 BHK</option>
                <option value="4+">4+ BHK</option>
              </select>
            </div>

            <div className={styles.searchPill}>
              <label>Property Type</label>
              <select
                className={styles.searchSelect}
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
              >
                <option value="All">All Types</option>
                <option value="Villa">Villas & Estates</option>
                <option value="Apartment">Apartments & Flats</option>
                <option value="Duplex">Duplex Homes</option>
                <option value="Plot">Land / Plots</option>
                <option value="Commercial">Commercial</option>
              </select>
            </div>

            <button
              type="button"
              className={styles.resetBtn}
              onClick={() => {
                setLocalityFilter("All");
                setPurposeFilter("All");
                setBhkFilter("All");
                setTypeFilter("All");
              }}
            >
              Reset Filters
            </button>
          </div>
        </div>
      </section>

      {/* 4. SPLIT MAP EXPLORER */}
      <section className={styles.mapExplorerSection}>
        <div className={styles.explorerLayout}>
          {/* LEFT: Clean Vector Map Viewport */}
          <div className={styles.mapContainer}>
            <div className={styles.mapHud}>
              <strong>📍 Dehradun Valley Map Explorer</strong>
              <span>Click any price badge on the map to highlight property details</span>
            </div>

            <div className={styles.mapControls}>
              <button type="button" className={styles.mapBtn} title="Zoom in">+</button>
              <button type="button" className={styles.mapBtn} title="Zoom out">−</button>
              <button
                type="button"
                className={styles.mapBtn}
                title="Reset View"
                onClick={() => {
                  setSelectedId("rajpur-hillside-home");
                  setShowActiveCardOnMap(true);
                }}
              >
                ⊙
              </button>
            </div>

            {/* Active Property Card on Map */}
            {activeProperty && showActiveCardOnMap && (
              <div className={styles.activePropertyCardOnMap}>
                <button
                  type="button"
                  className={styles.cardCloseBtn}
                  onClick={() => setShowActiveCardOnMap(false)}
                  title="Close preview"
                >
                  ✕
                </button>
                <div className={styles.onMapThumb}>
                  <Image
                    src={activeProperty.images[0]}
                    alt={activeProperty.title}
                    fill
                    sizes="75px"
                    className={styles.rowImg}
                  />
                </div>
                <div className={styles.onMapInfo}>
                  <span className={styles.onMapLocality}>
                    📍 {activeProperty.locality} • {activeCoord?.elevation}
                  </span>
                  <h4 className={styles.onMapTitle}>{activeProperty.title}</h4>
                  <div className={styles.onMapPrice}>{activeProperty.price}</div>
                  <a href="#book-visit" className={styles.onMapTourLink}>
                    Schedule Private Tour →
                  </a>
                </div>
              </div>
            )}

            {/* Map Canvas with balanced viewport */}
            <svg
              className={styles.mapSvg}
              viewBox="0 0 800 600"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="valleyBaseGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#dce8de" />
                  <stop offset="25%" stopColor="#eaf0ea" />
                  <stop offset="60%" stopColor="#f3f6f9" />
                  <stop offset="100%" stopColor="#faf7ee" />
                </linearGradient>

                <filter id="pinShadow3D" x="-30%" y="-30%" width="160%" height="160%">
                  <feDropShadow dx="0" dy="2.5" stdDeviation="3.5" floodOpacity="0.22" />
                </filter>
              </defs>

              {/* Valley Surface */}
              <rect width="800" height="600" fill="url(#valleyBaseGrad)" />

              {/* Mussoorie Mountain Ridge & Foothills */}
              <path
                d="M0,0 Q180,65 400,50 T800,25 L800,0 L0,0 Z"
                fill="#b0c4ad"
                opacity="0.9"
              />
              <path
                d="M0,45 Q220,110 440,90 T800,55 L800,0 L0,0 Z"
                fill="#c3d5c1"
                opacity="0.6"
              />
              <text x="400" y="32" fill="#2d4530" fontSize="12" fontWeight="800" textAnchor="middle" letterSpacing="0.05em">
                ▲ MUSSOORIE HIMALAYAN FOOTHILL RIDGE (1,150m - 1,400m)
              </text>

              {/* Neighborhood Zone Polygons */}
              {/* Rajpur Corridor Zone */}
              <path
                d="M400,100 C470,95 560,130 550,230 C540,280 430,290 390,220 Z"
                fill="#d8ead6"
                opacity="0.45"
              />
              <text x="480" y="150" fill="#2d6a36" fontSize="10" fontWeight="700">
                Rajpur Foothill Belt
              </text>

              {/* Sahastradhara Spring Valley */}
              <path
                d="M560,190 C640,180 720,210 710,290 C690,340 590,320 570,260 Z"
                fill="#d2e8ed"
                opacity="0.5"
              />
              <text x="630" y="220" fill="#1b6370" fontSize="10" fontWeight="700">
                Sahastradhara Basin
              </text>

              {/* Dalanwala Heritage Orchard Zone */}
              <circle cx="510" cy="360" r="45" fill="#fef3c7" opacity="0.45" />
              <text x="510" y="335" fill="#92400e" fontSize="9" fontWeight="700" textAnchor="middle">
                Dalanwala Heritage
              </text>

              {/* Malsi Sal Forest Reserve */}
              <path
                d="M330,130 C370,115 440,125 450,170 C450,200 390,210 340,190 Z"
                fill="#86efac"
                opacity="0.4"
              />
              <text x="365" y="165" fill="#15803d" fontSize="9" fontWeight="700">
                🌲 Malsi Forest
              </text>

              {/* River Streams (Bindal & Rispana) */}
              <path
                d="M500,140 Q475,250 460,360 T470,580"
                stroke="#93c5fd"
                strokeWidth="4"
                fill="none"
                opacity="0.8"
              />
              <text x="480" y="480" fill="#3b82f6" fontSize="9" fontWeight="600">Rispana Stream</text>

              <path
                d="M360,160 Q340,280 330,390 T310,580"
                stroke="#93c5fd"
                strokeWidth="3.5"
                fill="none"
                opacity="0.75"
              />
              <text x="250" y="440" fill="#3b82f6" fontSize="9" fontWeight="600">Bindal Stream</text>

              {/* Primary Arterial Roads */}
              {/* Rajpur Road Spine */}
              <path
                d="M420,370 L430,280 L460,180 L390,110"
                stroke="#475569"
                strokeWidth="7"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M420,370 L430,280 L460,180 L390,110"
                stroke="#ffffff"
                strokeWidth="2"
                fill="none"
                strokeDasharray="4 4"
              />
              <text x="440" y="240" fill="#0f172a" fontSize="10.5" fontWeight="800">
                Rajpur Road
              </text>

              {/* Sahastradhara Road */}
              <path
                d="M420,370 L520,290 L640,230"
                stroke="#64748b"
                strokeWidth="5.5"
                fill="none"
              />
              <text x="560" y="280" fill="#0f172a" fontSize="10" fontWeight="700">
                Sahastradhara Rd
              </text>

              {/* Chakrata / GMS Road Corridor */}
              <path
                d="M420,370 L280,380 L130,400"
                stroke="#64748b"
                strokeWidth="5.5"
                fill="none"
              />
              <text x="200" y="375" fill="#0f172a" fontSize="10" fontWeight="700">
                Chakrata / GMS Road
              </text>

              {/* Southern Clement Town Highway */}
              <path
                d="M420,370 L380,450 L420,540"
                stroke="#64748b"
                strokeWidth="5.5"
                fill="none"
              />
              <text x="350" y="490" fill="#0f172a" fontSize="10" fontWeight="700">
                Clement Town Highway
              </text>

              {/* City Center Landmark: Clock Tower */}
              <g transform="translate(420, 370)">
                <circle r="11" fill="#0f172a" stroke="#ffffff" strokeWidth="2.5" />
                <circle r="4" fill="#38bdf8" />
                <text x="16" y="5" fill="#0f172a" fontSize="12" fontWeight="800">
                  Clock Tower (City Center)
                </text>
              </g>

              {/* Isochrone Drive-Time Circles */}
              <circle
                cx="420"
                cy="370"
                r="115"
                fill="none"
                stroke="#0284c7"
                strokeWidth="1.2"
                strokeDasharray="4 4"
                opacity="0.55"
              />
              <text x="420" y="265" fill="#0284c7" fontSize="8.5" fontWeight="700" textAnchor="middle">
                15 MIN COMMUTE
              </text>

              <circle
                cx="420"
                cy="370"
                r="195"
                fill="none"
                stroke="#0284c7"
                strokeWidth="1"
                strokeDasharray="6 4"
                opacity="0.4"
              />
              <text x="420" y="185" fill="#0284c7" fontSize="8.5" fontWeight="700" textAnchor="middle">
                25 MIN COMMUTE
              </text>

              {/* Modern Airbnb/Zillow Pill Price Pins */}
              {filteredProperties.map((prop) => {
                const coord = propertyCoordinates[prop.id];
                if (!coord) return null;
                const isSelected = prop.id === selectedId;

                return (
                  <g
                    key={prop.id}
                    className={`${styles.pinElement} ${isSelected ? styles.activePin : ""}`}
                    onClick={() => {
                      setSelectedId(prop.id);
                      setShowActiveCardOnMap(true);
                    }}
                    transform={`translate(${coord.x}, ${coord.y})`}
                    filter="url(#pinShadow3D)"
                  >
                    {/* Pill Bubble Shape */}
                    <rect
                      x="-44"
                      y={isSelected ? "-26" : "-20"}
                      width="88"
                      height={isSelected ? "28" : "24"}
                      rx={isSelected ? "14" : "12"}
                      fill={isSelected ? "#0284c7" : "#ffffff"}
                      stroke={isSelected ? "#ffffff" : "#0f172a"}
                      strokeWidth={isSelected ? "2.2" : "1.2"}
                    />
                    <text
                      x="0"
                      y={isSelected ? "-7" : "-4"}
                      textAnchor="middle"
                      fill={isSelected ? "#ffffff" : "#0f172a"}
                      fontSize={isSelected ? "11.5" : "10.5"}
                      fontWeight="800"
                    >
                      {prop.price.split("/")[0]}
                    </text>
                    {/* Tail Pointer */}
                    <polygon
                      points={isSelected ? "0,8 -6,1 6,1" : "0,6 -5,3 5,3"}
                      fill={isSelected ? "#0284c7" : "#ffffff"}
                    />
                  </g>
                );
              })}
            </svg>
          </div>

          {/* RIGHT: Synchronized Property List */}
          <div className={styles.listingViewport}>
            <div className={styles.listingHeader}>
              <h3 className={styles.listingCountText}>
                {filteredProperties.length} Homes in Selected Area
              </h3>
              <span className={styles.listingSubText}>
                Sorted by Dehradun corridor
              </span>
            </div>

            <div className={styles.listingScrollArea}>
              {filteredProperties.map((prop) => {
                const coord = propertyCoordinates[prop.id];
                const isSelected = prop.id === selectedId;

                return (
                  <article
                    key={prop.id}
                    className={`${styles.propertyCardRow} ${isSelected ? styles.selectedCardRow : ""}`}
                    onClick={() => {
                      setSelectedId(prop.id);
                      setShowActiveCardOnMap(true);
                    }}
                  >
                    <div className={styles.rowImgWrap}>
                      <Image
                        src={prop.images[0]}
                        alt={prop.title}
                        fill
                        sizes="140px"
                        className={styles.rowImg}
                      />
                      <span className={styles.rowBadge}>
                        For {prop.purpose === "Buy" ? "Sale" : "Rent"}
                      </span>
                    </div>

                    <div className={styles.rowContent}>
                      <div>
                        <div className={styles.rowTop}>
                          <span className={styles.rowLocality}>📍 {prop.locality}</span>
                          <span className={styles.rowCommute}>{coord?.commute} to Center</span>
                        </div>
                        <h4 className={styles.rowTitle}>{prop.title}</h4>
                        <div className={styles.rowSpecs}>
                          {prop.bhk ? `${prop.bhk} BHK • ` : ""}{prop.area} • Elev. {coord?.elevation || "700m"}
                        </div>
                      </div>

                      <div className={styles.rowBottom}>
                        <span className={styles.rowPrice}>{prop.price}</span>
                        <a href="#book-visit" className={styles.rowActionBtn}>
                          Tour Home
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}

              {filteredProperties.length === 0 && (
                <div style={{ padding: "40px 16px", textAlign: "center", color: "#64748b" }}>
                  <p style={{ fontWeight: 600 }}>No properties found matching your filter criteria.</p>
                  <button
                    type="button"
                    onClick={() => {
                      setLocalityFilter("All");
                      setPurposeFilter("All");
                      setBhkFilter("All");
                      setTypeFilter("All");
                    }}
                    style={{
                      background: "#0284c7",
                      color: "#ffffff",
                      border: "none",
                      padding: "8px 16px",
                      borderRadius: "6px",
                      cursor: "pointer",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                    }}
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 5. SIGNATURE DEVELOPMENTS SHOWCASE (3 Columns) */}
      <section id="featured-projects" className={styles.featuredSection}>
        <div className={styles.sectionHeadingGroup}>
          <span className={styles.sectionOverline}>Signature Projects</span>
          <h2 className={styles.sectionMainHeading}>Featured Residential Developments in Dehradun</h2>
          <p className={styles.sectionSubtitle}>
            Boutique villa communities and low-density foothill apartments backed by clear titles.
          </p>
        </div>

        <div className={styles.featuredGrid}>
          {projects.map((proj) => (
            <div key={proj.id} className={styles.featuredProjectCard}>
              <div className={styles.projectImgWrap}>
                <Image
                  src={proj.image}
                  alt={proj.name}
                  fill
                  sizes="360px"
                  className={styles.projectImg}
                />
                <span className={styles.projectBadge}>{proj.status}</span>
              </div>
              <div className={styles.projectBody}>
                <span className={styles.projectLocality}>📍 {proj.location}</span>
                <h3 className={styles.projectName}>{proj.name}</h3>
                <p className={styles.projectDesc}>
                  Architect-designed {proj.type.toLowerCase()} featuring wide mountain terraces, covered private parking, and premium natural materials.
                </p>
                <div className={styles.projectFooter}>
                  <span className={styles.projectTypeTag}>{proj.type}</span>
                  <a href="#book-visit" className={styles.projectInquiryBtn}>
                    Request Brochure
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. NEIGHBORHOOD GUIDES (4 Columns) */}
      <section id="neighborhoods" className={styles.neighborhoodsSection}>
        <div className={styles.neighborhoodsInner}>
          <div className={styles.sectionHeadingGroup}>
            <span className={styles.sectionOverline}>Valley Guide</span>
            <h2 className={styles.sectionMainHeading}>Explore Dehradun by Locality</h2>
            <p className={styles.sectionSubtitle}>
              Understand the character, elevation, and property values across the valley before choosing your address.
            </p>
          </div>

          <div className={styles.neighborhoodCardsGrid}>
            <div className={styles.neighborhoodCard}>
              <h3 className={styles.nTitle}>Rajpur Road</h3>
              <p className={styles.nDesc}>
                The premier luxury boulevard of Dehradun, surrounded by old sal trees, upscale cafes, and direct access to Mussoorie.
              </p>
              <div className={styles.nStatsList}>
                <div className={styles.nStatRow}><span>Average Price</span><span>₹14,500 / sq ft</span></div>
                <div className={styles.nStatRow}><span>Elevation</span><span>880 meters</span></div>
                <div className={styles.nStatRow}><span>To City Center</span><span>18 mins</span></div>
              </div>
              <button
                type="button"
                className={styles.nExploreBtn}
                onClick={() => {
                  setLocalityFilter("Rajpur");
                  window.location.hash = "#map-section";
                }}
              >
                View Rajpur Homes (2) →
              </button>
            </div>

            <div className={styles.neighborhoodCard}>
              <h3 className={styles.nTitle}>Mussoorie Road</h3>
              <p className={styles.nDesc}>
                Panoramic Himalayan hillside living with cooler year-round temperatures and pine-scented mountain breezes.
              </p>
              <div className={styles.nStatsList}>
                <div className={styles.nStatRow}><span>Average Price</span><span>₹16,800 / sq ft</span></div>
                <div className={styles.nStatRow}><span>Elevation</span><span>990 meters</span></div>
                <div className={styles.nStatRow}><span>To City Center</span><span>28 mins</span></div>
              </div>
              <button
                type="button"
                className={styles.nExploreBtn}
                onClick={() => {
                  setLocalityFilter("Mussoorie");
                  window.location.hash = "#map-section";
                }}
              >
                View Mussoorie Villas (1) →
              </button>
            </div>

            <div className={styles.neighborhoodCard}>
              <h3 className={styles.nTitle}>Sahastradhara Road</h3>
              <p className={styles.nDesc}>
                Rapidly developing residential corridor with natural sulphur springs, wide roads, and high investment appreciation.
              </p>
              <div className={styles.nStatsList}>
                <div className={styles.nStatRow}><span>Average Price</span><span>₹9,200 / sq ft</span></div>
                <div className={styles.nStatsList}><span>Elevation</span><span>760 meters</span></div>
                <div className={styles.nStatsList}><span>To City Center</span><span>22 mins</span></div>
              </div>
              <button
                type="button"
                className={styles.nExploreBtn}
                onClick={() => {
                  setLocalityFilter("Sahastradhara");
                  window.location.hash = "#map-section";
                }}
              >
                View Sahastradhara Homes (1) →
              </button>
            </div>

            <div className={styles.neighborhoodCard}>
              <h3 className={styles.nTitle}>Dalanwala</h3>
              <p className={styles.nDesc}>
                The historic heart of Dehradun known for its spacious colonial compounds, centenary litchi orchards, and peaceful lanes.
              </p>
              <div className={styles.nStatsList}>
                <div className={styles.nStatRow}><span>Average Price</span><span>₹13,200 / sq ft</span></div>
                <div className={styles.nStatsList}><span>Elevation</span><span>680 meters</span></div>
                <div className={styles.nStatsList}><span>To City Center</span><span>10 mins</span></div>
              </div>
              <button
                type="button"
                className={styles.nExploreBtn}
                onClick={() => {
                  setLocalityFilter("Dalanwala");
                  window.location.hash = "#map-section";
                }}
              >
                View Dalanwala Estates (1) →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHY BUY WITH US (4 Columns) */}
      <section id="why-choose-us" className={styles.trustSection}>
        <div className={styles.sectionHeadingGroup}>
          <span className={styles.sectionOverline}>Buyer Assurance</span>
          <h2 className={styles.sectionMainHeading}>Why Buy Your Dehradun Property With AGS</h2>
          <p className={styles.sectionSubtitle}>
            We combine local valley expertise with complete legal diligence to make your real estate journey effortless.
          </p>
        </div>

        <div className={styles.trustGrid}>
          <div className={styles.trustCard}>
            <div className={styles.trustIcon}>📜</div>
            <h3 className={styles.trustTitle}>100% Freehold Verified Titles</h3>
            <p className={styles.trustText}>
              Every home and plot is vetted for clear title, MDDA approval, and mutation records before listing.
            </p>
          </div>

          <div className={styles.trustCard}>
            <div className={styles.trustIcon}>🤝</div>
            <h3 className={styles.trustTitle}>Direct Developer Pricing</h3>
            <p className={styles.trustText}>
              Zero commission on direct new project bookings with transparent stage-linked payment schedules.
            </p>
          </div>

          <div className={styles.trustCard}>
            <div className={styles.trustIcon}>🚘</div>
            <h3 className={styles.trustTitle}>Complimentary Chauffeur Tours</h3>
            <p className={styles.trustText}>
              Doorstep pickup from Dehradun Railway Station or Jolly Grant Airport to tour multiple shortlisted homes.
            </p>
          </div>

          <div className={styles.trustCard}>
            <div className={styles.trustIcon}>📑</div>
            <h3 className={styles.trustTitle}>End-to-End Registry Support</h3>
            <p className={styles.trustText}>
              From sale agreement drafting and home loan assistance to sub-registrar deed execution, our legal team assists you throughout.
            </p>
          </div>
        </div>
      </section>

      {/* 8. SCHEDULE A SITE VISIT */}
      <section id="book-visit" className={styles.leadSection}>
        <div className={styles.leadInner}>
          <div className={styles.leadTextGroup}>
            <h2>Schedule a Private Property Tour in Dehradun</h2>
            <p>
              Looking to tour homes along Rajpur Road, Mussoorie Foothills, or Sahastradhara?
              Fill in your details and our senior property advisor will organize a personalized itinerary for you.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.85rem", color: "#cbd5e1" }}>
              <div>✓ Free doorstep pickup available in Dehradun</div>
              <div>✓ Access to unlisted private hillside villas</div>
              <div>✓ Full documentation & spot title verification</div>
            </div>
          </div>

          <div className={styles.leadFormCard}>
            {leadSubmitted ? (
              <div style={{ textAlign: "center", padding: "30px 10px" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "10px" }}>🎉</div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 800, margin: "0 0 8px" }}>
                  Thank you, {leadName || "Valued Client"}!
                </h3>
                <p style={{ fontSize: "0.85rem", color: "#64748b", margin: 0 }}>
                  Our Dehradun property consultant will call you at <strong>{leadPhone}</strong> within 30 minutes to confirm your site tour schedule.
                </p>
              </div>
            ) : (
              <form onSubmit={handleLeadSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 800, margin: "0 0 4px" }}>
                  Book Your Complimentary Site Visit
                </h3>
                <div>
                  <label style={{ fontSize: "0.72rem", fontWeight: 700, color: "#64748b", textTransform: "uppercase" }}>
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    className={styles.formInput}
                    value={leadName}
                    onChange={(e) => setLeadName(e.target.value)}
                  />
                </div>
                <div>
                  <label style={{ fontSize: "0.72rem", fontWeight: 700, color: "#64748b", textTransform: "uppercase" }}>
                    Phone Number (WhatsApp)
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
                  <label style={{ fontSize: "0.72rem", fontWeight: 700, color: "#64748b", textTransform: "uppercase" }}>
                    Preferred Corridor
                  </label>
                  <select className={styles.formInput}>
                    <option>Rajpur Road & Mussoorie Foothills</option>
                    <option>Sahastradhara Corridor</option>
                    <option>Dalanwala Heritage</option>
                    <option>Clement Town & South Dehradun</option>
                  </select>
                </div>
                <button type="submit" className={styles.formSubmitBtn}>
                  Confirm Free Property Tour →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 9. REAL ESTATE FOOTER */}
      <footer className={styles.siteFooter}>
        <div className={styles.footerContainer}>
          <div className={styles.footerTop}>
            <div style={{ maxWidth: "340px" }}>
              <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#ffffff", marginBottom: "6px" }}>
                AGS Estates Dehradun
              </div>
              <p style={{ margin: 0, lineHeight: 1.5 }}>
                Specialized in luxury hillside villas, forest-facing residential properties, and clear-title land investments in Dehradun, Uttarakhand.
              </p>
            </div>

            <div>
              <div style={{ fontWeight: 700, color: "#ffffff", marginBottom: "8px" }}>Visit Our Office</div>
              <p style={{ margin: 0, lineHeight: 1.5 }}>
                Level 2, Rajpur Heights<br />
                Opposite Pacific Mall, Rajpur Road<br />
                Dehradun, Uttarakhand 248001
              </p>
            </div>

            <div>
              <div style={{ fontWeight: 700, color: "#ffffff", marginBottom: "8px" }}>Get in Touch</div>
              <p style={{ margin: 0, lineHeight: 1.5 }}>
                Phone: +91 98765 43210<br />
                Email: contact@agsestates.in<br />
                Hours: Mon – Sun, 9:00 AM – 8:00 PM
              </p>
            </div>

            <div>
              <div style={{ fontWeight: 700, color: "#ffffff", marginBottom: "8px" }}>Design Lab Navigation</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <Link href="/" style={{ color: "#38bdf8", textDecoration: "none" }}>⊞ All 10 Design Concepts</Link>
                <Link href="/designs/foothill-quiet-luxury" style={{ color: "#94a3b8", textDecoration: "none" }}>Concept 01 · Foothill Quiet Luxury</Link>
                <Link href="/designs/monochrome-editorial" style={{ color: "#94a3b8", textDecoration: "none" }}>Concept 02 · Monochrome Editorial</Link>
                <Link href="/designs/architectural-grid" style={{ color: "#94a3b8", textDecoration: "none" }}>Concept 04 · Architectural Grid</Link>
              </div>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <div>
              © {new Date().getFullYear()} AGS Estates. RERA Registration: UK-REA-2024-00891. All listings demo data for design evaluation.
            </div>
            <div>
              Concept 03 of 10 · Antigravity Design Lab
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
