export const articles = [
  {
    slug: "building-practical-leadership-development",
    title: "Building Leadership Development That Transfers Into Daily Practice",
    category: "Leadership",
    date: "2026-07-22",
    readTime: "5 min read",
    excerpt:
      "Leadership programs work best when they connect directly to communication habits, decision-making rhythms, and the real pressures managers face each week.",
    body: [
      "Effective leadership development is more than a training event. It is a structured learning process that helps leaders practice, reflect, and apply new behaviors in the environment where performance actually happens.",
      "We design leadership learning around the organization's goals, workforce needs, culture, and implementation capacity. The result is training that feels relevant instead of abstract."
    ]
  },
  {
    slug: "workforce-development-starts-with-systems",
    title: "Workforce Development Starts With the System Around the Workforce",
    category: "Workforce Development",
    date: "2026-07-22",
    readTime: "4 min read",
    excerpt:
      "Retention, engagement, and growth improve when organizations examine the structures that shape employee experience.",
    body: [
      "Workforce challenges are rarely solved by one isolated intervention. They are shaped by leadership expectations, role clarity, communication, learning access, policy, and the day-to-day systems employees move through.",
      "A practical workforce strategy identifies where people need stronger support and where the organization needs clearer structure."
    ]
  },
  {
    slug: "resource-navigation-as-community-support",
    title: "Resource Navigation as a Practical Form of Community Support",
    category: "Community Support",
    date: "2026-07-22",
    readTime: "4 min read",
    excerpt:
      "Families often need help understanding options, planning next steps, and connecting with services that match their situation.",
    body: [
      "Resource navigation is not clinical treatment. It is practical, organized support for people who are trying to understand systems, coordinate information, and make informed decisions.",
      "SW@Home focuses on helping individuals and families identify needs, prepare questions, understand resources, and move through transitions with more clarity."
    ]
  }
];

export const resources = [
  {
    slug: "capability-statement",
    title: "728 Collaborative Capability Statement",
    type: "PDF",
    category: "Government Contracting",
    description:
      "A launch-ready placeholder for the firm's capability statement. Replace with the final approved capability statement when identifiers and contracting details are confirmed.",
    href: "/downloads/728-service-graphic-changes.pdf",
    gated: false
  },
  {
    slug: "organizational-readiness-checklist",
    title: "Organizational Readiness Checklist",
    type: "Guide",
    category: "Organizational Strategy",
    description:
      "A practical planning resource for leaders preparing for consulting, training, strategic planning, or organizational assessment work.",
    href: "/resources/organizational-readiness-checklist",
    gated: true
  },
  {
    slug: "resource-navigation-planning-sheet",
    title: "Resource Navigation Planning Sheet",
    type: "Worksheet",
    category: "Community Support",
    description:
      "A non-clinical planning worksheet for families preparing questions, gathering documents, and organizing next steps before a support conversation.",
    href: "/resources/resource-navigation-planning-sheet",
    gated: true
  }
];

export const faqs: Record<string, Array<[string, string]>> = {
  general: [
    ["Do you work nationwide?", "Yes. Consulting and training can be delivered virtually nationwide. In-person services are available throughout South Carolina and North Carolina by appointment."],
    ["Is this a therapy practice?", "No. We provide non-clinical consulting, training, coordination, education, and support services. The company does not provide psychotherapy or crisis services through the website."],
    ["Can services be customized?", "Yes. Engagements are scoped around the client, audience, goals, timeline, and operating environment."]
  ],
  consulting: [
    ["How are consulting engagements priced?", "Pricing is scoped after a discovery conversation. Fixed prices are not listed because engagements vary by size, timeline, deliverables, and delivery format."],
    ["What deliverables can be included?", "Potential deliverables include assessments, strategy documents, facilitation plans, policies, process maps, implementation roadmaps, training materials, and advisory summaries."],
    ["Do you support retreats or facilitation?", "Yes. 728 Consulting can support strategic planning retreats, leadership sessions, stakeholder meetings, and project-based facilitation."]
  ],
  learning: [
    ["Are CEUs available?", "Continuing education information should be confirmed for each program. The website does not claim CEU approval or accreditation unless formally approved."],
    ["Can training be delivered on site?", "Yes. Training can be delivered virtually nationwide and in person throughout South Carolina and North Carolina by appointment."],
    ["Can a workshop be customized?", "Yes. Training can be tailored to the audience, organization, goals, industry, and delivery format."]
  ],
  sw: [
    ["Is SW@Home a crisis service?", "No. SW@Home is not an emergency or crisis-response service. For an immediate emergency, call 911. For mental-health crisis support in the United States, call or text 988."],
    ["What information should I submit through the form?", "Please provide only enough information for initial contact. Do not submit highly sensitive health, clinical, financial, or legal information through the standard web form."],
    ["Does SW@Home provide therapy?", "No. SW@Home provides non-clinical support, resource navigation, coordination, advocacy, education, and planning services."]
  ]
};
