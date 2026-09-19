import "./Process.css"

const steps = [
  {
    num: "01",
    phase: "Audit",
    desc: "Understand the store, customers and current performance. Review analytics, identify friction points and map the opportunity.",
    tone: "card",
  },
  {
    num: "02",
    phase: "Optimize",
    desc: "Fix UX, product pages, technical issues and conversion friction. Every change is grounded in data, not assumption.",
    tone: "emerald",
  },
  {
    num: "03",
    phase: "Attract",
    desc: "Build targeted acquisition through paid and organic channels. Right traffic at the right time with the right message.",
    tone: "charcoal",
  },
  {
    num: "04",
    phase: "Grow",
    desc: "Improve retention, funnels and long-term marketing performance. Turn first-time buyers into repeat customers.",
    tone: "off-white",
  },
]

const rotations = [-2, 1.5, -1, 2]

export default function Process() {
  return (
    <section id="process" className="process">
      <div className="process__container">
        <div className="process__header">
          <p className="process__eyebrow">How It Works</p>
          <h2 className="process__title">
            From Store Problems
            <br />
            to <em className="process__title-muted">Sustainable Growth</em>
          </h2>
        </div>

        <div className="process__grid">
          <div className="process__line" aria-hidden="true" />

          {steps.map((step, i) => {
            const isDark = step.tone === "emerald" || step.tone === "charcoal"

            return (
              <div key={step.num} className="process__col">
                <div
                  className={`process-card process-card--${step.tone}`}
                  style={{ transform: `rotate(${rotations[i]}deg)` }}
                >
                  <span className="process-card__watermark" aria-hidden="true">
                    {step.num}
                  </span>

                  <div className="process-card__dot-wrap">
                    <div className="process-card__dot">{step.num}</div>
                  </div>

                  <p className="process-card__phase-label">Phase {step.num}</p>
                  <h3 className="process-card__phase">{step.phase}</h3>
                  <p className="process-card__desc">{step.desc}</p>

                  <div
                    className={`process-card__bar${isDark ? " process-card__bar--light" : ""}`}
                  />
                </div>

                {i < steps.length - 1 && (
                  <div className="process__connector" aria-hidden="true" />
                )}
              </div>
            )
          })}
        </div>

        <div className="process__cta">
          <a href="#contact" className="process__cta-link">
            <span>Ready to start your audit?</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
