import Image from "next/image";
import Link from "next/link";

export function ProjectCard({project}:{project:{id:string;name:string;location:string;type:string;status:string;image:string}}) { return <article className="project-card"><div className="project-image"><Image src={project.image} alt="Demo project visual" fill sizes="(max-width: 760px) 100vw, 33vw"/><span className="sample-badge">Demo project</span></div><div><p>{project.location}</p><h3>{project.name}</h3><dl><div><dt>Type</dt><dd>{project.type}</dd></div><div><dt>Status</dt><dd>{project.status}</dd></div></dl><Link href={`/projects/${project.id}`} className="text-link">View project <span>→</span></Link></div></article>; }
