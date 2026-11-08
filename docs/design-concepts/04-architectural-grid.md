# AGS DESIGN LAB // CONCEPT 04 ARCHITECTURAL SPECIFICATION
# ARCHITECTURAL GRID & SWISS TECTONICS — THE ENGINEERING STUDIO

**Document Version:** `2.0.0`  
**Classification:** Master Architectural Design & Engineering Specification  
**Route:** `/designs/architectural-grid`  
**Target Category:** Structural Engineering Transparency, CAD Blueprints, & Construction Audits  
**Design Lead:** AGS Realtors & Construction Architectural Lab  

---

## 1. STRATEGIC POSITIONING & AUDIENCE PSYCHOLOGY

### 1.1 The High-Net-Worth Persona Matrix
The Architectural Grid concept is designed for buyers and institutional developers who demand rigorous engineering verification before making multi-crore commitments:

1. **The Structural Engineer, Architect, & Institutional Builder:**
   - *Profile:* Technical professionals who look past superficial staging and paint.
   - *Psychological Drivers:* Demands to inspect load paths, moment frames, rebar grades, seismic joints, and MEP ducting.
   - *Expectations:* Legible structural grids, CAD drafting coordinates, BIM LOD 400 data, and geotechnical core-drill logs.
   - *Dealbreakers:* Vague marketing claims, fake European columns, concealed utilities, and lack of seismic certifications.

2. **The Discerning Quality-Obsessed Homeowner:**
   - *Profile:* C-suite executives and industrialists who have experienced water leakage, settlement cracks, or dampness in past properties.
   - *Psychological Drivers:* Wants physical proof that the building can withstand Himalayan seismic Zone IV ground accelerations and extreme monsoon rainfall.

3. **The Commercial Real Estate Fund / Family Office:**
   - *Profile:* Allocating tens of crores into boutique developments; demands audited FSI calculations, fire safety compliance, and clear structural warranties.

### 1.2 Core Emotional Thesis
> *"Structural honesty above all. We do not conceal our architecture behind cosmetic cladding. We reveal the moment frames, seismic dampening, and hydrological conduits that ensure this residence endures for a century."*

The website operates as an **active architectural and engineering studio**. Drafting grids, dimensional callouts, and technical CAD layer slicers replace sales brochures.

---

## 2. LUXURY COLOR CHEMISTRY & MATERIAL TAXONOMY

### 2.1 Color Science: The Swiss Drafting Slate & Blueprint Palette
```css
:root {
  /* Drafting Canvas & Blueprint Ground */
  --c04-bg-canvas: #121A22;          /* Deep Engineering Slate */
  --c04-bg-surface: #182430;         /* Working Studio Surface */
  --c04-bg-vellum: #D9D7D0;          /* Archival Drafting Vellum (Light Contrast Cards) */

  /* Swiss Technical Inks & Linework */
  --c04-text-white: #F8FAFC;         /* High-Contrast Technical White */
  --c04-text-muted: #8898A8;         /* Cad Annotation Gray */
  --c04-text-dark: #0F172A;          /* Vellum Card Ink */

  /* Drafting Linework & Safety Accents */
  --c04-accent-orange: #F26A2E;      /* Safety Drafting Orange (Coordinates, Alarms) */
  --c04-accent-cyan: #38BDF8;        /* Blueprint Laser Cyan (Services, Vectors) */
  --c04-accent-amber: #FBBF24;       /* Structural Load Axis */

  /* Visible Structural Drafting Grids */
  --c04-grid-lines: rgba(56, 189, 248, 0.08);
  --c04-border-cad: rgba(255, 255, 255, 0.14);
  --c04-border-orange: rgba(242, 106, 46, 0.45);
}
```

---

## 3. TYPOGRAPHY SYSTEM & UI HIERARCHY

### 3.1 Type Pairing Architecture
- **Primary Section Headings:** `Swiss Grotesk` (`Neue Haas Grotesk` / `Helvetica Now` / `Inter`).
  - *Character:* Utilitarian, rigorous, unornamented.
  - *Scale:* `clamp(2.4rem, 5vw, 4.4rem)` | `font-weight: 700` | `letter-spacing: -0.025em`.
- **Engineering Annotations & Telemetry:** `Technical Monospace` (`JetBrains Mono` / `SF Mono`).
  - *Character:* Code-like legibility, fixed-pitch alignment.
  - *Scale:* `0.75rem` to `0.9rem` | `font-weight: 600` | `letter-spacing: 0.06em` | `text-transform: uppercase`.
- **Audit Tables & Tabular Dimensions:** `font-variant-numeric: tabular-nums`.

---

## 4. DETAILED COMPONENT & SECTION WIREFRAMES

```
+--------------------------------------------------------------------------------------------------+
| CAD TELEMETRY:  DATUM: WGS84 // 30.3165° N, 78.0322° E | 890M MSL | ZONE IV | REV: 2026.04 STUDIO|
+--------------------------------------------------------------------------------------------------+
| BRAND NAVBAR:   [+] AGS ARCHITECTURAL // TECTONICS DIVISION     BIM Slicer  Catalogue  Audit  CAD|
+--------------------------------------------------------------------------------------------------+
| ENGINEERING FILTER RIBBON:                                                                       |
|   [ Structural Typology: RCC Moment Frame v ] [ Clear Height: 3.6m v ] [ Corridor: Rajpur v ]    |
+--------------------------------------------------------------------------------------------------+
| SIGNATURE INTERACTIVE: THE 4-LAYER INTERACTIVE CAD BLUEPRINT VIEWER                              |
|                                                                                                  |
|   LAYER CONTROLS:                                                                                |
|   [ [X] 01 Structural Grid ] [ [X] 02 MEP Conduit ] [ [X] 03 Solar Vectors ] [ [X] 04 Tectonics ]|
|                                                                                                  |
|   +--------------------------------------------------------------------------------------------+ |
|   |  CAD VIEWPORT (Cross-Section & Plan View):                                                 | |
|   |  +-- 12x8m RCC Moment Frame Grid --------------------------------------------------------+ | |
|   |  |   [ 3.2m Cantilever Living Deck ]                                                     | | |
|   |  |   --> 45,000L Rainwater Conduit Line [Blue Cyan Vector]                               | | |
|   |  |   --> 10:30 AM Winter Solar Ingress Arc [Orange Vector]                               | | |
|   |  |   --> 350mm Local Quartzite Cavity Wall [Hatched Fill]                                | | |
|   |  +---------------------------------------------------------------------------------------+ | |
|   +--------------------------------------------------------------------------------------------+ |
|                                                                                                  |
|   TELEMETRY DRAWER:  BUILT AREA: 385 M²  |  FSI: 0.85  |  CLEARANCE: 3.4M  |  SEISMIC: ZONE IV   |
+--------------------------------------------------------------------------------------------------+
| ACTIVE CONSTRUCTION CATALOGUE (3-Column Grid):                                                   |
|   [ SPEC // 01: RCC Frame Villa ]  [ SPEC // 02: Post-Tensioned Duplex ]  [ SPEC // 03: Steel ]  |
|   Area: 420 m² · FSI 0.82          Area: 280 m² · FSI 1.10                Area: 510 m² · FSI 0.65|
|   Status: Slab Curing Complete     Status: Façade Glazing                 Status: Foundation     |
|   [ Download CAD Drawings → ]      [ Download CAD Drawings → ]            [ Download CAD → ]     |
+--------------------------------------------------------------------------------------------------+
| THE 4 SWISS TECTONIC TENETS (4-Column Grid):                                                     |
|   [ 01 Structural Honesty ] [ 02 Thermal Mass ] [ 03 Daylight Autonomy ] [ 04 Hydrology Loop ]   |
+--------------------------------------------------------------------------------------------------+
| GEOTECHNICAL & SEISMIC INTEGRITY AUDIT TABLE:                                                    |
|   Soil Bearing: 240 kN/m² | Slope FOS: 1.85 | Concrete: M40 Core | Low-E Glazing U-Val: 0.32 W/m²|
+--------------------------------------------------------------------------------------------------+
| TECHNICAL SITE SURVEY BOOKING FORM:                                                              |
|   [ Engineer / Buyer Name ] [ Contact Phone ] [ Request Full BIM Package (.dwg/.ifc) ]           |
+--------------------------------------------------------------------------------------------------+
```

---

## 5. SIGNATURE INTERACTIVE FEATURE: 4-LAYER CAD BLUEPRINT VIEWER

### 5.1 The 4 Architectural Layers
1. **Layer 01 · Structural Grid & Cantilevers:**
   - Visualizes 12x8m moment frames, column transfer points, and the dramatic 3.2m living room cantilever projecting over the foothill contour.
2. **Layer 02 · MEP & Hydrology Conduit:**
   - Tracks 45,000L subterranean rainwater harvesting sumps, VRV air distribution ducts, and greywater recycling channels.
3. **Layer 03 · Solar & Daylight Vectors:**
   - Traces 10:30 AM winter sun penetration angles, automated louver shading, and 92% daylight autonomy.
4. **Layer 04 · Material Tectonics:**
   - Details double-cavity dressed quartzite stone, rockwool acoustic insulation, and FSC-certified cedar soffits.

```typescript
export interface CadLayerConfig {
  id: "structure" | "mep" | "solar" | "materials";
  label: string;
  color: string;
  visible: boolean;
  specSummary: string;
}

export const defaultCadLayers: CadLayerConfig[] = [
  { id: "structure", label: "01 Structural Grid", color: "#F26A2E", visible: true, specSummary: "12x8m RCC Moment Frame with 3.2m Cantilever" },
  { id: "mep", label: "02 MEP Services", color: "#38BDF8", visible: false, specSummary: "45,000L Rainwater Conduit & VRV Concealed Ducts" },
  { id: "solar", label: "03 Solar Arc Vectors", color: "#FBBF24", visible: false, specSummary: "Winter Azimuth 142° · 92% Daylight Autonomy" },
  { id: "materials", label: "04 Tectonic Shell", color: "#A855F7", visible: false, specSummary: "350mm Quartzite Stone + Rockwool Cavity Wall" },
];
```

---

## 6. GEOTECHNICAL AUDIT DATA & COMPLIANCE

| Audit Parameter | Measured Field Metric | Regulatory BIS Standard | Safety Margin |
| :--- | :--- | :--- | :--- |
| **Soil Safe Bearing Capacity** | `240 kN/m²` (Boulder Alluvium) | `180 kN/m²` Minimum | **+33% Reserve** |
| **Slope Stability Factor (FOS)**| `1.85 FOS` (Reinforced Retaining) | `1.50 FOS` IS 14458 | **+23% Above Code** |
| **Concrete Compressive Strength**| `M40 Columns / M35 Slabs` | `M25 Residential` | **+60% Structural Strength** |
| **Thermal Envelope U-Value** | `0.32 W/m²K` (Low-E Double Glazed)| `0.60 W/m²K` ECBC | **46% Reduced Heat Loss** |

---

## 7. DEVELOPER & CLIENT PRESENTATION SCRIPT
When pitching this concept:

> *"Notice how this interface immediately silences skeptical engineers, architects, and detail-oriented buyers. It proves your development is built to global seismic and structural standards. Instead of arguing about wallpaper, you are showing them the concrete, rebar, and physics behind their home."*
