import "./Services.css"

const services = [
  {
    num: "01",
    title: "Shopify Store Design & Revamp",
    desc: "Creating clean, trustworthy storefronts designed around usability and conversion.",
    variant: "plain",
  },
  {
    num: "02",
    title: "Conversion Rate Optimization",
    desc: "Identifying friction points and improving the customer journey to increase conversions.",
    variant: "accent-stripe",
  },
  {
    num: "03",
    title: "Product & Collection Optimization",
    desc: "Improving product pages, collections, merchandising and store structure.",
    variant: "tab",
  },
  {
    num: "04",
    title: "Shopify SEO",
    desc: "Technical and on-page optimization designed to improve visibility and organic growth.",
    variant: "double-border",
  },
  {
    num: "05",
    title: "Paid Advertising",
    desc: "Meta, Google and TikTok advertising strategies focused on targeted traffic and sales.",
    variant: "folded",
  },
  {
    num: "06",
    title: "Marketing & Growth Strategy",
    desc: "Funnels, retargeting, customer retention and sustainable growth strategies.",
    variant: "dark-wide",
  },
]

function ServiceCard({ num, title, desc, variant }) {
  if (variant === "plain") {
    return (
      <div className="service-card service-card--plain">
        <div className="service-card__content">
          <p className="service-card__num">{num}</p>
          <h3 className="service-card__title">{title}</h3>
          <p className="service-card__desc">{desc}</p>
        </div>
        <span className="service-card__watermark" aria-hidden="true">
          {num}
        </span>
      </div>
    )
  }

  if (variant === "accent-stripe") {
    return (
      <div className="service-card service-card--stripe">
        <div className="service-card__stripe" />
        <div className="service-card__inner">
          <p className="service-card__num service-card__num--emerald">{num}</p>
          <h3 className="service-card__title">{title}</h3>
          <p className="service-card__desc">{desc}</p>
          <span className="service-card__watermark" aria-hidden="true">
            {num}
          </span>
        </div>
      </div>
    )
  }

  if (variant === "tab") {
    return (
      <div className="service-card service-card--tab">
        <div className="service-card__tab">{num}</div>
        <div className="service-card__tab-body">
          <div>
            <h3 className="service-card__title">{title}</h3>
            <p className="service-card__desc">{desc}</p>
          </div>
          <span className="service-card__watermark" aria-hidden="true">
            {num}
          </span>
        </div>
      </div>
    )
  }

  if (variant === "double-border") {
    return (
      <div className="service-card service-card--double">
        <div className="service-card__frame" />
        <div className="service-card__content">
          <p className="service-card__num">{num}</p>
          <h3 className="service-card__title">{title}</h3>
          <p className="service-card__desc">{desc}</p>
        </div>
        <span className="service-card__watermark" aria-hidden="true">
          {num}
        </span>
      </div>
    )
  }

  if (variant === "folded") {
    return (
      <div className="service-card service-card--folded">
        <div className="service-card__folded-body">
          <p className="service-card__num">{num}</p>
          <h3 className="service-card__title">{title}</h3>
          <p className="service-card__desc">{desc}</p>
          <span className="service-card__watermark" aria-hidden="true">
            {num}
          </span>
        </div>
        <div className="service-card__fold" aria-hidden="true" />
      </div>
    )
  }

  return (
    <div className="service-card service-card--dark">
      <div className="service-card__dark-row">
        <div className="service-card__dark-main">
          <span className="service-card__dark-watermark" aria-hidden="true">
            {num}
          </span>
          <div className="service-card__dark-copy">
            <p className="service-card__num service-card__num--mid">{num}</p>
            <h3 className="service-card__title service-card__title--cream">
              {title}
            </h3>
            <p className="service-card__desc service-card__desc--cream">{desc}</p>
          </div>
        </div>
        <a href="#contact" className="service-card__cta">
          Learn More →
        </a>
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="services__container">
        <div className="services__header">
          <p className="services__eyebrow">Services</p>
          <h2 className="services__title">
            How We Help
            <br />
            <em className="services__title-muted">Brands Grow</em>
          </h2>
        </div>

        <div className="services__grid">
          {services.map((service) => (
            <div
              key={service.num}
              className={`services__cell services__cell--${service.variant}`}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
