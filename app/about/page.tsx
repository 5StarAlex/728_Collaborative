import Link from "next/link";
import { Breadcrumbs } from "@/components/Section";
import { company } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("About 728 Collaborative", "Learn about 728 Collaborative LLC, its mission, founding purpose, values, founder, and national consulting and training approach.", "/about");

export default function AboutPage() {
  const storyHighlights = [
    ["Leadership", "Develop confident leaders who can guide teams through change."],
    ["Culture", "Strengthen communication, trust, engagement, and shared accountability."],
    ["Systems", "Design practical workflows and support structures that last."]
  ];
  const values = [
    ["People First", "We begin with the people closest to the work and the communities affected by it."],
    ["Integrity", "We communicate clearly, protect trust, and avoid unsupported claims."],
    ["Innovation", "We adapt evidence-informed practices to real organizational conditions."],
    ["Sustainability", "We build solutions that can keep working after the engagement ends."],
    ["Community Impact", "We strengthen organizations so people and families can build stronger futures."]
  ];

  return (
    <>
      <Breadcrumbs items={[{ label: "About", href: "/about" }]} />
      <section className="about-hero">
        <div className="about-hero-motion" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="about-hero-overlay">
          <p className="eyebrow">About 728 Collaborative</p>
          <h1>Empowering people. Building systems. Creating lasting impact.</h1>
          <p>728 Collaborative helps organizations and communities thrive through leadership development, workforce innovation, and sustainable growth.</p>
          <Link className="button button-primary" href="#founder">Schedule a Discovery Call</Link>
        </div>
      </section>

      <section className="about-story">
        <div className="container about-story-grid">
          <div className="about-collage" aria-label="Professional and community collaboration visual">
            <div className="collage-card collage-large">
              <span>Leadership</span>
            </div>
            <div className="collage-card">
              <span>Workforce</span>
            </div>
            <div className="collage-card">
              <span>Community</span>
            </div>
          </div>
          <div>
            <p className="eyebrow">Company Story</p>
            <h2>Change begins with people.</h2>
            <p className="large">Founded in 2026, 728 Collaborative was built on the belief that lasting change starts with people. We strengthen leadership, improve workplace culture, and design systems that drive better outcomes for organizations and families alike.</p>
            <div className="highlight-list">
              {storyHighlights.map(([title, text]) => (
                <article className="highlight-item" key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about-mission">
        <div className="container">
          <div className="mission-card-grid">
            <article className="mission-card">
              <span className="mission-icon" aria-hidden="true">01</span>
              <p className="eyebrow">Mission</p>
              <h2>Empower professionals and organizations.</h2>
              <p>We empower professionals and organizations through consulting, training, and workforce development that create lasting community impact.</p>
            </article>
            <article className="mission-card">
              <span className="mission-icon" aria-hidden="true">02</span>
              <p className="eyebrow">Vision</p>
              <h2>Build stronger futures through collaboration.</h2>
              <p>To be a trusted partner in building stronger futures through collaboration, innovation, and sustainable solutions.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <p className="eyebrow">Values</p>
          <h2>Principles that guide the work.</h2>
          <div className="values-rail" aria-label="728 Collaborative values">
            {values.map(([title, text]) => (
              <article className="value-chip" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="founder">
        <div className="container split">
          <div className="portrait-placeholder">Approved founder headshot pending</div>
          <div>
            <p className="eyebrow">Founder & Principal Consultant</p>
            <h2>{company.founder}</h2>
            <p>Tatyana Lance brings a multidisciplinary perspective across social work, professional learning, leadership, workforce development, human services, healthcare-adjacent systems, and organizational support. Her credentials are presented accurately and do not imply services beyond the firm’s stated non-clinical scope.</p>
            <p>The website is structured for future team growth, including additional consultants, trainers, facilitators, advisors, and support professionals as the firm expands.</p>
            <Link className="button button-primary" href="/contact">Schedule a Consultation</Link>
          </div>
        </div>
      </section>
    </>
  );
}
