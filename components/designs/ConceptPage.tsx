import Image from "next/image";
import Link from "next/link";
import type { DesignConcept } from "@/data/designConcepts";
import { properties } from "@/data/properties";
import styles from "./designs.module.css";

const featureCopy:Record<string,{eyebrow:string;headline:string;body:string;cta:string}>={
  editorial:{eyebrow:"The Dehradun Property Journal · Issue 01",headline:"Space, light and a slower kind of luxury.",body:"A story-led collection of homes chosen for architecture, atmosphere and a strong sense of place.",cta:"Read the collection"},
  map:{eyebrow:"7 sample properties in view",headline:"Move the map. Find your fit.",body:"Compare localities, budgets and everyday connections without losing your place.",cta:"Update this area"},
  architecture:{eyebrow:"AGS / Project index 2026",headline:"Built with intention. Shown with clarity.",body:"A project-first system for understanding planning, materials, configuration and progress.",cta:"View project index"},
  biophilic:{eyebrow:"Living well in the foothills",headline:"A home should help you breathe deeper.",body:"Explore low-density homes shaped by morning light, open air and a meaningful relationship with landscape.",cta:"Plan a site walk"},
  brutalist:{eyebrow:"DEHRADUN / NOW AVAILABLE",headline:"REAL SPACES. ZERO FLUFF.",body:"Sample homes, honest facts, fast enquiries. Built for people who would rather see the price than read a slogan.",cta:"SHOW ME LISTINGS"},
  investment:{eyebrow:"AGS Property Intelligence / Demo data",headline:"See the asset, not just the address.",body:"A decision surface for comparing sample yields, ticket sizes, occupancy assumptions and locality signals.",cta:"Compare assets"},
  heritage:{eyebrow:"The private register · Dehradun",headline:"Homes with memory, held for what comes next.",body:"A considered archive of sample estates, garden houses and places defined by craft and continuity.",cta:"Request particulars"},
  coastal:{eyebrow:"A different rhythm of living",headline:"Find your way back to the water.",body:"Destination-led homes for unhurried mornings, open horizons and a life lived closer to nature.",cta:"Explore the coast"},
  immersive:{eyebrow:"Interactive development preview · Demo",headline:"Explore the building before the first visit.",body:"Select a floor, inspect a sample residence and move from spatial context to practical detail.",cta:"Enter model view"},
};

export function ConceptPage({concept}:{concept:DesignConcept}){const copy=featureCopy[concept.theme];const featured=properties.slice(0,3);return <main className={styles.concept} data-theme={concept.theme}>
  <Link href="/designs" className={styles.back}>← <span>Back to design menu</span></Link>
  <nav className={styles.conceptNav}><b>{concept.shortTitle}</b><div><a href="#collection">Collection</a><a href="#approach">Approach</a><a href="#contact">Enquire</a></div><button>Menu</button></nav>
  <section className={styles.conceptHero}>
    <Image src={concept.theme==="editorial"?"/images/residence.png":concept.theme==="heritage"?"/images/villa.png":"/images/hero-dehradun.png"} alt="Sample property concept" fill priority sizes="100vw"/>
    <div className={styles.heroOverlay}/><article><p>{copy.eyebrow}</p><h1>{copy.headline}</h1><div><p>{copy.body}</p><a href="#collection">{copy.cta} <span>→</span></a></div></article>
    {concept.theme==="map"&&<div className={styles.mapHud}><span>Rajpur Road</span><i>₹82L</i><i>₹1.18Cr</i><i>₹1.45Cr</i><b>＋ －</b></div>}
    {concept.theme==="investment"&&<div className={styles.metricHud}><span>Sample portfolio</span><strong>₹3.19 Cr</strong><small>3 assets · illustrative only</small></div>}
    {concept.theme==="immersive"&&<div className={styles.modelHud}><span>MODEL VIEW / PLACEHOLDER</span><b>Floor 03</b><p>Drag to orbit · Scroll to zoom</p><div><button>Exterior</button><button>Floor plan</button><button>Gallery</button></div></div>}
  </section>
  <section className={styles.conceptStatement} id="approach"><span>{concept.number} / Design direction</span><h2>{concept.tagline}</h2><div><p><b>Built for</b>{concept.audience}</p><p><b>Signature system</b>{concept.signature}</p><p><b>Typography</b>{concept.typography}</p></div></section>
  <section className={styles.collection} id="collection"><header><span>Selected sample properties</span><h2>{concept.theme==="investment"?"Compare the opportunity.":concept.theme==="architecture"?"Project index.":"A collection with a point of view."}</h2><p>All property names, availability and prices are demo data.</p></header><div className={styles.conceptListings}>{featured.map((property,index)=><article key={property.id}><div className={styles.listingImage}><Image src={property.images[(index+1)%property.images.length]} alt="Sample property" fill sizes="(max-width:760px) 100vw, 33vw"/><span>Sample property</span></div><div className={styles.listingMeta}><span>0{index+1} · {property.locality}</span><h3>{property.title}</h3><dl><div><dt>Price</dt><dd>{property.price}</dd></div><div><dt>Plan</dt><dd>{property.bhk?`${property.bhk} BHK`:property.propertyType}</dd></div><div><dt>Area</dt><dd>{property.area}</dd></div></dl><a href="#contact">View sample details ↗</a></div></article>)}</div></section>
  {concept.theme==="investment"&&<section className={styles.dataBand}><div><span>Illustrative gross yield</span><strong>5.8%</strong><small>Not a forecast</small></div><div><span>Sample occupancy</span><strong>91%</strong><small>Demo assumption</small></div><div><span>Assets compared</span><strong>03</strong><small>Static prototype</small></div></section>}
  {concept.theme==="immersive"&&<section className={styles.fallback}><span>Accessible 2D fallback</span><h2>Every unit remains available outside the model.</h2><p>A production build would pair GLB/React Three Fiber with this conventional list, floor-plan download, poster image, loading state, and reduced-motion mode.</p></section>}
  <section className={styles.conceptCta} id="contact"><span>Concept demo · no data is submitted</span><h2>{concept.theme==="brutalist"?"BOOK A VISIT. TODAY.":"See the place. Ask the useful questions."}</h2><div><button>Schedule a sample visit</button><button>WhatsApp enquiry</button></div></section>
  <footer className={styles.conceptFooter}><b>{concept.title}</b><span>{concept.palette.join(" · ")}</span><Link href="/designs">Choose another concept ↑</Link></footer>
  </main>}
