import { useState, useEffect } from "react"
import logo from "../assets/IOS.png"
import "./Navbar.css"

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav className={`nav${isScrolled ? " nav--scrolled" : ""}`}>
      <div className="nav__inner">
        <a href="#hero" className="nav__logo">
          <img src={logo} alt="IOS" className="nav__logo-img" />
        </a>

        <div className="nav__links">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="nav__link">
              {link.label}
            </a>
          ))}
        </div>

        <a href="#contact" className="nav__cta">
          Start a Project
        </a>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`nav__hamburger${mobileOpen ? " nav__hamburger--open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span className="nav__hamburger-line" />
          <span className="nav__hamburger-line nav__hamburger-line--mid" />
          <span className="nav__hamburger-line" />
        </button>
      </div>

      <div className={`nav__mobile${mobileOpen ? " nav__mobile--open" : ""}`}>
        <div className="nav__mobile-inner">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="nav__mobile-link"
            >
              {link.label}
            </a>
          ))}
          <div className="nav__mobile-cta-wrap">
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="nav__mobile-cta"
            >
              Start a Project
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
