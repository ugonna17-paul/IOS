import "./Hero.css"

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "50+", label: "Projects Delivered" },
  { value: "↑40%", label: "Avg Revenue Lift" },
]

const metrics = [
  { label: "Conversion Rate", value: "3.2%", pct: 65 },
  { label: "Avg. Order Value", value: "$87", pct: 78 },
  { label: "Monthly Sessions", value: "24k", pct: 48 },
]

const chartBars = [30, 42, 35, 58, 52, 70, 88]

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__container">
        <div className="hero__grid">
          <div className="hero__content">
            <div>
              <h1 className="hero__headline">
                We Build
                <br />
                <em className="hero__headline-accent">Shopify</em>
                <br />
                Brands
                <br />
                <span className="hero__headline-muted">That Scale.</span>
              </h1>
            </div>

            <p className="hero__lede">
              IOS Global Solutions helps online brands grow with Shopify
              development, conversion optimization, paid ads, SEO, and clear
              marketing strategy—built for measurable revenue, not vanity metrics.
            </p>

            <div className="hero__ctas">
              <a href="#work" className="hero__cta hero__cta--primary">
                View Our Work
              </a>
              <a href="#contact" className="hero__cta hero__cta--secondary">
                Start a Project
              </a>
            </div>

            <div className="hero__stats">
              {stats.map(({ value, label }, i) => (
                <div key={label} className="hero__stat">
                  {i > 0 && <div className="hero__stat-divider" />}
                  <div>
                    <p className="hero__stat-value">{value}</p>
                    <p className="hero__stat-label">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__card hero__card--chart">
              <div className="hero__card-body">
                <p className="hero__card-kicker">Revenue Growth</p>
                <div className="hero__chart">
                  {chartBars.map((h, i) => (
                    <div
                      key={i}
                      className={`hero__chart-bar${i === chartBars.length - 1 ? " hero__chart-bar--active" : ""}`}
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
                <p className="hero__card-stat">
                  +42%{" "}
                  <span className="hero__card-stat-note">vs last year</span>
                </p>
              </div>
            </div>

            <div className="hero__card hero__card--metrics">
              <div className="hero__card-accent-bar" />
              <div className="hero__card-body">
                <p className="hero__card-kicker hero__card-kicker--emerald">
                  Store Performance
                </p>
                <div className="hero__metrics">
                  {metrics.map(({ label, value, pct }) => (
                    <div key={label} className="hero__metric">
                      <div className="hero__metric-row">
                        <span className="hero__metric-label">{label}</span>
                        <span className="hero__metric-value">{value}</span>
                      </div>
                      <div className="hero__metric-track">
                        <div
                          className="hero__metric-fill"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="hero__metric-footer">
                  <span className="hero__pill">CRO ↑ 23%</span>
                  <span className="hero__metric-footnote">past 30 days</span>
                </div>
              </div>
            </div>

            <div className="hero__card hero__card--traffic">
              <div className="hero__card-body">
                <p className="hero__card-kicker hero__card-kicker--pale">
                  Organic Traffic
                </p>
                <p className="hero__traffic-value">↑ 187%</p>
                <p className="hero__traffic-note">SEO — 6 month campaign</p>
              </div>
              <div className="hero__traffic-bars">
                {[4, 6, 10].map((h, i) => (
                  <div
                    key={i}
                    className="hero__traffic-bar"
                    style={{ height: `${h}px` }}
                  />
                ))}
              </div>
            </div>

            <div className="hero__card hero__card--roas">
              <div className="hero__card-body hero__card-body--compact">
                <p className="hero__roas-label">Meta ROAS</p>
                <p className="hero__roas-value">4.8×</p>
                <p className="hero__roas-note">↑ Paid Ads</p>
              </div>
            </div>

            <div className="hero__float-badge">
              <span className="hero__badge-dot" />
              <span className="hero__float-badge-text">
                Shopify Growth Partners
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
