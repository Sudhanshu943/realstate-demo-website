import Image from "next/image";
import Link from "next/link";
import { designConcepts } from "@/data/designConcepts";
import styles from "./designs.module.css";

const images=["/images/hero-dehradun.png","/images/residence.png","/images/villa.png"];

export function DesignMenu(){return <main className={styles.menu}>
  <header className={styles.menuHeader}><div><span>AGS / Real-estate design laboratory</span><h1>Ten ways a property<br/>brand can <em>feel.</em></h1></div><div><p>Research-backed interface directions for different audiences, inventories, and business models.</p><a href="https://github.com/Sudhanshu943/realstate-demo-website/blob/main/docs/real-estate-design-research.md" target="_blank" rel="noreferrer">Research report</a></div></header>
  <section className={styles.menuIntro}><p>Not color swaps.</p><p>Each concept changes the hierarchy, typography, density, interaction model, and conversion strategy. Concept 01 is the current AGS website.</p></section>
  <section className={styles.conceptGrid}>{designConcepts.map((concept,index)=><Link href={concept.href} className={styles.conceptCard} key={concept.slug}>
    <div className={styles.cardImage}><Image src={images[index%images.length]} alt="Sample real-estate concept visual" fill sizes="(max-width: 760px) 100vw, 50vw"/><span>{concept.status}</span><b>{concept.number}</b></div>
    <div className={styles.cardBody}><div><p>{concept.audience}</p><h2>{concept.title}</h2></div><p>{concept.tagline}</p><dl><div><dt>Signature</dt><dd>{concept.signature}</dd></div><div><dt>Type</dt><dd>{concept.typography}</dd></div></dl><div className={styles.palette}>{concept.palette.map(color=><i key={color} style={{background:color}} aria-label={color}/>)}</div><span className={styles.open}>Open concept <b>↗</b></span></div>
  </Link>)}</section>
  <footer className={styles.menuFooter}><span>10 design systems · 1 sample property brand</span><Link href="/">Open current AGS site →</Link></footer>
  </main>}
