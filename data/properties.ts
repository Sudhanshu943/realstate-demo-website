export type Property = {
  id: string; title: string; city: string; locality: string; price: string; bhk: number;
  area: string; propertyType: string; purpose: "Buy" | "Rent"; description: string;
  amenities: string[]; images: string[]; featured: boolean; status: string;
};

const images = ["/images/hero-dehradun.png", "/images/residence.png", "/images/villa.png"];

export const properties: Property[] = [
  { id:"rajpur-hillside-home", title:"Hillside Family Residence", city:"Dehradun", locality:"Rajpur Road", price:"₹1.45 Cr", bhk:4, area:"2,850 sq ft", propertyType:"Villa", purpose:"Buy", description:"A sample four-bedroom home concept with generous living spaces, a garden-facing deck and considered natural materials.", amenities:["Covered parking","Garden deck","Modular kitchen","Power backup","Gated access","Visitor parking"], images:[images[0],images[2],images[1]], featured:true, status:"Ready to move — Demo" },
  { id:"sahastradhara-residence", title:"Garden View Residence", city:"Dehradun", locality:"Sahastradhara Road", price:"₹82 Lakh", bhk:3, area:"1,720 sq ft", propertyType:"Apartment", purpose:"Buy", description:"A bright sample residence planned around cross ventilation, leafy views and comfortable family living.", amenities:["Lift access","Club lounge","Security","Balcony","Power backup"], images:[images[1],images[0],images[2]], featured:true, status:"Sample availability" },
  { id:"mussoorie-road-villa", title:"Foothill Courtyard Villa", city:"Dehradun", locality:"Mussoorie Road", price:"₹1.18 Cr", bhk:3, area:"2,240 sq ft", propertyType:"Villa", purpose:"Buy", description:"A sample courtyard-led villa concept designed for indoor-outdoor living close to the foothills.", amenities:["Courtyard","Terrace","Covered parking","Store room"], images:[images[2],images[0],images[1]], featured:true, status:"Under construction — Demo" },
  { id:"jakhan-urban-home", title:"Quiet Urban Apartment", city:"Dehradun", locality:"Jakhan", price:"₹58,000 / mo", bhk:3, area:"1,860 sq ft", propertyType:"Apartment", purpose:"Rent", description:"A sample rental home with a calm neutral palette and access to everyday conveniences.", amenities:["Furnished","Lift access","Parking","Security"], images:[images[1],images[2],images[0]], featured:true, status:"Sample availability" },
  { id:"clement-town-duplex", title:"Tree-Lined Duplex Home", city:"Dehradun", locality:"Clement Town", price:"₹94 Lakh", bhk:3, area:"1,980 sq ft", propertyType:"Duplex", purpose:"Buy", description:"A sample duplex home in a quieter residential pocket, with flexible family spaces.", amenities:["Private terrace","Parking","Utility area","Pet friendly"], images:[images[2],images[1],images[0]], featured:true, status:"Ready to move — Demo" },
  { id:"gms-road-office", title:"Contemporary Work Studio", city:"Dehradun", locality:"GMS Road", price:"₹42 Lakh", bhk:0, area:"780 sq ft", propertyType:"Commercial", purpose:"Buy", description:"A sample compact commercial workspace suited to a studio, consultancy or professional office.", amenities:["Reception area","Parking","Power backup","Washroom"], images:[images[0],images[1],images[2]], featured:true, status:"Sample availability" },
  { id:"dalanwala-residence", title:"Dalanwala Garden Floor", city:"Dehradun", locality:"Dalanwala", price:"₹76,000 / mo", bhk:4, area:"2,400 sq ft", propertyType:"Builder Floor", purpose:"Rent", description:"A sample garden-level rental with broad verandahs and flexible living rooms.", amenities:["Private lawn","Staff room","Parking","Storage"], images:[images[2],images[0],images[1]], featured:false, status:"Sample availability" },
  { id:"turner-road-home", title:"Sunlit Starter Home", city:"Dehradun", locality:"Turner Road", price:"₹48 Lakh", bhk:2, area:"1,090 sq ft", propertyType:"Apartment", purpose:"Buy", description:"A practical sample two-bedroom apartment with a bright living area and compact balcony.", amenities:["Balcony","Lift access","Parking","Security"], images:[images[1],images[2],images[0]], featured:false, status:"Ready to move — Demo" },
  { id:"prem-nagar-plot", title:"Residential Plot Concept", city:"Dehradun", locality:"Prem Nagar", price:"₹36 Lakh", bhk:0, area:"1,800 sq ft", propertyType:"Plot", purpose:"Buy", description:"A sample residential plot listing shown to demonstrate land discovery and enquiry workflows.", amenities:["Road access","Residential zone","Boundary markers"], images:[images[0],images[2],images[1]], featured:false, status:"Sample listing" },
];

export const projects = [
  { id:"foothill-residences", name:"Foothill Residences", location:"Mussoorie Road", type:"Boutique Villas", status:"Concept stage", image:images[0] },
  { id:"cedar-court", name:"Cedar Court", location:"Sahastradhara Road", type:"Low-rise Apartments", status:"Planning preview", image:images[1] },
  { id:"the-grove", name:"The Grove", location:"Rajpur", type:"Courtyard Homes", status:"Demo proposal", image:images[2] },
];
