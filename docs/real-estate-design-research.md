# Real-estate website design research

Updated: 8 November 2026

## Executive summary

The strongest real-estate websites do not merely look “luxury.” They make a clear strategic choice about what the visitor is trying to do: discover a lifestyle, search a large inventory, evaluate an investment, understand an architect’s point of view, or explore a property spatially. The visual system should follow that primary job.

Across the sources reviewed, the recurring professional patterns are:

- Large, credible property photography with disciplined art direction.
- A visible search or discovery path, but not always a giant portal-style filter bar.
- Strong location context and map support when inventory volume is high.
- Editorial typography for premium positioning; compact UI typography for search-heavy products.
- Restrained palettes with one deliberate accent rather than many competing brand colors.
- Mobile-first enquiry actions, clear listing facts, and short paths to call, WhatsApp, schedule, or request details.
- Honest, current listing data and clearly governed content provenance.
- Responsive image delivery, because oversized desktop images can waste 2–4× mobile bandwidth and hurt LCP.
- Accessible contrast: at least 4.5:1 for normal text and 3:1 for large text under WCAG AA.

## Research references

- [Luxury real-estate website examples and positioning patterns](https://www.zarla.com/inspiration/luxury-real-estate)
- [Real-world search-led, editorial, and advisor-led real-estate examples](https://websiteunpacked.com/real-estate-website-design)
- [Real-estate website interaction and map-first UX patterns](https://uxstudio.design/blog/real-estate-website-design-patterns)
- [W3C guidance on minimum text contrast](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum)
- [web.dev guidance on responsive images and LCP](https://web.dev/articles/serve-responsive-images)
- [Google Maps marker clustering guidance](https://developers.google.com/maps/documentation/javascript/marker-clustering)
- [React Three Fiber official introduction](https://r3f.docs.pmnd.rs/getting-started/introduction)
- [Google model-viewer documentation](https://modelviewer.dev/docs/index.html)
- [Matterport overview of real-estate virtual-tour tools](https://matterport.com/blog/best-virtual-tour-software-for-real-estate)

## Recommended information architecture

1. A design-lab index showing all ten concepts.
2. One isolated route folder per concept.
3. Concept 01 remains the existing AGS site at `/`.
4. Concepts 02–10 live below `/designs/<concept-name>`.
5. Every concept page includes a persistent “Back to design menu” action.
6. Each concept uses the same fictional sample-data discipline, but a different brand, layout, typography, density, interaction model, and conversion strategy.

## Shared professional baseline

- Body copy: 16–18 px; utility labels: 13–14 px; hero display: 56–120 px depending on concept.
- Minimum tap target: approximately 44 px.
- Use semantic headings and visible keyboard focus.
- Never rely on color alone for status.
- Show price, locality, property type, bedrooms, area, and listing status consistently.
- Keep lead capture contextual and brief; do not gate basic listing facts behind a form.
- Make imagery responsive and reserve dimensions to avoid layout shift.
- Treat 3D as progressive enhancement: poster image and normal gallery must remain available.

## Concept documents

1. [Foothill Quiet Luxury](design-concepts/01-foothill-quiet-luxury.md)
2. [Monochrome Editorial](design-concepts/02-monochrome-editorial.md)
3. [Map-first Property Finder](design-concepts/03-map-first-property-finder.md)
4. [Architectural Grid](design-concepts/04-architectural-grid.md)
5. [Biophilic Wellness Living](design-concepts/05-biophilic-wellness.md)
6. [Urban Neo-brutalist](design-concepts/06-urban-neo-brutalist.md)
7. [Investment Intelligence](design-concepts/07-investment-intelligence.md)
8. [Heritage Estate](design-concepts/08-heritage-estate.md)
9. [Coastal Lifestyle](design-concepts/09-coastal-lifestyle.md)
10. [Immersive 3D Residence](design-concepts/10-immersive-3d-residence.md)

## Tool-selection matrix

| Need | Recommended tool | Why |
|---|---|---|
| Standard marketing and listing UI | Next.js + TypeScript + CSS Modules/Tailwind | Strong routing, image handling, component reuse, and static export support |
| Interface motion | CSS transitions first; Motion/Framer Motion when choreography is complex | Keeps basic interactions light and reserves JS for meaningful motion |
| Map-heavy property search | Google Maps JS or Mapbox GL JS | Clustering, custom markers, geospatial interaction, and location search |
| Custom interactive building model | Three.js + React Three Fiber + Drei | Best fit when units, floors, hotspots, and camera states must react to React state |
| Simple GLB/USDZ viewer and AR | `<model-viewer>` | Fastest accessible route to camera controls and supported AR modes |
| Scanned real-property walkthrough | Matterport embed/SDK | Appropriate for captured spaces rather than hand-built architectural models |
| Model production | Blender; optional Revit/SketchUp export pipeline | Produce, clean, bake, and export optimized glTF/GLB assets |
| Model optimization | glTF Transform, Draco/Meshopt, KTX2/Basis textures | Reduces geometry and texture payloads for web delivery |
| 2D floor plan annotation | SVG/Canvas overlay | Crisp, searchable, responsive, and easier to make accessible than a full 3D scene |

## 3D implementation rules

- Use GLB/glTF as the default web delivery format.
- Load a poster first; lazy-load the 3D scene only when requested or near the viewport.
- Keep a non-3D gallery and specification table as fallback.
- Target a measured asset budget rather than “maximum quality.” Compress geometry and textures, and test on mid-range mobile hardware.
- Provide keyboard-accessible unit lists outside the canvas; never make the canvas the only way to select a unit.
- Respect `prefers-reduced-motion`, pause rendering when off-screen, and avoid continuous high-DPR rendering when nothing changes.
- Use `<model-viewer>` when the job is simply “inspect this model/enter AR.” Use React Three Fiber when the 3D model is an application with filters, unit state, hotspots, or custom shaders.

## Implementation status

The design-lab index and ten isolated concept routes are part of this repository. Concept 01 is the original AGS design. Concepts 02–10 are implementation-ready visual prototypes using the existing demo imagery and fictional data.
