import { Accordion } from "@/components/Accordion";
import { ItemGrid } from "@/components/Cards";
import { Breadcrumbs, SectionHeading } from "@/components/Section";
import { faqs } from "@/lib/content";
import { consultingServices, industryList } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("728 Consulting", "Strategic organizational consulting for planning, assessments, leadership development, workforce strategy, program design, and process improvement.", "/services/728-consulting");

export default function ConsultingPage() {
  const formats = ["Short-term consultation", "Organizational assessment", "Project-based engagement", "Facilitation", "Strategic planning retreat", "Ongoing advisory support", "Customized contract"];
  const deliverables = ["Assessment summary", "Strategic plan", "Implementation roadmap", "Policy or process recommendations", "Facilitation agenda", "Training-aligned recommendations", "Advisory memo"];
  return (
    <>
      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "728 Consulting", href: "/services/728-consulting" }]} />
      <section className="page-hero hero-consulting"><div className="container"><p className="eyebrow">728 Consulting</p><h1>Consulting Strategy</h1><p className="large">728 Consulting partners with organizations to clarify priorities, strengthen leadership, improve workflows, and design practical strategies that can be implemented in real operating environments.</p><div className="button-row"><a className="button button-primary" href="/request-proposal">Request Proposal</a><a className="button button-secondary" href="/schedule">Schedule a Call</a></div></div></section>
      <section><div className="container"><SectionHeading eyebrow="Service Areas" title="Consulting categories built around organizational needs." /><ItemGrid items={consultingServices} /></div></section>
      <section className="cream"><div className="container split"><div><SectionHeading eyebrow="Engagement Process" title="A clear consulting path from discovery to implementation." /><p>Every engagement is scoped around the organization&apos;s goals, stakeholders, timeline, and implementation capacity. Recommendations are designed to be practical, documented, and connected to next steps.</p></div><div className="feature-card"><h2>Potential Deliverables</h2><ul className="check-list">{deliverables.map((item) => <li key={item}>{item}</li>)}</ul></div></div></section>
      <section><div className="container"><SectionHeading eyebrow="Formats" title="Flexible engagement formats." /><ItemGrid items={formats} /></div></section>
      <section className="cream"><div className="container"><SectionHeading eyebrow="Industries" title="Relevant across people-centered sectors." /><ItemGrid items={industryList} /></div></section>
      <section><div className="container narrow"><SectionHeading eyebrow="FAQ" title="Consulting questions" /><Accordion items={faqs.consulting} /></div></section>
    </>
  );
}
