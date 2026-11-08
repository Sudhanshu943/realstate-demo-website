# AGS DESIGN LAB // CONCEPT 08 ARCHITECTURAL SPECIFICATION
# HERITAGE ESTATE & PROVENANCE ARCHIVES — THE COLONIAL MANOR LEDGER

**Document Version:** `2.0.0`  
**Classification:** Master Architectural Design & Engineering Specification  
**Route:** `/designs/heritage-estate`  
**Target Category:** Historic Foothill Manors, Colonial Provenance, & Adaptive Restoration  
**Design Lead:** AGS Realtors & Construction Architectural Lab  

---

## 1. STRATEGIC POSITIONING & AUDIENCE PSYCHOLOGY

### 1.1 The High-Net-Worth Persona Matrix
The Heritage Estate concept is crafted for generational custodians who value historic pedigree, provenance, and irreplaceable craftsmanship:

1. **The Generational Family Custodian:**
   - *Profile:* Multi-generational industrial and royal families looking for an ancestral foothill anchor in Old Rajpur or Mussoorie.
   - *Psychological Drivers:* Seeks a property that cannot be replicated. Values 100-year-old litchi orchards, hand-chiseled stone fireplaces, Burma teak roof trusses, and verifiable historical deeds.
   - *Expectations:* Meticulously researched chain-of-title, conservation easements, authentic lime-surkhi restoration, and total privacy.
   - *Dealbreakers:* Shoddy modern renovations, concrete slapdash extensions, or disputed revenue department titles.

2. **The Scholar, Author, & Diplomatic Connoisseur:**
   - *Profile:* Cultural leaders drawn to the literary legacy of Ruskin Bond, colonial botanical surveys, and historic cantonment architecture.
   - *Psychological Drivers:* Solitude, private library wings, mature gardens, and deep wraparound verandahs.

3. **The Heritage Preservationist Investor:**
   - *Profile:* Boutique luxury hoteliers or private collectors seeking adaptive re-use historic manors for exclusive private clubs or heritage retreats.

### 1.2 Core Emotional Thesis
> *"You do not simply buy a heritage property; you become its custodian for the next century. Architecture with an unbroken chain of title, hand-written imperial deeds, and irreplaceable craft."*

The website emulates a **historic land registry and archival manuscript**. It uses wax seal insignia, archival ribbons, and provenance chronologies.

---

## 2. LUXURY COLOR CHEMISTRY & MATERIAL TAXONOMY

### 2.1 Color Science: The Aged Vellum & Imperial Bordeaux Palette
```css
:root {
  /* Archival Manuscript Canvases */
  --c08-bg-vellum: #F5EFE1;          /* Aged British Archival Vellum */
  --c08-bg-surface: #FAF5EA;         /* Pressed Cotton Paper Cream */
  --c08-bg-subtle: #EAE2D0;          /* Antique Parchment Silt */

  /* Imperial Inks & Crest Tones */
  --c08-brand-bordeaux: #4A1D24;     /* Imperial Bordeaux Burgundy */
  --c08-brand-oak: #38241B;          /* Weathered English Oak */
  --c08-text-charcoal: #231815;      /* Dense Letterpress Carbon Ink */
  --c08-text-muted: #6B5B52;         /* Archival Copperplate Gray */

  /* Precious Wax Seal & Gold Accents */
  --c08-accent-gold: #B08A55;        /* Burnished Wax Seal Gold */
  --c08-accent-ruby: #8B2635;        /* Archival Registry Stamp Ruby */
  --c08-accent-moss: #2E3B2F;        /* Centenary Orchard Moss Green */

  /* Hand-Crafted Borders & Hairlines */
  --c08-border-parchment: rgba(74, 29, 36, 0.14);
  --c08-border-bordeaux: rgba(74, 29, 36, 0.45);
  --c08-border-gold: rgba(176, 138, 85, 0.40);
}
```

---

## 3. TYPOGRAPHY SYSTEM & EDITORIAL CADENCE

### 3.1 Type Pairing Architecture
- **Primary Display Headings:** `Old-Style Historical Serif` (`Baskerville` / `EB Garamond` / `Cormorant Infant`).
  - *Character:* Dignified, aristocratic, historical, literary.
  - *Scale:* `clamp(2.5rem, 5vw, 4.4rem)` | `font-weight: 500` | `letter-spacing: -0.01em`.
- **Archival Deeds & Registry Codes:** `Small-Caps Typography` (`font-variant-caps: all-small-caps`).
  - *Scale:* `0.78rem` | `letter-spacing: 0.16em` | `font-weight: 600`.
- **Body Text:** `Garamond Book Regular` (`1.05rem`, `line-height: 1.8`, `color: #231815`).

---

## 4. DETAILED COMPONENT & SECTION WIREFRAMES

```
+--------------------------------------------------------------------------------------------------+
| ARCHIVAL RIBBON: DEHRADUN LAND REGISTRY ARCHIVE // EST. 1884 · REGISTER VOL. 18 | UNBROKEN TITLE |
+--------------------------------------------------------------------------------------------------+
| BRAND NAVBAR:    [ Wax Seal Crest ] AGS HERITAGE ESTATES // ARCHIVES    Provenance  Archive  Charter |
+--------------------------------------------------------------------------------------------------+
| ARCHIVAL LEDGER HERO STAGE:                                                                      |
|   Kicker: HISTORIC FOOTHILL ESTATES · PROVENANCE SINCE 1928                                      |
|   Headline: "NOT MERELY BUILT. AUTHORED ACROSS GENERATIONS."                                     |
|   Subhead: Rare historic bungalows, colonial tea estate manors, and protected litchi orchards in |
|            Old Rajpur. Preserved through authentic lime-mortar restoration and modern retrofits. |
+--------------------------------------------------------------------------------------------------+
| SIGNATURE INTERACTIVE: THE 3-ERA PROVENANCE CHRONOLOGY                                           |
|                                                                                                  |
|   EPOCH SELECTOR TABS:                                                                           |
|   [ Era 01 · 1928 Colonial Foundation ] [ Era 02 · 1964 Forest Rest House ] [ Era 03 · 2026 Today]|
|                                                                                                  |
|   +--------------------------------------------------------------------------------------------+ |
|   |  HISTORICAL PLATE VIEWPORT CANVAS:                                                         | |
|   |  [ Archival Monograph Photo of River Quartzite Foundation & Teak Trusses ]                 | |
|   |  Deed Notation: "RECORD NO. 418/A — SURVEY OF INDIA BRITISH IMPERIAL SETTLEMENT REGISTER"  | |
|   |  Architectural Details: Hand-quarried river quartzite, hydraulic lime-surkhi mortar,       | |
|   |                         original 4-acre litchi orchard planted by Capt. E. H. Campbell.     | |
|   +--------------------------------------------------------------------------------------------+ |
+--------------------------------------------------------------------------------------------------+
| CURATED HERITAGE ARCHIVE (3-Column Grid):                                                        |
|   [ The 1928 Planter's Manor ]    [ The Forest Lodge at Malsi ]   [ Stone Pavilion Sahastradhara]|
|   Old Rajpur · 1.2 Acre Orchard   Malsi Forest · 0.8 Acre Parcel  Spring Basin · 0.6 Acre Parcel |
|   Valuation: ₹3.40 Cr             Valuation: ₹2.65 Cr             Valuation: ₹1.95 Cr            |
|   Centenary Trees: 24 Litchis     Centenary Trees: 18 Sal Trees   Centenary Trees: 12 Mangoes    |
|   [ Inspect Deed Registry → ]     [ Inspect Deed Registry → ]     [ Inspect Deed Registry → ]    |
+--------------------------------------------------------------------------------------------------+
| THE 4 CONSERVATION CHARTER PILLARS (4-Column Grid):                                              |
|   [ 01 Lime-Mortar Breathing ] [ 02 Orchard Protection ] [ 03 Chain of Title ] [ 04 Modern Comfort]|
+--------------------------------------------------------------------------------------------------+
| CONFIDENTIAL HERITAGE REGISTER INQUIRY FORM:                                                     |
|   [ Custodian Name ] [ Mobile Number ] [ Request Sealed Provenance Folio & Title Abstract → ]    |
+--------------------------------------------------------------------------------------------------+
```

---

## 5. SIGNATURE INTERACTIVE FEATURE: 3-ERA PROVENANCE CHRONOLOGY

### 5.1 Historical Epoch Architecture
The Provenance Chronology allows prospective custodians to inspect how the estate evolved across a century:

```typescript
export interface HeritageEpoch {
  eraId: "1928" | "1964" | "2026";
  eraName: string;
  historicalContext: string;
  architecturalIntervention: string;
  deedTranscript: string;
  preservationStandard: string;
  plateImageUrl: string;
}

export const heritageEpochs: Record<string, HeritageEpoch> = {
  "1928": {
    eraId: "1928",
    eraName: "Era 01 · 1928 Colonial Foundation",
    historicalContext: "Constructed as the primary hillside summer manor for the Campbell Tea Plantation.",
    architecturalIntervention: "Hand-quarried river quartzite stone foundations laid with breathable lime-surkhi mortar.",
    deedTranscript: "British Imperial Revenue Registry Vol. 14, Entry 208 — Grant of Freehold Foothill Parcel.",
    preservationStandard: "Original load-bearing 450mm stone masonry 100% structurally sound.",
    plateImageUrl: "/images/residence.png"
  },
  "1964": {
    eraId: "1964",
    eraName: "Era 02 · 1964 Forest Rest House Era",
    historicalContext: "Acquired by the regional forestry council as a retreat for visiting naturalists and authors.",
    architecturalIntervention: "Broad 3.5m wraparound verandahs constructed with Burma teak timber rafters and slate roof tiles.",
    deedTranscript: "Uttarakhand State Forest Division Allotment Deed 1964/B.",
    preservationStandard: "Preserved 4-acre organic orchard containing 24 centenary litchi and walnut trees.",
    plateImageUrl: "/images/hero-dehradun.png"
  },
  "2026": {
    eraId: "2026",
    eraName: "Era 03 · 2026 Modern Adaptive Conservation",
    historicalContext: "Meticulously retrofitted as a private luxury estate with invisible modern conveniences.",
    architecturalIntervention: "Concealed geothermal radiant underfloor heating, seismic tie-beams, and double-glazed casements.",
    deedTranscript: "Freehold Mutation Certificate 2026 // Zero Encumbrance Guarantee.",
    preservationStandard: "Restored by generational Garhwali stonemasons in full compliance with Grade II Conservation Charter.",
    plateImageUrl: "/images/villa.png"
  }
};
```

---

## 6. DEVELOPER & CLIENT PRESENTATION SCRIPT
When pitching this concept:

> *"Historic estates cannot be sold like modern apartments on price per square foot. They are irreplaceable heirlooms. This website presents your heritage estate with the prestige of an English country manor or French château. When an elite family sees the wax seal registry and 98-year chain of title, they understand they are buying a piece of history that will appreciate for generations."*
