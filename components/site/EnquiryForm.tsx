"use client";
import { useState } from "react";

export function EnquiryForm({compact=false}:{compact?:boolean}) {
  const [sent,setSent]=useState(false);
  if(sent) return <div className="form-success" role="status"><span>✓</span><h3>Enquiry captured</h3><p>This is a demo confirmation. No data was sent.</p><button onClick={()=>setSent(false)}>Send another</button></div>;
  return <form className={`enquiry-form ${compact?"compact":""}`} onSubmit={(e)=>{e.preventDefault();setSent(true)}} id="enquiry">
    <label><span>Name</span><input required placeholder="Your name"/></label><label><span>Phone</span><input required inputMode="tel" placeholder="+91 00000 00000"/></label>
    {!compact&&<><label><span>Preferred location</span><input placeholder="e.g. Rajpur Road"/></label><label><span>Budget</span><input placeholder="Your preferred range"/></label></>}
    <label><span>{compact?"Email (optional)":"Property type"}</span>{compact?<input type="email" placeholder="you@example.com"/>:<select defaultValue=""><option value="" disabled>Select type</option><option>Apartment</option><option>Villa</option><option>Plot</option><option>Commercial</option></select>}</label>
    {compact&&<label><span>Preferred visit date</span><input type="date"/></label>}
    <label className="full"><span>Message</span><textarea rows={4} placeholder="Tell us what you are looking for"/></label><button className="button button-dark full">Submit enquiry <span>→</span></button><small className="full">Demo form — your information is not transmitted.</small>
  </form>;
}
