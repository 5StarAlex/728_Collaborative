import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { Breadcrumbs, SectionHeading } from "@/components/Section";
import { company } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Contact", "Contact 728 Collaborative LLC for consulting, training, proposal requests, SW@Home support inquiries, and general questions.", "/contact");

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />
      <section className="page-hero hero-contact"><div className="container"><p className="eyebrow">Contact</p><h1>Start a Conversation</h1><p className="large">Use the form for consulting, training, proposal, SW@Home, and general inquiries. Standard response expectation: during business hours, Monday through Friday, 9:00 AM-5:00 PM Eastern Time.</p><div className="button-row"><Link className="button button-primary" href="#contact-form">Submit an Inquiry</Link></div></div></section>
      <section id="contact-form"><div className="container split"><div><SectionHeading eyebrow="Inquiry Form" title="Tell us what you need." /><ContactForm /></div><aside className="feature-card"><h2>Contact Details</h2><p><strong>{company.founder}</strong><br /><a href={`mailto:${company.email}`}>{company.email}</a><br /><a href={company.phoneHref}>{company.phone}</a></p><p>{company.location}</p><p>{company.serviceArea}</p><p>{company.hours}</p><p className="notice">Do not submit sensitive clinical, health, financial, or legal information through this standard form. SW@Home is not a crisis service.</p></aside></div></section>
    </>
  );
}
