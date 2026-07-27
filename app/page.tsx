import Link from "next/link";
import { DivisionCards, ItemGrid } from "@/components/Cards";
import { SectionHeading } from "@/components/Section";
import { articles } from "@/lib/content";
import { challengeGroups, company, industryList, processSteps } from "@/lib/site-data";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#home-main">Skip to content</a>
      <div className="landing-topstrip">
        <span>NATIONWIDE VIRTUAL SERVICES · IN-PERSON ACROSS SC &amp; NC</span>
        <Link href="/services/sw-at-home">SW@HOME - INDIVIDUAL &amp; FAMILY SUPPORT -&gt;</Link>
      </div>
      <nav className="landing-nav" aria-label="Primary">
        <Link href="/" className="landing-logo" aria-label="728 Collaborative home">
          <span className="landing-mark">728</span>
          <span className="landing-full">Collaborative&nbsp;LLC</span>
        </Link>
        <ul className="landing-navlinks">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/industries">Industries</Link></li>
          <li><Link href="/government-contracting">Government Contracting</Link></li>
          <li><Link href="/insights">Insights</Link></li>
          <li><Link href="/resources">Resources</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
        <div className="landing-navright">
          <a className="landing-icon-circle" href="https://www.linkedin.com" aria-label="LinkedIn">in</a>
          <Link href="/schedule" className="landing-btn landing-btn-primary">Schedule a Discovery Call -&gt;</Link>
        </div>
      </nav>

      <section id="home-main" className="landing-hero">
        <div>
          <div className="landing-eyebrow">
            <span className="landing-dot" aria-hidden="true"></span>
            <span className="landing-label">Strategic Consulting &amp; Professional Learning</span>
          </div>
          <h1 className="landing-title">Stronger people.<br />Stronger organizations.<br /><em>Lasting impact.</em></h1>
          <p className="landing-copy">
            728 Collaborative helps organizations strengthen leadership, develop their workforce, improve systems, and create sustainable results through strategic consulting and professional learning. Through SW@Home, we also help individuals and families navigate resources, transitions, and essential support services.
          </p>
          <div className="landing-ctas">
            <Link href="/schedule" className="landing-btn landing-btn-primary">Schedule a Discovery Call -&gt;</Link>
            <Link href="/services" className="landing-btn landing-btn-outline">Explore Our Services -&gt;</Link>
          </div>
          <div className="landing-proposal">
            <Link href="/request-proposal">Request a Proposal</Link>
            <span>RESPONSE WITHIN 1-2 BUSINESS DAYS</span>
          </div>
        </div>

        <div className="landing-dossier">
          <div className="landing-dossier-tab">Our Process</div>
          <div className="landing-dossier-head">
            <div className="landing-label">How We Work</div>
            <h2>Four phases, one engagement</h2>
          </div>
          {[
            ["01", "Consulting Strategy", "Assess the organization and define a clear, actionable roadmap."],
            ["02", "Professional Learning", "Build leadership and workforce capability through targeted training."],
            ["03", "Coordinated Support", "Align systems and stakeholders around a shared plan of action."],
            ["04", "Sustainable Impact", "Embed practices that outlast the engagement and keep delivering results."]
          ].map(([num, title, text]) => (
            <div className="landing-dossier-row" key={num}>
              <div className="landing-dossier-num">{num}</div>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="landing-strip">
        <div className="landing-strip-inner">
          {[
            ["2", "States Served - SC & NC"],
            ["4", "Core Service Pillars"],
            ["100%", "Virtual Availability Nationwide"],
            ["1-2", "Business Days to Proposal"]
          ].map(([num, desc]) => (
            <div className="landing-strip-item" key={desc}>
              <span className="landing-strip-num">{num}</span>
              <span className="landing-strip-desc">{desc}</span>
            </div>
          ))}
        </div>
      </div>

      <section>
        <div className="container">
          <SectionHeading eyebrow="Service Model" title="One Collaborative Firm. Three Specialized Divisions.">
            728 Collaborative brings consulting, professional learning, and personalized support together under one mission: helping people and organizations build stronger futures.
          </SectionHeading>
          <DivisionCards />
        </div>
      </section>
      <section className="cream">
        <div className="container">
          <SectionHeading eyebrow="Challenges We Address" title="Practical Solutions for Complex Organizational Challenges" />
          <div className="feature-grid">
            {challengeGroups.map((group) => (
              <article className="feature-card reveal" key={group.title}>
                <h3>{group.title}</h3>
                <ul className="check-list">{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <SectionHeading eyebrow="Why 728 Collaborative" title="Customized Solutions. Collaborative Process. Measurable Impact.">
            Every engagement begins with listening, assessment, and collaboration. Solutions are customized around the client&apos;s goals, workforce, community, and operating environment.
          </SectionHeading>
          <div className="process-grid">
            {processSteps.map((step) => <article className="process-step reveal" key={step.title}><h3>{step.title}</h3><p>{step.text}</p></article>)}
          </div>
        </div>
      </section>
      <section className="cream">
        <div className="container">
          <SectionHeading eyebrow="Industries Served" title="Experience Across Mission-Driven and People-Centered Industries" />
          <ItemGrid items={industryList} />
          <p><Link className="text-link" href="/industries">View Industries We Serve</Link></p>
        </div>
      </section>
      <section className="founder-panel">
        <div className="container split">
          <div className="portrait-placeholder">Professional headshot placeholder for Tatyana Lance. Replace before launch when an approved image is supplied.</div>
          <div>
            <p className="eyebrow">Founder & Principal Consultant</p>
            <h2>Experience Grounded in Service, Strategy, and People</h2>
            <h3>{company.founder}</h3>
            <p>Tatyana Lance leads 728 Collaborative with a multidisciplinary foundation across social work, leadership, workforce development, training, human services, and organizational support. Her approach centers practical strategy, service, and systems that help people and organizations move forward with clarity.</p>
            <Link className="button button-secondary" href="/about">Meet Our Founder</Link>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <SectionHeading eyebrow="Insights" title="Insights for Stronger Organizations and Workforces" />
          <div className="article-grid">
            {articles.map((article) => (
              <article className="article-card reveal" key={article.slug}>
                <p className="pill">{article.category}</p>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <small>{new Date(article.date).toLocaleDateString("en-US")} · {article.readTime}</small>
                <p><Link className="text-link" href={`/insights/${article.slug}`}>Read article</Link></p>
              </article>
            ))}
          </div>
          <p><Link className="text-link" href="/insights">Explore All Insights</Link></p>
        </div>
      </section>
    </>
  );
}
