import { Accordion } from "@/components/Accordion";
import { ItemGrid } from "@/components/Cards";
import { Breadcrumbs, SectionHeading } from "@/components/Section";
import { faqs } from "@/lib/content";
import { consultingServices } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("728 Consulting", "Strategic organizational consulting for planning, assessments, leadership development, workforce strategy, program design, and process improvement.", "/services/728-consulting");

export default function ConsultingPage() {
  const engagementCards = [
    ["Assess", "Organizational assessments, discovery sessions, stakeholder input, and priority mapping."],
    ["Plan", "Strategic plans, implementation roadmaps, policy recommendations, and decision-ready summaries."],
    ["Facilitate", "Retreats, work sessions, team alignment, leadership conversations, and project-based support."],
    ["Advise", "Ongoing advisory support, custom contracts, and practical follow-through as needs evolve."]
  ];
  return (
    <>
      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "728 Consulting", href: "/services/728-consulting" }]} />
      <section className="page-hero hero-consulting"><div className="container"><p className="eyebrow">728 Consulting</p><h1>Consulting Strategy</h1><p className="large">728 Consulting partners with organizations to clarify priorities, strengthen leadership, improve workflows, and design practical strategies that can be implemented in real operating environments.</p><div className="button-row"><a className="button button-primary" href="/request-proposal">Request Proposal</a><a className="button button-secondary" href="/schedule">Schedule a Call</a></div></div></section>
      <section><div className="container"><SectionHeading eyebrow="Service Areas" title="Consulting categories built around organizational needs." /><ItemGrid items={consultingServices} /></div></section>
      <section className="cream"><div className="container"><SectionHeading eyebrow="Engagement Model" title="A clearer path from discovery to implementation.">Every engagement is scoped around the organization&apos;s goals, stakeholders, timeline, and implementation capacity.</SectionHeading><div className="feature-grid challenge-grid">{engagementCards.map(([title, text]) => <article className="feature-card" key={title}><h2>{title}</h2><p>{text}</p></article>)}</div></div></section>
      <section><div className="container narrow"><SectionHeading eyebrow="FAQ" title="Consulting questions" /><Accordion items={faqs.consulting} /></div></section>
    </>
  );
}
