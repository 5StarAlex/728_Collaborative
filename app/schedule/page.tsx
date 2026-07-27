import Link from "next/link";
import { Breadcrumbs } from "@/components/Section";
import { company } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Schedule a Discovery Call", "Schedule a discovery call with 728 Collaborative LLC for consulting, training, or support services.", "/schedule");

export default function SchedulePage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Schedule", href: "/schedule" }]} />
      <section className="page-hero hero-schedule"><div className="container"><p className="eyebrow">Schedule</p><h1>Discovery Call</h1><p className="large">A scheduling embed can be connected here through Calendly, Cal.com, or a Google Calendar-based workflow when the company selects a scheduling provider.</p></div></section>
      <section><div className="container split"><div className="feature-card"><h2>Scheduling Placeholder</h2><p>Connect `SCHEDULE_URL` in production or embed the approved scheduling tool. Until then, visitors can use the contact form or email directly.</p><div className="button-row"><Link className="button button-primary" href="/contact">Use Contact Form</Link><a className="button button-secondary" href={`mailto:${company.email}`}>Email {company.email}</a></div></div><div><h2>Good fit for a discovery call</h2><ul className="check-list"><li>Consulting or strategic planning needs</li><li>Training or workshop requests</li><li>Proposal scoping</li><li>Government contracting questions</li><li>SW@Home initial questions</li></ul></div></div></section>
    </>
  );
}
