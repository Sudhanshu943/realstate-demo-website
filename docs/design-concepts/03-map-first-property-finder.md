# AGS DESIGN LAB // CONCEPT 03 ARCHITECTURAL SPECIFICATION
# MAP-FIRST PROPERTY FINDER — THE CARTOGRAPHIC & SPATIAL DISCOVERY PORTAL

**Document Version:** `2.0.0`  
**Classification:** Master Architectural Design & Engineering Specification  
**Route:** `/designs/map-first-property-finder`  
**Target Category:** Cartographic Intelligence, Spatial Search, & High-Utility Portals  
**Design Lead:** AGS Realtors & Construction Architectural Lab  

---

## 1. STRATEGIC POSITIONING & AUDIENCE PSYCHOLOGY

### 1.1 The High-Net-Worth Persona Matrix
The Map-First concept is designed for practical, location-driven real estate buyers who require geographical certainty:

1. **The Relocating Executive / Corporate Family:**
   - *Profile:* Moving from Mumbai, Bangalore, or Gurgaon to Dehradun for quality of life.
   - *Psychological Drivers:* Non-negotiable proximity to premier educational institutions (The Doon School, Welham Girls/Boys), healthcare centers (Max Hospital), and the new Delhi-Dehradun Expressway corridor.
   - *Expectations:* Rapid spatial filtering, precise travel time isochrones, zero ambiguity on neighborhood boundaries, and instant site visit booking.
   - *Dealbreakers:* Inaccurate coordinates, fake address listings, or platforms that hide map locations behind lead capture walls.

2. **The Micro-Market Land & Plot Investor:**
   - *Profile:* Local and regional high-net-worth investors seeking capital gains across rapidly developing corridors (Sahastradhara bypass vs. Mussoorie diversion).
   - *Psychological Drivers:* Wants to see price per square foot differentials across neighboring sectors at a single glance.

3. **The Active Home Hunter:**
   - *Profile:* Accustomed to modern, highly polished map interfaces like Airbnb, Zillow, or Google Maps. Expects fluid pin interaction and instant listing synchronization.

### 1.2 Core Emotional Thesis
> *"Discover your home through the geography of the valley. Every listing verified by survey coordinates, commute isochrone rings, and neighborhood amenity indexes."*

The platform merges the **effortless spatial fluidity of Airbnb** with the **institutional trust of an elite property brokerage**.

---

## 2. LUXURY COLOR CHEMISTRY & MATERIAL TAXONOMY

### 2.1 Color Science: The Cartographic & Maritime Navy Palette
```css
:root {
  /* Cartographic Canvas & Map Ground */
  --c03-bg-canvas: #F4F7FA;          /* Topographic Soft Off-White */
  --c03-bg-surface: #FFFFFF;         /* Crisp Listing Card Surface */
  --c03-bg-subtle: #E8EEF5;          /* Hydrological Basin Tint */

  /* Structural & Navigational Tones */
  --c03-brand-navy: #0B1F33;         /* Deep Maritime Blue */
  --c03-brand-slate: #1E3A5F;        /* Secondary Institutional Navy */
  --c03-text-dark: #0A192F;          /* High-Contrast Navigational Charcoal */
  --c03-text-muted: #64748B;         /* Topographic Contour Gray */

  /* Interactive Cartographic Accents */
  --c03-accent-azure: #2563EB;       /* Signal Blue for Active Pins & Buttons */
  --c03-accent-radar: #38BDF8;       /* Pulsating Radar Beacon Ring */
  --c03-accent-emerald: #10B981;     /* Verified Forest & Green Corridor Zone */

  /* Borders & Map Vectors */
  --c03-border-light: #E2E8F0;       /* Card & Input Border */
  --c03-border-vector: #CBD5E1;      /* Road & Topographic Grid Vectors */

  /* Crisp Interactive Shadows */
  --c03-shadow-pin: 0 4px 14px rgba(11, 31, 51, 0.16);
  --c03-shadow-card: 0 10px 25px rgba(11, 31, 51, 0.08);
  --c03-shadow-popup: 0 20px 45px rgba(11, 31, 51, 0.22);
}
```

---

## 3. TYPOGRAPHY SYSTEM & UI DATA HIERARCHY

### 3.1 Type Pairing Architecture
- **Primary Interface & Headings:** `Modern UI Sans-Serif` (`Inter` / `Plus Jakarta Sans` / `Manrope`).
  - *Character:* Clean, geometric, hyper-legible at small sizes.
  - *H1 Scale:* `clamp(2.2rem, 4.5vw, 3.8rem)` | `font-weight: 800` | `letter-spacing: -0.025em`.
  - *H2 Scale:* `clamp(1.6rem, 3.0vw, 2.4rem)` | `font-weight: 700` | `letter-spacing: -0.02em`.
- **Price Tags & Map Badges:** `Tabular Bold Numerals` (`font-variant-numeric: tabular-nums`).
  - *Character:* Numbers never shift horizontally when switching currencies or updating filters.
  - *Scale:* `0.85rem` to `1.2rem` | `font-weight: 700`.
- **Coordinates & Spatial Distances:** Compact uppercase monospace (`0.72rem`, `letter-spacing: 0.08em`).

---

## 4. DETAILED COMPONENT & SECTION WIREFRAMES

```
+--------------------------------------------------------------------------------------------------+
| BRAND NAVBAR:  [ Compass Logo ] AGS DEHRADUN PROPERTIES      Explore Map  Developments  Guides  Tour |
+--------------------------------------------------------------------------------------------------+
| COMPACT SEARCH ENGINE RIBBON:                                                                    |
|   [ Locality: Rajpur Road v ] [ Type: Villas v ] [ Budget: ₹1.0 - ₹3.0 Cr v ] [ 24 Properties → ]|
+--------------------------------------------------------------------------------------------------+
| DUAL-PANE SYNCHRONIZED SPATIAL WORKSPACE:                                                        |
|                                                                                                  |
|   LEFT PANE (55% Width) — INTERACTIVE VECTOR MAP:  RIGHT PANE (45% Width) — LISTINGS RAIL:       |
|   +----------------------------------------------+ +-------------------------------------------+ |
|   |  [+] Topographic Contours & Ridges           | | 8 Properties in Selected Corridor         | |
|   |  [-] Commute Isochrones (15m / 30m)          | |                                           | |
|   |                                              | | [ Card 01: Hillside Family Residence ]    | |
|   |       (₹1.45 Cr)                             | |   Rajpur Road · ₹1.45 Cr · 4 BHK          | |
|   |           \--[ Pulsating Radar Ring ]        | |   [ High-Res Photo ]                      | |
|   |                                              | |                                           | |
|   |    (₹82 L)               (₹1.18 Cr)          | | [ Card 02: Garden View Residence ]        | |
|   |                                              | |   Sahastradhara Road · ₹82 Lakh · 3 BHK   | |
|   |  +-----------------------------------------+ | |   [ High-Res Photo ]                      | |
|   |  | DISMISSIBLE PREVIEW CARD [ ✕ ]          | | |                                           | |
|   |  | "Hillside Residence · ₹1.45 Cr"         | | | [ Card 03: Foothill Courtyard Villa ]     | |
|   |  | 4 BHK · 2,850 sq ft · Rajpur Road       | | |   Mussoorie Road · ₹1.18 Cr · 3 BHK       | |
|   |  +-----------------------------------------+ | |                                           | |
|   +----------------------------------------------+ +-------------------------------------------+ |
+--------------------------------------------------------------------------------------------------+
| SIGNATURE DEVELOPMENTS (3-Column Grid):                                                          |
|   [ 01 Foothill Residences ]      [ 02 Cedar Court ]             [ 03 The Grove ]                |
|   Mussoorie Road · Villas         Sahastradhara · Apartments     Old Rajpur · Courtyards         |
|   [ Highlight on Map ]            [ Highlight on Map ]           [ Highlight on Map ]            |
+--------------------------------------------------------------------------------------------------+
| LOCALITY INTELLIGENCE & NEIGHBORHOOD GUIDES (4-Column Grid):                                     |
|   [ Rajpur Road Guide ]           [ Mussoorie Road Guide ]       [ Sahastradhara Guide ]         |
|   Avg Price: ₹11,500/sq ft        Avg Price: ₹9,200/sq ft        Avg Price: ₹6,800/sq ft         |
|   Green Buffer: 82%               Green Buffer: 90%              Green Buffer: 64%               |
+--------------------------------------------------------------------------------------------------+
| THE 4 CONSUMER TRUST PILLARS (4-Column Grid):                                                    |
|   [ 01 Freehold Titles ] [ 02 Zero Brokerage ] [ 03 Accompanied Chauffeur ] [ 04 Sub-Registrar ] |
+--------------------------------------------------------------------------------------------------+
| SCHEDULE A PRIVATE SITE TOUR FORM:                                                               |
|   [ Full Name ] [ Mobile Number ] [ Preferred Day ] [ Confirm Inspection Tour → ]                |
+--------------------------------------------------------------------------------------------------+
```

---

## 5. SIGNATURE INTERACTIVE FEATURE: DUAL-PANE SYNCHRONIZATION

### 5.1 Interactive Architecture
The Map-First experience relies on a two-way synchronization loop between the map pins and the listing cards:

```
   [ User clicks Map Pin ] ---------------------> [ Centers Map & Triggers Pulsating Radar Ring ]
                                           \----> [ Opens Floating Dismissible Preview Card ]
                                            \---> [ Auto-scrolls Listing Rail to Target Card ]

   [ User hovers Listing Card ] ----------------> [ Highlights Matching Map Pin with Bounce Animation ]
```

### 5.2 Airbnb-Style Price Badges
Map pins are not generic red markers; they are **styled price pills**:
- Default State: White pill with black bold text (`₹1.45 Cr`), soft box shadow (`0 4px 14px rgba(0,0,0,0.16)`).
- Active State: Vibrant Signal Blue background (`#2563EB`) with white text, triggering an expanding SVG radar pulse ring (`@keyframes pulseRing`).
- Dismissible Preview Card: Features property thumbnail, configuration, direct WhatsApp link, and a prominent close button (`✕`).

### 5.3 Commute Isochrone Calculation Engine
```typescript
export interface IsochroneRing {
  minutes: number;
  centerCoordinates: [number, number]; // [lat, lng]
  radiusMeters: number;
  corridorsCovered: string[];
}

export const dehradunIsochrones: Record<number, IsochroneRing> = {
  15: {
    minutes: 15,
    centerCoordinates: [30.3165, 78.0322], // Clock Tower Hub
    radiusMeters: 4500,
    corridorsCovered: ["Dalanwala", "Jakhan", "Old Canal Road", "GMS Road"]
  },
  30: {
    minutes: 30,
    centerCoordinates: [30.3165, 78.0322],
    radiusMeters: 9800,
    corridorsCovered: ["Old Rajpur", "Sahastradhara Springs", "Mussoorie Diversion", "Clement Town"]
  }
};
```

---

## 6. DATA SCHEMAS & SAMPLE DATASET

```typescript
export interface MapPropertyItem {
  id: string;
  title: string;
  locality: string;
  priceINR: string;
  numericPriceLakhs: number;
  bhk: number;
  carpetAreaSqFt: number;
  propertyType: "Villa" | "Apartment" | "Duplex" | "Plot";
  coordinates: { x: number; y: number; lat: number; lng: number };
  image: string;
  isFeatured: boolean;
}
```

---

## 7. RECOMMENDED HELPING TOOLS & LIBRARIES

1. **Leaflet & React Leaflet (`react-leaflet`):**
   - For interactive raster/vector map rendering with zero third-party API keys required.
   - Allows custom HTML marker divs for the Airbnb-style price pills.
2. **Mapbox GL JS (`mapbox-gl`):**
   - For hardware-accelerated 3D terrain elevation and custom topographic contour lines.
3. **Framer Motion:**
   - Animates the listing rail cards into view with stagger animations.

---

## 8. DEVELOPER & CLIENT PRESENTATION SCRIPT
When demonstrating this concept:

> *"Buyers today demand instant geographical certainty. They want to know exactly where the property is, what the commute to the highway or school looks like, and how prices compare across neighborhoods. This portal gives them the sleek, high-utility experience of Airbnb or Zillow, keeping your agency positioned as the master authority of the valley."*
