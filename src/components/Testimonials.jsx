import vid1 from "../assets/vid1.mp4"
import vid2 from "../assets/vid2.mp4"
import vid3 from "../assets/Vid3.mp4"
import vid4 from "../assets/vid4.mp4"
import sales1 from "../assets/sales1.jpeg"
import sales2 from "../assets/sales2.jpeg"
import "./Testimonials.css"

const salesProof = [
  {
    type: "image",
    src: sales1,
    label: "Sales Snapshot 01",
    caption: "Live store performance",
  },
  {
    type: "image",
    src: sales2,
    label: "Sales Snapshot 02",
    caption: "Revenue & order proof",
  },
  {
    type: "video",
    src: vid1,
    label: "Sales Results",
    caption: "Results walkthrough",
  },
]

const reviews = [
  {
    src: vid2,
    label: "Client Review 01",
    caption: "What clients say about working with us",
  },
  {
    src: vid3,
    label: "Client Review 02",
    caption: "Real feedback from Shopify brand partners",
  },
  {
    src: vid4,
    label: "Client Review 03",
    caption: "Testimonial from a growth engagement",
  },
]

function MediaVideo({ src, title }) {
  return (
    <video
      className="testimonials__video"
      src={src}
      controls
      playsInline
      preload="metadata"
      title={title}
    />
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials__container">
        <div className="testimonials__header">
          <p className="testimonials__eyebrow">Social Proof</p>
          <h2 className="testimonials__title">
            Results &amp;
            <br />
            <em className="testimonials__title-muted">Client Reviews</em>
          </h2>
          <p className="testimonials__lede">
            Real sales proof from live stores, plus client testimonials that show
            how the work lands in practice.
          </p>
        </div>

        <div className="testimonials__block">
          <div className="testimonials__block-head">
            <p className="testimonials__kicker">Sales Proof</p>
            <h3 className="testimonials__block-title">Performance you can see</h3>
          </div>
          <div className="testimonials__sales-grid">
            {salesProof.map((item) => (
              <article key={item.label} className="testimonials-card">
                <div className="testimonials-card__media">
                  {item.type === "image" ? (
                    <img
                      src={item.src}
                      alt={item.label}
                      className="testimonials__image"
                    />
                  ) : (
                    <MediaVideo src={item.src} title={item.label} />
                  )}
                </div>
                <div className="testimonials-card__meta">
                  <p className="testimonials-card__label">{item.label}</p>
                  <p className="testimonials-card__caption">{item.caption}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="testimonials__block">
          <div className="testimonials__block-head">
            <p className="testimonials__kicker">Testimonials</p>
            <h3 className="testimonials__block-title">Reviews from partners</h3>
          </div>
          <div className="testimonials__reviews-grid">
            {reviews.map((item) => (
              <article key={item.label} className="testimonials-card">
                <div className="testimonials-card__media testimonials-card__media--review">
                  <MediaVideo src={item.src} title={item.label} />
                </div>
                <div className="testimonials-card__meta">
                  <p className="testimonials-card__label">{item.label}</p>
                  <p className="testimonials-card__caption">{item.caption}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
