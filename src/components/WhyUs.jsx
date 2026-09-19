import "./WhyUs.css"

const points = [
  {
    title: "Shopify-Focused Expertise",
    desc: "We work exclusively with Shopify stores. Deep platform knowledge means faster, smarter solutions.",
    icon: "◈",
    rotation: -1.5,
    tone: "card",
    offset: "none",
  },
  {
    title: "Conversion-First Thinking",
    desc: "Every design and strategy decision is measured against one question: will it improve conversions?",
    icon: "◎",
    rotation: 1,
    tone: "emerald-pale",
    offset: "lg",
  },
  {
    title: "Marketing + Store Strategy Combined",
    desc: "Rare combination of Shopify technical skills and performance marketing expertise under one engagement.",
    icon: "◐",
    rotation: -1,
    tone: "card",
    offset: "none",
  },
  {
    title: "Data-Driven Optimization",
    desc: "No guesswork. Every recommendation is rooted in your analytics, customer behaviour and revenue data.",
    icon: "◉",
    rotation: 2,
    tone: "card",
    offset: "md",
  },
  {
    title: "Practical, Business-Focused",
    desc: "We focus on what moves the needle for your business — not vanity metrics or theoretical best practices.",
    icon: "◇",
    rotation: -0.5,
    tone: "warm-muted",
    offset: "neg",
  },
]

export default function WhyUs() {
  return (
    <section id="why" className="why">
      <div className="why__container">
        <div className="why__grid">
          <div className="why__statement">
            <p className="why__eyebrow">Why Work With Us</p>
            <h2 className="why__title">
              Strategy That
              <br />
              <em className="why__title-muted">Moves Revenue,</em>
              <br />
              Not Just Traffic.
            </h2>
            <p className="why__lede">
              Most Shopify consultants specialise in one thing. We bring together
              store design, CRO, SEO and paid acquisition into a single, coherent
              growth system.
            </p>
            <a href="#contact" className="why__cta">
              Start a Conversation →
            </a>
          </div>

          <div className="why__points">
            {points.map((point) => (
              <div
                key={point.title}
                className={`why-card why-card--${point.tone} why-card--offset-${point.offset}`}
                style={{ transform: `rotate(${point.rotation}deg)` }}
              >
                <div className="why-card__row">
                  <span className="why-card__icon" aria-hidden="true">
                    {point.icon}
                  </span>
                  <div>
                    <h3 className="why-card__title">{point.title}</h3>
                    <p className="why-card__desc">{point.desc}</p>
                  </div>
                </div>
                <div className="why-card__bar" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
