import Link from "next/link";
import { ItemGrid } from "@/components/Cards";
import { Breadcrumbs, SectionHeading } from "@/components/Section";
import { company } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Government Contracting", "Government contracting capabilities for consulting, workforce development, training, facilitation, and non-clinical support services.", "/government-contracting");

export default function GovernmentContractingPage() {
  const competencies = ["Strategic planning", "Organizational assessments", "Workforce development", "Leadership development", "Professional training", "Program design", "Policy and process support", "Facilitation", "Care coordination and resource navigation support"];
  const placeholders = ["UEI: Pending", "CAGE code: Pending", "SAM.gov registration: Pending", "Business classifications: Pending", "NAICS codes: Pending", "Contract vehicles: Pending", "Past performance: To be added when approved"];
  return (
    <>
      <Breadcrumbs items={[{ label: "Government Contracting", href: "/government-contracting" }]} />
      <section className="page-hero hero-government"><div className="container"><p className="eyebrow">Government Contracting</p><h1>Government Capabilities</h1><p className="large">728 Collaborative is structured to support agencies and public-sector partners through strategy, workforce development, professional learning, facilitation, and community-centered support services. Identifiers and registrations will be added only when confirmed.</p><div className="button-row"><Link className="button button-primary" href="/request-proposal">Request Information</Link></div></div></section>
      <section><div className="container split"><div><SectionHeading eyebrow="Core Competencies" title="Capability areas." /><ItemGrid items={competencies} /></div><div className="feature-card"><h2>Contracting Profile</h2><ul className="check-list">{placeholders.map((item) => <li key={item}>{item}</li>)}</ul></div></div></section>
      <section className="cream"><div className="container split"><div><SectionHeading eyebrow="Differentiators" title="Collaborative, practical, and implementation-focused." /><p>728 Collaborative brings a people-centered lens to organizational strategy, workforce learning, and support-system design without fabricating registrations, identifiers, or past performance before they are confirmed.</p></div><div className="feature-card"><h2>Contracting Contact</h2><p>{company.founder}<br /><a href={`mailto:${company.email}`}>{company.email}</a><br /><a href={company.phoneHref}>{company.phone}</a></p><Link className="button button-primary" href="/request-proposal">Request Information</Link></div></div></section>
      <section><div className="container narrow"><h2>Capability Statement</h2><p>The final capability statement should be reviewed after UEI, CAGE, NAICS, SAM.gov registration, classifications, and any contract vehicles are confirmed.</p><Link className="button button-secondary" href="/downloads/728-service-graphic-changes.pdf">Download Launch Resource</Link></div></section>
    </>
  );
}
