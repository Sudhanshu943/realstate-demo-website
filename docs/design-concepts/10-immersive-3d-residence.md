# 10 — Immersive 3D Residence

- **Audience:** New-development buyers, overseas buyers, and users evaluating unbuilt units.
- **Concept:** A spatial product demo: rotate the building, isolate floors, inspect units, then return to conventional facts.
- **Palette:** Obsidian `#090B0F`, graphite `#171B23`, luminous cyan `#78F1E1`, white.
- **Typography:** Technical grotesk; 52–88 px display; 13–15 px interface; monospace coordinates/status.
- **Layout:** Full-viewport model, unit filter HUD, hotspot cards, floor-plan drawer, always-visible 2D fallback.
- **Motion:** Camera transitions tied to selection; no autoplay flythrough; reduced-motion alternative.
- **Conversion:** Select unit, request plan, schedule virtual consultation.
- **Best for:** One development with a reliable 3D asset pipeline.
- **Risk:** Performance, accessibility, asset governance, and mobile GPU limits. Never make 3D the only way to access information.
- **Tools:** Blender → glTF/GLB; React Three Fiber + Drei for interactive state; `<model-viewer>` for simple viewer/AR; Matterport for scanned finished spaces; glTF Transform/Draco/Meshopt/KTX2 for optimization.
