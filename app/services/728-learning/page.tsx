import { Accordion } from "@/components/Accordion";
import { ItemGrid } from "@/components/Cards";
import { Breadcrumbs, SectionHeading } from "@/components/Section";
import { faqs } from "@/lib/content";
import { learningTopics } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = pageMetadata("728 Learning", "Professional education, training, curriculum design, leadership development, workforce training, and workshop facilitation.", "/services/728-learning");

export default function LearningPage() {
  const learningModel = [
    ["Audience", "Leaders, supervisors, frontline teams, educators, healthcare and human-service professionals, nonprofits, and public-sector partners."],
    ["Delivery", "Live virtual training, on-site workshops, keynotes, conference sessions, multi-session series, cohorts, and custom curriculum."],
    ["Application", "Practical examples, realistic scenarios, and tools designed to transfer into daily work."],
    ["Credit Status", "CEU or accreditation information is stated only when formally approved for a specific program."]
  ];
  return (
    <>
      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "728 Learning", href: "/services/728-learning" }]} />
      <section className="page-hero hero-learning"><div className="container"><p className="eyebrow">728 Learning</p><h1>Professional Learning</h1><p className="large">728 Learning designs and delivers training experiences for leaders, teams, and organizations that need practical, relevant, and immediately usable professional development.</p><div className="button-row"><Link className="button button-primary" href="/contact">Request a Training</Link><Link className="button button-secondary" href="/resources">View Upcoming Programs</Link></div></div></section>
      <section><div className="container"><SectionHeading eyebrow="Training Philosophy" title="Learning should be clear, useful, and connected to daily practice.">Training is built around audience needs, organizational priorities, examples that matter, and realistic application.</SectionHeading><div className="feature-grid challenge-grid">{learningModel.map(([title, text]) => <article className="feature-card" key={title}><h2>{title}</h2><p>{text}</p></article>)}</div></div></section>
      <section className="cream"><div className="container"><SectionHeading eyebrow="Topic Areas" title="Training and workforce-development focus areas." /><ItemGrid items={learningTopics} /></div></section>
      <section className="cream"><div className="container narrow"><SectionHeading eyebrow="FAQ" title="Training questions" /><Accordion items={faqs.learning} /></div></section>
    </>
  );
}
