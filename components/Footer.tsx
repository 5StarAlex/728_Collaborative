import Link from "next/link";
import Image from "next/image";
import { company, divisions, navItems } from "@/lib/site-data";
import { NewsletterForm } from "./NewsletterForm";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-cta">
        <div className="footer-cta-inner">
          <div>
            <div className="footer-label">Next Step</div>
            <h2>Let&apos;s build <em>stronger</em> organizations together.</h2>
            <p>Tell us about your goals, workforce needs, training priorities, or organizational challenges. We will help you determine the right next step.</p>
          </div>
          <div className="footer-cta-actions">
            <Link href="/schedule" className="footer-btn footer-btn-text">Schedule a Discovery Call -&gt;</Link>
            <Link href="/request-proposal" className="footer-btn footer-btn-outline">Request a Proposal -&gt;</Link>
          </div>
        </div>
      </div>

      <div className="footer-main">
        <div className="footer-brand">
          <Link href="/" className="footer-logo-tile" aria-label="728 Collaborative home">
            <Image src="/assets/728-collaborative-logo.svg" alt="728 Collaborative LLC" width={150} height={150} />
          </Link>
          <p>{company.description}</p>
          <p>{company.serviceArea}</p>
          <div className="footer-social">
            <a href="https://www.linkedin.com" aria-label="LinkedIn">in</a>
          </div>
        </div>

        <div>
          <div className="footer-label footer-col-title">Navigate</div>
          <ul className="footer-links">
            {navItems.map((item) => <li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}
          </ul>
        </div>

        <div>
          <div className="footer-label footer-col-title">Services</div>
          <ul className="footer-links">
            {divisions.map((division) => <li key={division.href}><Link href={division.href}>{division.name}</Link></li>)}
            <li><Link href="/request-proposal">Request a Proposal</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <div className="footer-label footer-col-title">Contact</div>
          <p className="footer-contact-link"><a href={company.phoneHref}>{company.phone}</a></p>
          <p className="footer-contact-link"><a href={`mailto:${company.email}`}>{company.email}</a></p>
          <p>{company.hours}</p>
          <NewsletterForm />
        </div>
      </div>

      <div className="footer-disclaimer">
        Services provided by 728 Collaborative LLC are non-clinical in nature and do not constitute psychotherapy, mental health treatment, or clinical social work services. Training and professional development offerings are educational in nature.
      </div>

      <div className="footer-bottom">
        <span>© 2026 728 Collaborative LLC · All rights reserved</span>
        <ul>
          <li><Link href="/privacy">Privacy Policy</Link></li>
          <li><Link href="/terms">Terms of Use</Link></li>
          <li><Link href="/accessibility">Accessibility</Link></li>
        </ul>
      </div>
    </footer>
  );
}
