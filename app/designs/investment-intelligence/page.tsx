"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { properties } from "@/data/properties";
import styles from "./investment.module.css";

export default function InvestmentIntelligencePage() {
  const [ticketSize, setTicketSize] = useState<number>(145); // in Lakhs
  const [monthlyRent, setMonthlyRent] = useState<number>(75); // in Thousands
  const [occupancyRate, setOccupancyRate] = useState<number>(92); // %
  const [memoDownloaded, setMemoDownloaded] = useState<string | null>(null);

  // Form states
  const [investorName, setInvestorName] = useState("");
  const [investorEmail, setInvestorEmail] = useState("");
  const [investorTier, setInvestorTier] = useState("₹1 Cr – ₹5 Cr Allocation");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Financial calculations
  const annualGrossRent = (monthlyRent * 12 * (occupancyRate / 100)) / 100; // in Cr/Lakhs
  const grossYield = ((annualGrossRent / ticketSize) * 100).toFixed(2);
  const netOperatingIncome = annualGrossRent * 0.85; // after 15% op-ex/tax
  const netYield = ((netOperatingIncome / ticketSize) * 100).toFixed(2);
  const annualCashFlowLakhs = (netOperatingIncome).toFixed(2);

  const assets = properties.slice(0, 6);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!investorEmail.trim()) return;
    setFormSubmitted(true);
  };

  return (
    <div className={styles.investPage}>
      {/* 1. FINANCIAL TICKER BAR */}
      <div className={styles.tickerBar}>
        <div className={styles.tickerInner}>
          <span>DEHRADUN BASIN REAL ESTATE // <em>CAPITAL INTELLIGENCE</em></span>
          <span>•</span>
          <span>5-YR HISTORICAL CAGR: <span className={styles.tickerPill}>+12.8%</span></span>
          <span>•</span>
          <span>COMMERCIAL CAP RATE: <span className={styles.tickerPill}>7.4%</span></span>
          <span>•</span>
          <span>TOURISM OCCUPANCY: <span className={styles.tickerPill}>91.2%</span></span>
        </div>
        <div>
          <span>CONCEPT 07 · INVESTMENT INTELLIGENCE</span>
        </div>
      </div>

      {/* 2. BRAND NAVBAR */}
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <Link href="/designs/investment-intelligence" className={styles.brandGroup}>
            <div className={styles.brandLogoBox}>INV</div>
            <div>
              <div className={styles.brandTitle}>AGS Capital // Asset Advisory</div>
              <div className={styles.brandSub}>Quantitative Real Estate Allocation · Dehradun</div>
            </div>
          </Link>

          <ul className={styles.navLinks}>
            <li><a href="#modeler" className={styles.navLink}>Yield Modeler</a></li>
            <li><a href="#asset-matrix" className={styles.navLink}>Asset Matrix</a></li>
            <li><a href="#portfolio" className={styles.navLink}>High-Yield Deals</a></li>
            <li><a href="#due-diligence" className={styles.navLink}>Due Diligence</a></li>
            <li><a href="#hnw-consultation" className={styles.navLink}>HNW Allocation</a></li>
          </ul>

          <div>
            <button
              type="button"
              className={styles.pipelineBtn}
              onClick={() => alert("Downloading Institutional Deal Pipeline [Q2 2026] - Demo Pack.")}
            >
              Request Deal Pipeline ↓
            </button>
          </div>
        </div>
      </nav>

      {/* 3. HERO MACRO HEADER & KPI STRIP */}
      <section className={styles.heroHeader}>
        <span className={styles.kicker}>Quantitative Real Estate Allocation</span>
        <h1 className={styles.heroHeading}>Evidence-First Capital Allocation</h1>
        <p className={styles.heroSub}>
          A disciplined decision platform for family offices, high-net-worth individuals, and institutional investors.
          We underwrite gross yields, stress-test occupancy scenarios, and audit micro-market infrastructure drivers.
        </p>

        {/* Executive KPI Strip */}
        <div className={styles.kpiStrip}>
          <div className={styles.kpiBox}>
            <span>Tracked Portfolio Assets</span>
            <strong>₹24.8 Cr</strong>
            <small>9 Curated Doon Valley Units</small>
          </div>
          <div className={styles.kpiBox}>
            <span>Weighted Gross Yield</span>
            <strong>6.84%</strong>
            <small>Unleveraged Base Case</small>
          </div>
          <div className={styles.kpiBox}>
            <span>Projected 5-Yr IRR</span>
            <strong>15.2%</strong>
            <small>Conservative Capital Appreciation</small>
          </div>
          <div className={styles.kpiBox}>
            <span>Regional Occupancy</span>
            <strong>91.8%</strong>
            <small>Dehradun Tourism &amp; Corporate Demand</small>
          </div>
        </div>
      </section>

      {/* 4. DYNAMIC YIELD & CASH FLOW MODELER */}
      <section id="modeler" className={styles.calcSection}>
        <div className={styles.calcBox}>
          <div className={styles.calcHeader}>
            <div>
              <h2>Dynamic Yield &amp; Sensitivity Modeler</h2>
              <span style={{ fontSize: "0.8rem", color: "#79998e" }}>
                Adjust asset ticket size, monthly rental yield, and occupancy to stress-test net returns
              </span>
            </div>
            <div style={{ color: "#57d3a2", fontSize: "0.78rem", fontWeight: 700 }}>
              ● LIVE SIMULATION ENGINE
            </div>
          </div>

          <div className={styles.calcGrid}>
            <div className={styles.sliderGroup}>
              <div className={styles.sliderItem}>
                <div className={styles.sliderLabelRow}>
                  <span>Asset Purchase Price (Ticket Size)</span>
                  <strong>₹{ticketSize} Lakhs</strong>
                </div>
                <input
                  type="range"
                  min="40"
                  max="350"
                  step="5"
                  value={ticketSize}
                  onChange={(e) => setTicketSize(Number(e.target.value))}
                  className={styles.rangeInput}
                />
              </div>

              <div className={styles.sliderItem}>
                <div className={styles.sliderLabelRow}>
                  <span>Expected Monthly Rental Realization</span>
                  <strong>₹{monthlyRent},000 / mo</strong>
                </div>
                <input
                  type="range"
                  min="25"
                  max="200"
                  step="5"
                  value={monthlyRent}
                  onChange={(e) => setMonthlyRent(Number(e.target.value))}
                  className={styles.rangeInput}
                />
              </div>

              <div className={styles.sliderItem}>
                <div className={styles.sliderLabelRow}>
                  <span>Annual Occupancy Assumption</span>
                  <strong>{occupancyRate}%</strong>
                </div>
                <input
                  type="range"
                  min="65"
                  max="100"
                  step="1"
                  value={occupancyRate}
                  onChange={(e) => setOccupancyRate(Number(e.target.value))}
                  className={styles.rangeInput}
                />
              </div>
            </div>

            <div className={styles.calcResults}>
              <div className={styles.resultRow}>
                <span>Gross Rental Yield</span>
                <strong>{grossYield}%</strong>
              </div>
              <div className={styles.resultRow}>
                <span>Net Yield (After 15% Op-Ex &amp; Tax)</span>
                <strong>{netYield}%</strong>
              </div>
              <div className={styles.resultRow}>
                <span>Net Annual Cash Flow</span>
                <strong>₹{annualCashFlowLakhs} L / yr</strong>
              </div>
              <small style={{ color: "#557067", fontSize: "0.72rem", marginTop: "8px" }}>
                *Dynamic underwriting simulation based on user parameters. Past returns do not guarantee future yields.
              </small>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ASSET COMPARISON MATRIX TABLE */}
      <section id="asset-matrix" className={styles.tableSection}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "10px" }}>
          <div>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 800, color: "#ffffff", margin: "0 0 6px" }}>
              Dehradun Asset Performance Matrix
            </h2>
            <p style={{ fontSize: "0.88rem", color: "#79998e", margin: 0 }}>
              Comparative underwriting metrics across verified prime foothill listings.
            </p>
          </div>
        </div>

        <div className={styles.tableWrap}>
          <table className={styles.matrixTable}>
            <thead>
              <tr>
                <th>Asset Title</th>
                <th>Corridor</th>
                <th>Typology</th>
                <th>Guide Price</th>
                <th>Est. Gross Yield</th>
                <th>Price / Sq Ft</th>
                <th>Liquidity</th>
                <th>Underwriting Memo</th>
              </tr>
            </thead>
            <tbody>
              {assets.map((p, idx) => {
                const simulatedYield = (5.4 + idx * 0.42).toFixed(2);
                const simulatedPpsf = (5100 + idx * 450).toLocaleString();

                return (
                  <tr key={p.id}>
                    <td><strong>{p.title}</strong></td>
                    <td>{p.locality}</td>
                    <td>{p.propertyType}</td>
                    <td>{p.price}</td>
                    <td style={{ color: "#57d3a2", fontWeight: 700 }}>{simulatedYield}%</td>
                    <td>₹{simulatedPpsf}</td>
                    <td>
                      <span style={{ color: idx % 2 === 0 ? "#57d3a2" : "#f5b84b" }}>
                        {idx % 2 === 0 ? "High (Liquid)" : "Moderate"}
                      </span>
                    </td>
                    <td>
                      <button
                        type="button"
                        className={styles.memoBtn}
                        onClick={() => setMemoDownloaded(p.title)}
                      >
                        {memoDownloaded === p.title ? "✓ Memo Sent" : "Request Memo →"}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* 6. PORTFOLIO ASSET SHOWCASE (3-COLUMN GRID) */}
      <section id="portfolio" className={styles.portfolioSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.kicker}>High-Yield Acquisition Opportunities</span>
          <h2 className={styles.sectionTitle}>Curated Income-Generating Properties</h2>
          <p className={styles.sectionSubtext}>
            Properties positioned for reliable rental yields, corporate lease agreements, or boutique tourism demand.
          </p>
        </div>

        <div className={styles.portfolioGrid}>
          {assets.map((item, idx) => (
            <div key={item.id} className={styles.assetCard}>
              <div className={styles.assetImgWrap}>
                <Image
                  src={item.images[0]}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={styles.assetImg}
                />
                <span className={styles.yieldBadge}>
                  Est. Yield: {(5.4 + idx * 0.42).toFixed(1)}%
                </span>
              </div>

              <div className={styles.assetBody}>
                <span className={styles.assetLocality}>📍 {item.locality}</span>
                <h3 className={styles.assetTitle}>{item.title}</h3>
                <p className={styles.assetDesc}>{item.description}</p>

                <div className={styles.assetMetricsRow}>
                  <span>Area: {item.area}</span>
                  <span>Type: {item.propertyType}</span>
                  <span>For: {item.purpose}</span>
                </div>

                <div className={styles.assetFooterRow}>
                  <span className={styles.assetPrice}>{item.price}</span>
                  <a href="#hnw-consultation" className={styles.assetCta}>
                    Audit Deal →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CAPITAL PRESERVATION PILLARS (4-COLUMN GRID) */}
      <section id="due-diligence" className={styles.pillarsSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.kicker}>Capital Protection Standards</span>
          <h2 className={styles.sectionTitle}>The Four Pillars of Real Estate Underwriting</h2>
          <p className={styles.sectionSubtext}>
            Rigorous legal and economic safeguards implemented before onboarding any asset into our portfolio.
          </p>
        </div>

        <div className={styles.pillarsGrid}>
          <div className={styles.pillarCard}>
            <div className={styles.pillarIcon}>📜</div>
            <h3 className={styles.pillarTitle}>100% Freehold Title Audit</h3>
            <p className={styles.pillarText}>
              Complete 30-year title chain verification, encumbrance search, and mutation validation with the Sub-Registrar Office before listing.
            </p>
          </div>

          <div className={styles.pillarCard}>
            <div className={styles.pillarIcon}>🛣️</div>
            <h3 className={styles.pillarTitle}>Delhi Expressway Tailwinds</h3>
            <p className={styles.pillarText}>
              Strategic positioning along corridors directly benefiting from the 2.5-hour Delhi-Dehradun expressway, driving sustained capital appreciation.
            </p>
          </div>

          <div className={styles.pillarCard}>
            <div className={styles.pillarIcon}>📈</div>
            <h3 className={styles.pillarTitle}>Occupancy Stress-Testing</h3>
            <p className={styles.pillarText}>
              Every rental model is back-tested against low-season tourism troughs and extended vacancy to ensure positive net cash flows.
            </p>
          </div>

          <div className={styles.pillarCard}>
            <div className={styles.pillarIcon}>⚖️</div>
            <h3 className={styles.pillarTitle}>Conservative Liquidity Multiples</h3>
            <p className={styles.pillarText}>
              Realistic 3-to-5 year exit horizon underwriting, avoiding inflated pro-forma exit cap rates in favor of defensible transaction comparables.
            </p>
          </div>
        </div>
      </section>

      {/* 8. HNW & FAMILY OFFICE CONSULTATION FORM */}
      <section id="hnw-consultation" className={styles.leadSection}>
        <div className={styles.leadInner}>
          <div className={styles.leadText}>
            <h2>Schedule Private Capital Allocation Briefing</h2>
            <p>
              Looking to deploy capital into pre-leased commercial assets, boutique foothill hospitality villas, or strategic land parcels in Dehradun?
              Our acquisitions team prepares bespoke underwriting models for private wealth clients.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.85rem", color: "#a1b8b0" }}>
              <div>✓ Confidential one-on-one portfolio review</div>
              <div>✓ Access to unlisted institutional deals</div>
              <div>✓ Comprehensive legal &amp; taxation due diligence</div>
            </div>
          </div>

          <div className={styles.formBox}>
            {formSubmitted ? (
              <div style={{ textAlign: "center", padding: "30px 10px" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "8px" }}>📊</div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#57d3a2", margin: "0 0 8px" }}>
                  Briefing Request Logged
                </h3>
                <p style={{ fontSize: "0.85rem", color: "#a1b8b0", margin: 0 }}>
                  Our senior acquisitions director will transmit the confidential deal memo to <strong>{investorEmail}</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#ffffff", margin: "0 0 4px" }}>
                  Confidential Deal Briefing
                </h3>
                <div>
                  <label style={{ fontSize: "0.68rem", fontWeight: 700, color: "#57d3a2", textTransform: "uppercase" }}>
                    Full Name / Entity Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Singhal / Singhal Family Office"
                    className={styles.formInput}
                    value={investorName}
                    onChange={(e) => setInvestorName(e.target.value)}
                  />
                </div>
                <div>
                  <label style={{ fontSize: "0.68rem", fontWeight: 700, color: "#57d3a2", textTransform: "uppercase" }}>
                    Corporate / Private Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="ramesh@singhalholdings.com"
                    className={styles.formInput}
                    value={investorEmail}
                    onChange={(e) => setInvestorEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label style={{ fontSize: "0.68rem", fontWeight: 700, color: "#57d3a2", textTransform: "uppercase" }}>
                    Target Capital Deployment
                  </label>
                  <select
                    className={styles.formInput}
                    value={investorTier}
                    onChange={(e) => setInvestorTier(e.target.value)}
                  >
                    <option>₹50 Lakhs – ₹1 Crore (Individual Asset)</option>
                    <option>₹1 Crore – ₹5 Crores (Multi-unit Portfolio)</option>
                    <option>₹5 Crores+ (Commercial / Land Banking)</option>
                  </select>
                </div>
                <button type="submit" className={styles.formSubmitBtn}>
                  Confirm Briefing Request →
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
              <strong style={{ color: "#ffffff" }}>AGS CAPITAL // INVESTMENT INTELLIGENCE DIVISION</strong>
              <div style={{ color: "#79998e", marginTop: "4px" }}>
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
              <Link href="/designs/urban-neo-brutalist">Concept 06</Link>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "10px" }}>
            <div>
              Quantitative Disclosures: All financial simulations and yields are indicative estimates for underwriting modeling.
            </div>
            <div>
              Concept 07 of 10 · Antigravity Real Estate Design Lab
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
