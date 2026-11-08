import { ConceptPage } from "@/components/designs/ConceptPage"; import { getConcept } from "@/data/designConcepts";
export default function Page(){return <ConceptPage concept={getConcept("investment-intelligence")}/>}
