# Anti-Gravity execution prompt

Copy everything below into Anti-Gravity.

---

You are a senior product designer, UX researcher, 3D-web specialist, and Next.js frontend engineer. Work autonomously and continuously until the entire real-estate design lab is complete, tested, and documented. Do not stop after planning, after one concept, or after a partial scaffold. Do not ask for approval between concepts unless a genuinely blocking credential or missing required asset prevents progress.

## Repository and starting state

Open the repository and read all project instructions before editing. Inspect:

- `docs/real-estate-design-research.md`
- every file under `docs/design-concepts/`
- `data/designConcepts.ts`
- the current AGS website at `/`
- the design gallery at `/designs`
- every folder under `app/designs/`
- existing components, mock property data, images, metadata, and hosting configuration

The current production design is Concept 01 and must remain available. Do not delete or flatten it. Preserve the concept-demo and sample-data disclosures.

## Research requirement

Before major implementation, perform a short independent validation pass using current primary/authoritative sources wherever possible. Review leading real-estate website patterns, accessibility guidance, responsive-image performance, map UX, and official documentation for any 3D libraries you use. Add useful new findings and source links to the research report; do not copy marketing articles verbatim.

## Objective

Finish ten materially different real-estate website concepts. They must not be the same layout with changed colors. Each needs a distinct:

- audience and business strategy
- information architecture and first-screen task
- layout silhouette and density
- palette and contrast system
- typography hierarchy and font personality
- property-card/listing treatment
- navigation and conversion pattern
- interaction and motion behavior
- responsive mobile adaptation

The concepts are:

1. Foothill Quiet Luxury — preserve and refine the current AGS design.
2. Monochrome Editorial.
3. Map-first Property Finder.
4. Architectural Grid.
5. Biophilic Wellness Living.
6. Urban Neo-brutalist.
7. Investment Intelligence.
8. Heritage Estate.
9. Coastal Lifestyle.
10. Immersive 3D Residence.

## File and route isolation

- Keep one separate route folder per design under `app/designs/`.
- Use CSS Modules or equally strict scoping so concepts cannot leak styles into one another.
- Shared low-level primitives are allowed, but each concept must have its own composition and theme tokens.
- Keep the menu/gallery at `/designs`.
- Every concept page must contain an obvious, keyboard-accessible “Back to design menu” control.
- The gallery must show all ten concepts, their palettes, typography direction, audience, signature feature, implementation status, and a working link.

## Content and honesty

- All listings, prices, project facts, testimonials, statistics, yields, certifications, and contact details remain sample/demo data unless verified source material is provided.
- Never invent awards, experience years, customer counts, green certifications, historical provenance, investment returns, or legal status.
- Use realistic but clearly labeled fictional content.

## 3D concept requirements

For Concept 10, choose the lightest appropriate implementation after validating official docs:

- Use `<model-viewer>` when the task is simple GLB inspection or AR.
- Use Three.js with React Three Fiber and Drei only when custom unit/floor state, hotspots, camera transitions, or interactive building selection require it.
- Use Matterport only for embedded scanned real-space tours.
- Prefer GLB/glTF; optimize with glTF Transform plus Draco/Meshopt and KTX2/Basis textures as appropriate.
- Provide a poster image, loading state, error state, reduced-motion behavior, and a complete non-3D fallback containing the same property/unit information.
- Pause rendering off-screen and test on a mid-range mobile viewport.

If no production 3D asset is available, build a polished interface prototype with a clearly labeled model placeholder and document the exact asset pipeline. Do not fabricate a complex building from CSS shapes or pretend a placeholder is a real 3D property.

## Quality bar

- Responsive at 390 px, tablet, laptop, and wide desktop widths.
- No horizontal overflow, clipped headlines, broken routes, missing images, or overlapping fixed controls.
- Body text normally 16 px or larger; practical UI labels normally 14 px or larger unless truly secondary.
- Meet WCAG AA contrast targets and visible focus states.
- Respect `prefers-reduced-motion`.
- Use responsive images and prevent layout shift.
- Large touch targets and usable mobile filters/drawers.
- No generic AI copy such as “unlock your dream home,” no excessive gradients, no meaningless glassmorphism, and no fake luxury claims.

## Verification

Work until all of the following are true:

1. All ten gallery cards link to real, completed routes.
2. Every concept is visually and structurally distinct.
3. Every route has a working return-to-menu control.
4. TypeScript and production build pass.
5. All static-exported routes are generated.
6. Desktop and mobile browser checks pass for the menu and every concept.
7. Interactive filters, drawers, galleries, and 3D/fallback controls work.
8. Documentation matches the final implementation.
9. README explains the design lab, routes, running, building, and limitations.
10. No unrelated user work is overwritten.

Fix any discovered issue and rerun the relevant checks. Continue until the checklist is satisfied. Then commit the completed source, push it to the configured repository, and publish the existing Site using its current audience only if deployment tools and authorization are available. Report the final commit, routes, verification performed, and any honest remaining limitation.

---
