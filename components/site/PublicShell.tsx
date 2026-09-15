import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { WhatsAppButton } from "./WhatsAppButton";

export function PublicShell({children}:{children:React.ReactNode}) { return <><Navbar/>{children}<Footer/><div className="mobile-cta"><a href="tel:+910000000000">Call</a><a href="https://wa.me/910000000000">WhatsApp</a></div><WhatsAppButton label="Enquire"/></>; }
