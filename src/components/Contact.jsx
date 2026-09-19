import "./Contact.css"

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <div className="contact__grid">
          <div className="contact__intro">
            <p className="contact__eyebrow">Contact</p>
            <h2 className="contact__title">
              Let&apos;s Grow Your
              <br />
              <em className="contact__title-muted">Shopify Store</em>
            </h2>
            <p className="contact__lede">
              Tell us about your store and goals. We&apos;ll come back with a
              clear next step — no fluff, just a practical path forward.
            </p>
            <a
              href="mailto:info.ibrahimolamideismail@gmail.com"
              className="contact__email"
            >
              info.ibrahimolamideismail@gmail.com
            </a>
          </div>

          <form
            className="contact__form"
            action="mailto:info.ibrahimolamideismail@gmail.com"
            method="post"
            encType="text/plain"
          >
            <label className="contact__field">
              <span className="contact__label">Name</span>
              <input
                type="text"
                name="name"
                className="contact__input"
                placeholder="Your name"
                required
              />
            </label>

            <label className="contact__field">
              <span className="contact__label">Email</span>
              <input
                type="email"
                name="email"
                className="contact__input"
                placeholder="you@company.com"
                required
              />
            </label>

            <label className="contact__field">
              <span className="contact__label">Store URL</span>
              <input
                type="url"
                name="store"
                className="contact__input"
                placeholder="https://yourstore.com"
              />
            </label>

            <label className="contact__field">
              <span className="contact__label">How can we help?</span>
              <textarea
                name="message"
                className="contact__textarea"
                rows={4}
                placeholder="Briefly describe your project or challenge"
                required
              />
            </label>

            <button type="submit" className="contact__submit">
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
