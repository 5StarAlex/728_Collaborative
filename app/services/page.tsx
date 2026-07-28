import Link from "next/link";
import { Accordion } from "@/components/Accordion";
import { DivisionCards } from "@/components/Cards";
import { Breadcrumbs, SectionHeading } from "@/components/Section";
import { faqs } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Services", "Explore 728 Consulting, 728 Learning, and SW@Home services for organizations, professionals, individuals, and families.", "/services");

export default function ServicesPage() {
  const pathways = [
    ["Need organizational strategy?", "Start with 728 Consulting for assessments, planning, facilitation, and implementation support.", "/services/728-consulting"],
    ["Need staff learning?", "Start with 728 Learning for training, curriculum, workshops, cohorts, or speaking engagements.", "/services/728-learning"],
    ["Need resource support?", "Start with SW@Home for non-clinical navigation, coordination, education, and transition support.", "/services/sw-at-home"]
  ];
  return (
    <>
      <Breadcrumbs items={[{ label: "Services", href: "/services" }]} />
      <section className="page-hero hero-services"><div className="container"><p className="eyebrow">Services</p><h1>Service Divisions</h1><p className="large">Choose the service division that best matches your need: consulting and strategy, professional learning, or non-clinical individual and family support.</p><div className="button-row"><Link className="button button-primary" href="/contact">Find the Right Service</Link></div></div></section>
      <section><div className="container"><DivisionCards showServices={false} /></div></section>
      <section className="cream"><div className="container"><SectionHeading eyebrow="Choose a Path" title="Start with the outcome you need." /><div className="feature-grid">{pathways.map(([title, text, href]) => <article className="feature-card" key={title}><h2>{title}</h2><p>{text}</p><p><Link className="text-link" href={href}>View recommended division</Link></p></article>)}</div></div></section>
      <section><div className="container narrow"><SectionHeading eyebrow="FAQ" title="Common service questions" /><Accordion items={faqs.general} /></div></section>
    </>
  );
}
