"use client";
import Image from "next/image";
import { useState } from "react";

export function PropertyGallery({images}:{images:string[]}) { const [active,setActive]=useState(0); return <div className="gallery"><div className="gallery-main"><Image src={images[active]} alt="Sample property gallery view" fill priority sizes="(max-width:900px) 100vw, 70vw"/></div><div className="gallery-thumbs">{images.map((src,index)=><button onClick={()=>setActive(index)} className={active===index?"active":""} key={src} aria-label={`View image ${index+1}`}><Image src={src} alt="" fill sizes="140px"/></button>)}</div><span className="gallery-count">{String(active+1).padStart(2,"0")} / {String(images.length).padStart(2,"0")}</span></div>; }
