import logo from "../assets/IOS.png"
import "./Footer.css"

export default function Footer() {
  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Results", href: "#results" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#hero" className="footer__logo">
              <img
                src={logo}
                alt="IOS Global Solutions"
                className="footer__logo-img"
              />
            </a>
            <p className="footer__tagline">
              Shopify Growth &amp; Marketing Partners
            </p>
          </div>

          <nav className="footer__nav" aria-label="Footer">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="footer__link">
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            © {new Date().getFullYear()} IOS Global Solutions Ltd. All rights
            reserved.
          </p>
          <a
            href="mailto:info.ibrahimolamideismail@gmail.com"
            className="footer__email"
          >
            info.ibrahimolamideismail@gmail.com
          </a>
        </div>
      </div>
    </footer>
  )
}
