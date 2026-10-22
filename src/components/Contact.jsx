import { useState, useEffect } from "react"
import "./Contact.css"

const OWNER_EMAIL = "info.ibrahimolamideismail@gmail.com"
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

export default function Contact() {
  const [status, setStatus] = useState("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  useEffect(() => {
    if (!showSuccessModal) return undefined

    const onKeyDown = (event) => {
      if (event.key === "Escape") setShowSuccessModal(false)
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKeyDown)

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [showSuccessModal])

  function closeSuccessModal() {
    setShowSuccessModal(false)
    setStatus("idle")
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus("sending")
    setErrorMessage("")

    if (!ACCESS_KEY) {
      setStatus("error")
      setErrorMessage(
        "Form is not connected yet. Add your Web3Forms access key to .env (see .env.example).",
      )
      return
    }

    const form = event.currentTarget
    const data = new FormData(form)
    data.append("access_key", ACCESS_KEY)
    data.append("subject", "New inquiry from IOS Global Solutions website")
    data.append("from_name", "IOS Global Solutions Contact Form")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      })
      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Something went wrong. Please try again.")
      }

      form.reset()
      setStatus("success")
      setShowSuccessModal(true)
    } catch (error) {
      setStatus("error")
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Could not send your message. Please email us directly.",
      )
    }
  }

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
            <a href={`mailto:${OWNER_EMAIL}`} className="contact__email">
              {OWNER_EMAIL}
            </a>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <input
              type="checkbox"
              name="botcheck"
              className="contact__honeypot"
              tabIndex={-1}
              autoComplete="off"
            />

            <label className="contact__field">
              <span className="contact__label">Name</span>
              <input
                type="text"
                name="name"
                className="contact__input"
                placeholder="Your name"
                required
                disabled={status === "sending"}
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
                disabled={status === "sending"}
              />
            </label>

            <label className="contact__field">
              <span className="contact__label">Store URL</span>
              <input
                type="url"
                name="store"
                className="contact__input"
                placeholder="https://yourstore.com"
                disabled={status === "sending"}
              />
            </label>

            <div className="contact__field">
              <span className="contact__label">Project Budget</span>
              <div className="contact__budget">
                <label className="contact__budget-currency" htmlFor="currency">
                  <span className="contact__sr-only">Currency</span>
                  <select
                    id="currency"
                    name="currency"
                    className="contact__select"
                    defaultValue="USD"
                    disabled={status === "sending"}
                  >
                    <option value="USD">USD $</option>
                    <option value="CAD">CAD $</option>
                    <option value="GBP">GBP £</option>
                    <option value="EUR">EUR €</option>
                  </select>
                </label>
                <input
                  type="text"
                  name="budget"
                  className="contact__input contact__input--budget"
                  placeholder="e.g. 2,500 or Negotiable"
                  disabled={status === "sending"}
                />
              </div>
            </div>

            <label className="contact__field">
              <span className="contact__label">How can we help?</span>
              <textarea
                name="message"
                className="contact__textarea"
                rows={4}
                placeholder="Briefly describe your project or challenge"
                required
                disabled={status === "sending"}
              />
            </label>

            {status === "error" && (
              <p className="contact__status contact__status--error" role="alert">
                {errorMessage}{" "}
                <a href={`mailto:${OWNER_EMAIL}`}>Email us directly</a>
              </p>
            )}

            <button
              type="submit"
              className="contact__submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending…" : "Send Message →"}
            </button>
          </form>
        </div>
      </div>

      {showSuccessModal && (
        <div
          className="contact-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
          onClick={closeSuccessModal}
        >
          <div
            className="contact-modal__card"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="contact-modal__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.5" />
                <path
                  d="M7 12.5l3.2 3.2L17 8.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="contact-modal__eyebrow">Message received</p>
            <h3 id="contact-modal-title" className="contact-modal__title">
              Thanks for reaching out
            </h3>
            <p className="contact-modal__text">
              Your inquiry is on its way to our team. We&apos;ll review the
              details and reply with a clear next step soon.
            </p>
            <button
              type="button"
              className="contact-modal__button"
              onClick={closeSuccessModal}
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
