import Link from "next/link";
import { Accordion } from "@/components/Accordion";
import { DivisionCards, ItemGrid } from "@/components/Cards";
import { Breadcrumbs, SectionHeading } from "@/components/Section";
import { faqs } from "@/lib/content";
import { divisions } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Services", "Explore 728 Consulting, 728 Learning, and SW@Home services for organizations, professionals, individuals, and families.", "/services");

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Services", href: "/services" }]} />
      <section className="page-hero hero-services"><div className="container"><p className="eyebrow">Services</p><h1>Service Divisions</h1><p className="large">Choose the service division that best matches your need: consulting and strategy, professional learning, or non-clinical individual and family support.</p><div className="button-row"><Link className="button button-primary" href="/contact">Find the Right Service</Link></div></div></section>
      <section><div className="container"><DivisionCards /></div></section>
      <section className="cream"><div className="container"><SectionHeading eyebrow="Compare" title="Find the right starting point." /><div className="feature-grid">{divisions.map((division) => <article className="feature-card" key={division.name}><h2>{division.name}</h2><p className="pill">{division.label}</p><p>{division.description}</p><ItemGrid items={division.services.slice(0, 5)} /><p><Link className="text-link" href={division.href}>Go to {division.name}</Link></p></article>)}</div></div></section>
      <section><div className="container narrow"><SectionHeading eyebrow="FAQ" title="Common service questions" /><Accordion items={faqs.general} /></div></section>
    </>
  );
}
