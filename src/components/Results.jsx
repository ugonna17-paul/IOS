import "./Results.css"

const expertise = [
  {
    category: "Shopify",
    sub: "Store Strategy",
    metric: "50+",
    metricLabel: "stores built & optimized",
    rotation: -2,
    translateY: -8,
    tone: "card",
  },
  {
    category: "CRO",
    sub: "Conversion Optimization",
    metric: "+35%",
    metricLabel: "avg conversion lift",
    rotation: 1.5,
    translateY: 6,
    tone: "emerald",
  },
  {
    category: "SEO",
    sub: "Organic Growth",
    metric: "+180%",
    metricLabel: "avg organic traffic",
    rotation: -1,
    translateY: -4,
    tone: "card",
  },
  {
    category: "ADS",
    sub: "Paid Acquisition",
    metric: "4.5×",
    metricLabel: "average ROAS achieved",
    rotation: 2,
    translateY: 8,
    tone: "charcoal",
  },
  {
    category: "RETENTION",
    sub: "Customer Growth",
    metric: "+50%",
    metricLabel: "repeat purchase rate",
    rotation: -1.5,
    translateY: -6,
    tone: "card",
  },
  {
    category: "FUNNELS",
    sub: "Sales Strategy",
    metric: "3×",
    metricLabel: "funnel revenue multiplier",
    rotation: 1,
    translateY: 4,
    tone: "off-white",
  },
]

export default function Results() {
  return (
    <section id="results" className="results">
      <div className="results__container">
        <div className="results__header">
          <div>
            <p className="results__eyebrow">Expertise</p>
            <h2 className="results__title">
              Where We
              <br />
              <em className="results__title-muted">Deliver Results</em>
            </h2>
          </div>
          <div className="results__header-copy">
            <p>
              Every metric below reflects real outcomes from client work.
              They&apos;re directional benchmarks — your results will depend on
              your store&apos;s starting point and goals.
            </p>
          </div>
        </div>

        <div className="results__grid">
          {expertise.map((item) => {
            const isDark = item.tone === "emerald" || item.tone === "charcoal"

            return (
              <div
                key={item.category}
                className={`results-card results-card--${item.tone}`}
                style={{
                  transform: `rotate(${item.rotation}deg) translateY(${item.translateY}px)`,
                }}
              >
                <p className="results-card__category">{item.category}</p>
                <p className="results-card__sub">{item.sub}</p>
                <p className="results-card__metric">{item.metric}</p>
                <p className="results-card__label">{item.metricLabel}</p>
                <div
                  className={`results-card__bar${isDark ? " results-card__bar--light" : ""}`}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
