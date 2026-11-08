# AGS Realtors & Construction — Concept Demo

A premium, responsive real-estate and construction sales concept for Dehradun. The site uses fictional property records, prices, enquiries, leads, and project details. It is a demonstration only and is not an official AGS Realtors website.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production check

```bash
npm run build
npm start
```

## Demo routes

- `/` — Home and featured sample properties
- `/properties` — Filterable property discovery
- `/properties/rajpur-hillside-home` — Sample property detail
- `/projects` — Demo construction projects
- `/projects/foothill-residences` — Demo project detail
- `/about` — Safe placeholder business introduction
- `/contact` — Demo enquiry journey
- `/admin` — UI-only property dashboard
- `/admin/leads` — UI-only CRM pipeline
- `/designs` — Gallery for all ten researched visual directions
- `/designs/monochrome-editorial` — Example isolated concept route

## Real-estate design laboratory

The original AGS experience remains at `/`. Nine additional prototypes are isolated below `app/designs/`, with shared theme-scoped presentation code in `components/designs/`.

- Research synthesis: `docs/real-estate-design-research.md`
- Individual concept briefs: `docs/design-concepts/`
- Continuous implementation handoff: `docs/ANTIGRAVITY_PROMPT.md`
- Shared concept registry: `data/designConcepts.ts`

## Notes

- No backend is connected and forms do not transmit data.
- Placeholder phone, email, address, availability, and business copy must be replaced and approved before official use.
- Three original generated architectural images are reused across the demo listings and project previews.
