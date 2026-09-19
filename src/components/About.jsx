import logo from "../assets/IOS.png"
import "./About.css"

const focusTags = ["Shopify", "CRO", "SEO", "Paid Ads", "Growth"]

const expertise = [
  "Shopify Store Development",
  "Conversion Rate Optimization",
  "Shopify SEO",
  "Paid Advertising (Meta, Google)",
  "Email & Retention Marketing",
  "Growth Strategy & Funnels",
]

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about__container">
        <div className="about__grid">
          <div className="about__visual">
            <div className="about__card about__card--back" />

            <div className="about__card about__card--brand">
              <div className="about__brand">
                <img
                  src={logo}
                  alt="IOS Global Solutions"
                  className="about__brand-logo"
                />
                <p className="about__brand-label">Global Solutions Ltd</p>
              </div>
            </div>

            <div className="about__card about__card--experience">
              <div className="about__card-accent" />
              <div className="about__card-body">
                <p className="about__kicker">Track Record</p>
                <div className="about__experience-list">
                  <div>
                    <p className="about__stat">5+</p>
                    <p className="about__stat-label">Years Experience</p>
                  </div>
                  <div className="about__divider" />
                  <div>
                    <p className="about__stat">50+</p>
                    <p className="about__stat-label">Stores Optimized</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="about__card about__card--focus">
              <div className="about__card-body">
                <p className="about__kicker about__kicker--light">Core Focus</p>
                <div className="about__tags">
                  {focusTags.map((tag) => (
                    <span key={tag} className="about__tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="about__content">
            <div>
              <p className="about__eyebrow">About Us</p>
              <h2 className="about__title">
                Shopify Strategy,
                <br />
                Not Just{" "}
                <em className="about__title-muted">Design.</em>
              </h2>
              <p className="about__lede">
                IOS Global Solutions helps Shopify brands turn underperforming
                stores into conversion-focused businesses. We work at the
                intersection of technical Shopify expertise, data-driven CRO,
                and practical growth marketing.
              </p>
            </div>

            <div className="about__copy">
              <p>
                We don&apos;t just make stores look better — we make them work
                better. Every recommendation is grounded in performance data and
                customer behaviour, not aesthetic preference alone.
              </p>
              <p>
                Whether it&apos;s a full store rebuild, a targeted CRO sprint, or
                a long-term growth partnership, we bring the same systematic
                thinking to every engagement.
              </p>
            </div>

            <div className="about__expertise">
              <p className="about__expertise-label">Areas of Expertise</p>
              <div className="about__expertise-grid">
                {expertise.map((area) => (
                  <div key={area} className="about__expertise-item">
                    <span className="about__expertise-dot" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <a href="#contact" className="about__link">
                Talk About Your Store
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
