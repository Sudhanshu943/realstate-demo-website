export type DesignConcept = {
  number: string;
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  audience: string;
  signature: string;
  palette: string[];
  typography: string;
  href: string;
  status: "Live site" | "Prototype";
  theme: string;
};

export const designConcepts: DesignConcept[] = [
  { number:"01", slug:"foothill-quiet-luxury", title:"Foothill Quiet Luxury", shortTitle:"Foothill", tagline:"Landscape-led calm for a trusted Dehradun property advisor.", audience:"Families · premium residential", signature:"Cinematic landscape + raised search", palette:["#15211E","#FBFAF6","#C98555"], typography:"Cormorant Garamond + Manrope", href:"/", status:"Live site", theme:"foothill" },
  { number:"02", slug:"monochrome-editorial", title:"Monochrome Editorial", shortTitle:"Editorial", tagline:"A property journal where architecture becomes the cover story.", audience:"Design-conscious luxury buyers", signature:"Asymmetric magazine composition", palette:["#111111","#F7F7F3","#D3472F"], typography:"Didone serif + neutral grotesk", href:"/designs/monochrome-editorial", status:"Prototype", theme:"editorial" },
  { number:"03", slug:"map-first-property-finder", title:"Map-first Property Finder", shortTitle:"Map-first", tagline:"A high-utility discovery workspace built around location.", audience:"Inventory-led city buyers", signature:"Synchronized map and listing rail", palette:["#0B1F33","#F4F7FA","#2F80ED"], typography:"Modern UI sans + tabular numerals", href:"/designs/map-first-property-finder", status:"Prototype", theme:"map" },
  { number:"04", slug:"architectural-grid", title:"Architectural Grid", shortTitle:"Architecture", tagline:"Construction credibility presented like a working studio.", audience:"Developers · architects · projects", signature:"Visible grid + specification system", palette:["#18324A","#D9D7D0","#F26A2E"], typography:"Swiss grotesk + monospace", href:"/designs/architectural-grid", status:"Prototype", theme:"architecture" },
  { number:"05", slug:"biophilic-wellness", title:"Biophilic Wellness Living", shortTitle:"Biophilic", tagline:"Homes discovered through light, air, landscape, and ritual.", audience:"Wellness and low-density buyers", signature:"Organic story-led browsing", palette:["#244236","#F3EFE4","#B46D4D"], typography:"Humanist serif + rounded sans", href:"/designs/biophilic-wellness", status:"Prototype", theme:"biophilic" },
  { number:"06", slug:"urban-neo-brutalist", title:"Urban Neo-brutalist", shortTitle:"Urban", tagline:"Direct, energetic property discovery for a new city audience.", audience:"Younger urban buyers · creative space", signature:"Oversized type + hard-edged cards", palette:["#050505","#F2FF3D","#3455FF"], typography:"Black grotesk + monospace", href:"/designs/urban-neo-brutalist", status:"Prototype", theme:"brutalist" },
  { number:"07", slug:"investment-intelligence", title:"Investment Intelligence", shortTitle:"Investment", tagline:"Evidence-first property decisions with transparent assumptions.", audience:"Investors · commercial buyers", signature:"KPI dashboard + asset comparison", palette:["#071825","#203442","#57D3A2"], typography:"Technical sans + tabular figures", href:"/designs/investment-intelligence", status:"Prototype", theme:"investment" },
  { number:"08", slug:"heritage-estate", title:"Heritage Estate", shortTitle:"Heritage", tagline:"Provenance, craft, and stewardship in a modern archive.", audience:"Historic and legacy property buyers", signature:"Archival narrative + private particulars", palette:["#542B32","#F0E7D2","#B08A55"], typography:"Old-style serif + small caps", href:"/designs/heritage-estate", status:"Prototype", theme:"heritage" },
  { number:"09", slug:"coastal-lifestyle", title:"Coastal Lifestyle", shortTitle:"Coastal", tagline:"An optimistic destination-led journey from place to property.", audience:"Holiday-home and relocation buyers", signature:"Panoramic lifestyle itinerary", palette:["#063D4C","#F7EEDC","#F27E62"], typography:"Soft geometric sans + italic serif", href:"/designs/coastal-lifestyle", status:"Prototype", theme:"coastal" },
  { number:"10", slug:"immersive-3d-residence", title:"Immersive 3D Residence", shortTitle:"3D Residence", tagline:"A spatial sales interface for exploring a development unit by unit.", audience:"New-development and overseas buyers", signature:"Model HUD + accessible 2D fallback", palette:["#090B0F","#171B23","#78F1E1"], typography:"Technical grotesk + monospace", href:"/designs/immersive-3d-residence", status:"Prototype", theme:"immersive" },
];

export const getConcept = (slug:string) => designConcepts.find(concept => concept.slug === slug)!;
