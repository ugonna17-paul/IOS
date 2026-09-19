import vid1 from "../assets/Vid1.mp4"
import vid2 from "../assets/vid2.mp4"
import vid3 from "../assets/Vid3.mp4"
import "./Work.css"

const projects = [
  {
    num: "PROJECT 01",
    name: "RBT Concept Store",
    industry: "Pet Care / Shopify Store",
    service: "Store Design & Optimization",
    desc: "A Shopify storefront for pet accessories and everyday essentials — built for clear browsing, strong product presentation, and a smooth path from discovery to checkout.",
    tags: ["Shopify", "UX", "Merchandising"],
    video: vid1,
    url: "https://rbtconceptstore.com/",
    layout: "wide",
  },
  {
    num: "PROJECT 02",
    name: "WellVanna",
    industry: "Wellness & Lifestyle",
    service: "Shopify Store Build & Growth",
    desc: "A wellness and everyday essentials brand store covering fitness, nutrition, and electronics — structured for collections, conversion, and a clean shopping experience.",
    tags: ["Shopify", "Collections", "CRO"],
    video: vid2,
    url: "https://wellvanna.org/",
    layout: "layered",
  },
  {
    num: "PROJECT 03",
    name: "FashionNay",
    industry: "Kids Fashion / E-commerce",
    service: "Store Design & Merchandising",
    desc: "A kids fashion Shopify store focused on clothing, shoes, and accessories — designed for visual merchandising, easy navigation, and confident purchase decisions for parents.",
    tags: ["Shopify", "Fashion", "UX"],
    video: vid3,
    url: "https://fashionnay.com/",
    layout: "stripe",
  },
]

function ProjectVideo({ src, title }) {
  return (
    <video
      className="work-card__video"
      src={src}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      title={title}
    />
  )
}

export default function Work() {
  const [p1, p2, p3] = projects

  return (
    <section id="work" className="work">
      <div className="work__container">
        <div className="work__header">
          <div>
            <p className="work__eyebrow">Case Studies</p>
            <h2 className="work__title">
              Selected
              <br />
              <em className="work__title-muted">Work</em>
            </h2>
          </div>
          <a href="#contact" className="work__all-link">
            Start a similar project →
          </a>
        </div>

        <div className="work__list">
          <article className="work-card work-card--wide">
            <div className="work-card__wide-grid">
              <div className="work-card__body">
                <div>
                  <div className="work-card__top">
                    <div>
                      <p className="work-card__num">{p1.num}</p>
                      <h3 className="work-card__name">{p1.name}</h3>
                    </div>
                  </div>
                  <p className="work-card__meta">
                    {p1.industry} — {p1.service}
                  </p>
                  <p className="work-card__desc">{p1.desc}</p>
                </div>
                <div className="work-card__footer">
                  <div className="work-card__tags">
                    {p1.tags.map((t) => (
                      <span key={t} className="work-card__tag">
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={p1.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-card__link"
                  >
                    Visit Store <span>→</span>
                  </a>
                </div>
              </div>

              <div className="work-card__media">
                <ProjectVideo src={p1.video} title={p1.name} />
              </div>
            </div>
          </article>

          <div className="work__pair">
            <article className="work-card work-card--layered">
              <div className="work-card__shadow" />
              <div className="work-card__layered-main">
                <div className="work-card__media work-card__media--compact">
                  <ProjectVideo src={p2.video} title={p2.name} />
                </div>
                <div className="work-card__panel">
                  <div className="work-card__top">
                    <div>
                      <p className="work-card__num">{p2.num}</p>
                      <h3 className="work-card__name work-card__name--sm">
                        {p2.name}
                      </h3>
                    </div>
                  </div>
                  <p className="work-card__meta">{p2.industry}</p>
                  <p className="work-card__desc work-card__desc--tight">
                    {p2.desc}
                  </p>
                  <div className="work-card__footer">
                    <div className="work-card__tags">
                      {p2.tags.map((t) => (
                        <span key={t} className="work-card__tag work-card__tag--sm">
                          {t}
                        </span>
                      ))}
                    </div>
                    <a
                      href={p2.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="work-card__link"
                    >
                      Visit Store →
                    </a>
                  </div>
                </div>
              </div>
            </article>

            <article className="work-card work-card--stripe">
              <div className="work-card__stripe" />
              <div className="work-card__stripe-main">
                <div className="work-card__media work-card__media--compact">
                  <ProjectVideo src={p3.video} title={p3.name} />
                </div>
                <div className="work-card__panel work-card__panel--grow">
                  <div>
                    <div className="work-card__top">
                      <div>
                        <p className="work-card__num">{p3.num}</p>
                        <h3 className="work-card__name work-card__name--sm">
                          {p3.name}
                        </h3>
                      </div>
                    </div>
                    <p className="work-card__meta work-card__meta--emerald">
                      {p3.industry}
                    </p>
                    <p className="work-card__desc">{p3.desc}</p>
                  </div>
                  <div className="work-card__footer">
                    <div className="work-card__tags">
                      {p3.tags.map((t) => (
                        <span key={t} className="work-card__tag work-card__tag--sm">
                          {t}
                        </span>
                      ))}
                    </div>
                    <a
                      href={p3.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="work-card__link"
                    >
                      Visit Store →
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
