"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const locations = ["All Dehradun", "Rajpur Road", "Mussoorie Road", "Sahastradhara Road", "Jakhan", "Clement Town"];
const propertyTypes = ["Any type", "Villa", "Apartment", "Duplex", "Builder Floor", "Commercial"];
const budgets = ["Any budget", "Under ₹60L", "₹60L - ₹1 Cr", "₹1 Cr - ₹1.5 Cr", "Above ₹1.5 Cr"];
const bhkOptions = ["Any BHK", "2 BHK", "3 BHK", "4+ BHK"];

export function Hero() {
  const [purpose, setPurpose] = useState<"Buy" | "Rent">("Buy");
  const [location, setLocation] = useState("All Dehradun");
  const [type, setType] = useState("Any type");
  const [budget, setBudget] = useState("Any budget");
  const [bhk, setBhk] = useState("Any BHK");

  const searchParams = new URLSearchParams();
  searchParams.set("purpose", purpose);
  if (location !== "All Dehradun") searchParams.set("locality", location);
  if (type !== "Any type") searchParams.set("type", type);
  if (budget !== "Any budget") searchParams.set("budget", budget);
  if (bhk !== "Any BHK") searchParams.set("bhk", bhk);

  const searchHref = `/properties?${searchParams.toString()}`;

  return (
    <>
      <section className="hero">
        <Image
          src="/images/hero-dehradun.png"
          alt="Contemporary hillside home in a Dehradun-inspired landscape"
          fill
          priority
          sizes="100vw"
          className="hero-image"
        />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow"><span /> Property guidance in Dehradun</p>
          <h1>Find a place that<br />feels <em>right.</em></h1>
          <p className="hero-copy">
            Explore residential, commercial and investment opportunities with a simpler property discovery experience.
          </p>
          <div className="hero-actions">
            <Link href={searchHref} className="button button-light">Search properties <span>→</span></Link>
            <a href="https://wa.me/910000000000" className="button button-glass">WhatsApp enquiry</a>
          </div>
        </div>
        <div className="hero-note">
          <span className="hero-note-index">01</span>
          <span>Homes shaped by<br />the foothills</span>
        </div>
      </section>

      {/* Interactive Property Search Shell */}
      <section className="search-shell" aria-label="Property search">
        <div className="purpose-toggle">
          <button
            type="button"
            className={purpose === "Buy" ? "active" : ""}
            onClick={() => setPurpose("Buy")}
          >
            Buy
          </button>
          <button
            type="button"
            className={purpose === "Rent" ? "active" : ""}
            onClick={() => setPurpose("Rent")}
          >
            Rent
          </button>
        </div>

        <label>
          <span>Location</span>
          <select value={location} onChange={(e) => setLocation(e.target.value)}>
            {locations.map((loc) => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
        </label>

        <label>
          <span>Property type</span>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            {propertyTypes.map((pt) => (
              <option key={pt} value={pt}>{pt}</option>
            ))}
          </select>
        </label>

        <label>
          <span>Budget</span>
          <select value={budget} onChange={(e) => setBudget(e.target.value)}>
            {budgets.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </label>

        <label>
          <span>Bedrooms</span>
          <select value={bhk} onChange={(e) => setBhk(e.target.value)}>
            {bhkOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </label>

        <Link href={searchHref} className="search-button">
          Search <span>→</span>
        </Link>
      </section>

      {/* Microclimate Foothill Context Strip */}
      <div style={{
        width: "min(1180px, calc(100% - 48px))",
        margin: "32px auto 0",
        padding: "16px 24px",
        background: "rgba(21, 33, 30, 0.04)",
        border: "1px solid rgba(21, 33, 30, 0.08)",
        borderRadius: "4px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "18px",
        alignItems: "center",
        fontSize: "0.82rem"
      }}>
        <div>
          <span style={{ fontSize: "0.62rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "#a2613b", fontWeight: 700, display: "block" }}>
            Foothill Elevation
          </span>
          <strong style={{ color: "var(--ink)" }}>710m – 940m ASL</strong>
          <span style={{ display: "block", color: "#68736e", fontSize: "0.72rem" }}>Sub-Himalayan thermal belt</span>
        </div>
        <div>
          <span style={{ fontSize: "0.62rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "#a2613b", fontWeight: 700, display: "block" }}>
            Air Quality Index
          </span>
          <strong style={{ color: "#1f704f" }}>AQI 38 · Clean Zone</strong>
          <span style={{ display: "block", color: "#68736e", fontSize: "0.72rem" }}>Protected foothill corridor</span>
        </div>
        <div>
          <span style={{ fontSize: "0.62rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "#a2613b", fontWeight: 700, display: "block" }}>
            Natural Light
          </span>
          <strong style={{ color: "var(--ink)" }}>8.2 hrs / day</strong>
          <span style={{ display: "block", color: "#68736e", fontSize: "0.72rem" }}>Southern solar orientation</span>
        </div>
        <div>
          <span style={{ fontSize: "0.62rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "#a2613b", fontWeight: 700, display: "block" }}>
            Forest Canopy
          </span>
          <strong style={{ color: "var(--ink)" }}>Sal &amp; Chir Pine Buffer</strong>
          <span style={{ display: "block", color: "#68736e", fontSize: "0.72rem" }}>Natural thermal regulation</span>
        </div>
      </div>
    </>
  );
}
