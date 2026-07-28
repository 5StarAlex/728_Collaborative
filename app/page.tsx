import Link from "next/link";
import { DivisionCards } from "@/components/Cards";
import { SectionHeading } from "@/components/Section";
import { articles } from "@/lib/content";
import { processSteps } from "@/lib/site-data";

const homepageChallenges = [
  {
    title: "Leadership & Culture",
    text: "Strengthen communication, engagement, manager confidence, and healthier team practices."
  },
  {
    title: "Strategy & Systems",
    text: "Clarify priorities, improve workflows, shape policy, and support practical implementation."
  },
  {
    title: "Workforce & Learning",
    text: "Build relevant training, retention strategies, curriculum, and professional growth pathways."
  },
  {
    title: "Individual & Family Support",
    text: "Help people navigate resources, transitions, advocacy needs, and coordinated next steps."
  }
];

const industryGroups = [
  {
    title: "Healthcare & Human Services",
    text: "Healthcare organizations, hospitals, home health, behavioral health, and human-service teams."
  },
  {
    title: "Education & Early Learning",
    text: "Early childhood programs, K-12 schools, colleges, universities, and professional learning teams."
  },
  {
    title: "Mission-Driven Organizations",
    text: "Nonprofits, faith-based organizations, community organizations, and local service partners."
  },
  {
    title: "Public & Private Sector",
    text: "Government agencies, businesses, corporations, and organizations with people-centered workforces."
  }
];

export default function Home() {
  return (
    <>
      <section id="home-main" className="landing-hero landing-hero-centered">
        <div className="landing-hero-content">
          <div className="landing-eyebrow">
            <span className="landing-dot" aria-hidden="true"></span>
            <span className="landing-label">Strategic Consulting &amp; Professional Learning</span>
          </div>
          <h1 className="landing-title landing-title-desktop">Stronger people.<br />Stronger organizations.<br /><em>Lasting impact.</em></h1>
          <h1 className="landing-title landing-title-mobile">Stronger people.<br />Stronger organizations.<br /><em>Lasting impact.</em></h1>
          <p className="landing-copy landing-copy-desktop">
            Consulting, training, and support that help people and organizations move forward.
          </p>
          <p className="landing-copy landing-copy-mobile">
            Consulting, training, and support that help people and organizations move forward.
          </p>
          <div className="landing-ctas">
            <Link href="/schedule" className="landing-btn landing-btn-primary">Schedule a Discovery Call →</Link>
            <Link href="/services" className="landing-btn landing-btn-outline">Explore Our Services →</Link>
          </div>
          <div className="landing-proposal">
            <Link href="/request-proposal">Request a Proposal</Link>
            <span>RESPONSE WITHIN 1-2 BUSINESS DAYS</span>
          </div>
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

      <section id="service-model" className="service-showcase">
        <div className="container">
          <SectionHeading eyebrow="Service Model" title="One Collaborative Firm. Three Specialized Divisions.">
            728 Collaborative brings consulting, professional learning, and personalized support together under one mission: helping people and organizations build stronger futures.
          </SectionHeading>
          <DivisionCards showServices={false} />
        </div>
      </section>
      <section className="cream">
        <div className="container">
          <SectionHeading eyebrow="Challenges We Address" title="Practical Solutions for Complex Organizational Challenges" />
          <div className="feature-grid challenge-grid">
            {homepageChallenges.map((group) => (
              <article className="feature-card reveal" key={group.title}>
                <h3>{group.title}</h3>
                <p>{group.text}</p>
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
      <section id="industries-served" className="cream">
        <div className="container">
          <SectionHeading eyebrow="Industries Served" title="Experience Across Mission-Driven and People-Centered Industries" />
          <div className="feature-grid challenge-grid industry-summary-grid" aria-label="Industries served">
            {industryGroups.map((group) => (
              <Link className="feature-card reveal" href="/industries" key={group.title}>
                <h3>{group.title}</h3>
                <p>{group.text}</p>
              </Link>
            ))}
          </div>
          <p><Link className="text-link" href="/industries">View Industries We Serve</Link></p>
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
