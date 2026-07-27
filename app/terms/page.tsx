import { Breadcrumbs } from "@/components/Section";
import { legalDisclaimer } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Terms of Use", "Terms of use and professional-service disclaimers for 728 Collaborative LLC.", "/terms");

export default function TermsPage() {
  return <><Breadcrumbs items={[{ label: "Terms of Use", href: "/terms" }]} /><section className="page-hero hero-legal"><div className="container"><h1>Terms of Use</h1><p className="large">These launch terms should be reviewed by the company before publication.</p></div></section><section><div className="container narrow"><h2>Website Content</h2><p>Website content is provided for general informational and educational purposes and does not create a client, therapeutic, clinical, legal, or advisory relationship until an engagement is mutually confirmed in writing.</p><h2>Service Disclaimer</h2><p>{legalDisclaimer}</p><h2>No Emergency Use</h2><p>This website is not intended for emergencies or crisis response. For an immediate emergency, call 911. For mental-health crisis support in the United States, call or text 988.</p></div></section></>;
}
