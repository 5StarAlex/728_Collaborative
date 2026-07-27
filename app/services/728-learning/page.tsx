import { Accordion } from "@/components/Accordion";
import { ItemGrid } from "@/components/Cards";
import { Breadcrumbs, SectionHeading } from "@/components/Section";
import { faqs } from "@/lib/content";
import { learningTopics } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = pageMetadata("728 Learning", "Professional education, training, curriculum design, leadership development, workforce training, and workshop facilitation.", "/services/728-learning");

export default function LearningPage() {
  const formats = ["Live virtual training", "On-site workshops", "Keynotes", "Conference sessions", "Multi-session training series", "Leadership development cohorts", "Customized curriculum", "Continuing education programs when approved"];
  const audiences = ["Executives and managers", "Supervisors", "Frontline teams", "Healthcare and human-service teams", "Educators", "Nonprofit staff", "Government and community partners"];
  return (
    <>
      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "728 Learning", href: "/services/728-learning" }]} />
      <section className="page-hero hero-learning"><div className="container"><p className="eyebrow">728 Learning</p><h1>Professional Learning</h1><p className="large">728 Learning designs and delivers training experiences for leaders, teams, and organizations that need practical, relevant, and immediately usable professional development.</p><div className="button-row"><Link className="button button-primary" href="/contact">Request a Training</Link><Link className="button button-secondary" href="/resources">View Upcoming Programs</Link></div></div></section>
      <section><div className="container split"><div><SectionHeading eyebrow="Training Philosophy" title="Learning should be clear, useful, and connected to daily practice." /><p>Training is built around audience needs, organizational priorities, examples that matter, and realistic application. CEU or accreditation information is confirmed only when formally approved for a specific program.</p></div><div className="feature-card"><h2>Designed For</h2><ul className="check-list">{audiences.map((item) => <li key={item}>{item}</li>)}</ul></div></div></section>
      <section className="cream"><div className="container"><SectionHeading eyebrow="Topic Areas" title="Training and workforce-development focus areas." /><ItemGrid items={learningTopics} /></div></section>
      <section><div className="container"><SectionHeading eyebrow="Formats" title="Delivery formats that scale to the audience." /><ItemGrid items={formats} /></div></section>
      <section className="cream"><div className="container narrow"><SectionHeading eyebrow="FAQ" title="Training questions" /><Accordion items={faqs.learning} /></div></section>
    </>
  );
}
