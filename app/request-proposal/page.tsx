import { ContactForm } from "@/components/ContactForm";
import { Breadcrumbs, SectionHeading } from "@/components/Section";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Request a Proposal", "Request a consulting, training, facilitation, or workforce-development proposal from 728 Collaborative LLC.", "/request-proposal");

export default function ProposalPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Request a Proposal", href: "/request-proposal" }]} />
      <section className="page-hero hero-proposal"><div className="container"><p className="eyebrow">Proposal Request</p><h1>Request a Proposal</h1><p className="large">Share enough context to support initial scoping. Do not include confidential or sensitive personal information.</p><div className="button-row"><a className="button button-primary" href="#proposal-form">Start Proposal Request</a></div></div></section>
      <section id="proposal-form"><div className="container narrow"><SectionHeading eyebrow="Proposal Form" title="Project details" /><ContactForm defaultType="Proposal request" /></div></section>
    </>
  );
}
