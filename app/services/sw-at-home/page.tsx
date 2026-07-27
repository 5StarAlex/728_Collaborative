import { Accordion } from "@/components/Accordion";
import { ItemGrid } from "@/components/Cards";
import { Breadcrumbs, SectionHeading } from "@/components/Section";
import { faqs } from "@/lib/content";
import { legalDisclaimer, swServices } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("SW@Home", "Non-clinical support for care coordination, resource navigation, advocacy, family education, transition planning, and support planning.", "/services/sw-at-home");

export default function SwAtHomePage() {
  const people = ["Individuals navigating care or service systems", "Families planning transitions", "Caregivers seeking resource clarity", "Organizations needing contract social work support", "South Carolina adoption-related matters where legally applicable"];
  const process = ["Initial contact", "Needs and goals discussion", "Resource and option review", "Support plan development", "Coordination and follow-up as appropriate"];
  return (
    <>
      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "SW@Home", href: "/services/sw-at-home" }]} />
      <section className="page-hero hero-support"><div className="container"><p className="eyebrow">SW@Home</p><h1>Navigation & Support</h1><p className="large">SW@Home provides non-clinical coordination, education, advocacy, planning, and resource-navigation support. It is not psychotherapy, diagnosis, clinical treatment, crisis response, or emergency support.</p><div className="button-row"><a className="button button-primary" href="/contact">Request Support</a><a className="button button-secondary" href="/contact">Ask a Question</a></div></div></section>
      <section><div className="container split"><div><SectionHeading eyebrow="Who It Helps" title="Support for people who need clarity and coordination." /><ul className="check-list">{people.map((item) => <li key={item}>{item}</li>)}</ul></div><div className="feature-card"><h2>Emergency Notice</h2><p>SW@Home is not an emergency or crisis-response service. For an immediate emergency, call 911. For mental-health crisis support in the United States, call or text 988.</p></div></div></section>
      <section className="cream"><div className="container"><SectionHeading eyebrow="Services" title="Non-clinical support services." /><ItemGrid items={swServices} /></div></section>
      <section><div className="container"><SectionHeading eyebrow="Process" title="A clear support path." /><ItemGrid items={process} /></div></section>
      <section className="cream"><div className="container narrow"><SectionHeading eyebrow="FAQ" title="SW@Home questions" /><Accordion items={faqs.sw} /><p className="notice">{legalDisclaimer}</p></div></section>
    </>
  );
}
