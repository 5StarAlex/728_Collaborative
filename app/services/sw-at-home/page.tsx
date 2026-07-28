import { Accordion } from "@/components/Accordion";
import { ItemGrid } from "@/components/Cards";
import { Breadcrumbs, SectionHeading } from "@/components/Section";
import { faqs } from "@/lib/content";
import { legalDisclaimer, swServices } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("SW@Home", "Non-clinical support for care coordination, resource navigation, advocacy, family education, transition planning, and support planning.", "/services/sw-at-home");

export default function SwAtHomePage() {
  const supportModel = [
    ["Who It Helps", "Individuals, families, caregivers, organizations needing contract support, and South Carolina adoption-related matters where legally applicable."],
    ["How It Starts", "Initial contact, a focused needs discussion, and review of goals, options, and appropriate next steps."],
    ["What It Produces", "Resource clarity, support planning, coordination, education, advocacy, and follow-up when appropriate."],
    ["What It Is Not", "SW@Home is not psychotherapy, diagnosis, clinical treatment, crisis response, or emergency support."]
  ];
  return (
    <>
      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "SW@Home", href: "/services/sw-at-home" }]} />
      <section className="page-hero hero-support"><div className="container"><p className="eyebrow">SW@Home</p><h1>Navigation & Support</h1><p className="large">SW@Home provides non-clinical coordination, education, advocacy, planning, and resource-navigation support. It is not psychotherapy, diagnosis, clinical treatment, crisis response, or emergency support.</p><div className="button-row"><a className="button button-primary" href="/contact">Request Support</a><a className="button button-secondary" href="/contact">Ask a Question</a></div></div></section>
      <section><div className="container"><SectionHeading eyebrow="Support Model" title="Clarity, coordination, and careful boundaries." /><div className="feature-grid challenge-grid">{supportModel.map(([title, text]) => <article className="feature-card" key={title}><h2>{title}</h2><p>{text}</p></article>)}</div><p className="notice">For an immediate emergency, call 911. For mental-health crisis support in the United States, call or text 988.</p></div></section>
      <section className="cream"><div className="container"><SectionHeading eyebrow="Services" title="Non-clinical support services." /><ItemGrid items={swServices} /></div></section>
      <section className="cream"><div className="container narrow"><SectionHeading eyebrow="FAQ" title="SW@Home questions" /><Accordion items={faqs.sw} /><p className="notice">{legalDisclaimer}</p></div></section>
    </>
  );
}
