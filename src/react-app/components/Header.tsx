import { useState } from "react"
import { company } from "../data/company"

function Header() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a
          className="brand"
          href="#top"
          onClick={close}
          aria-label={company.name}
        >
          <span className="brand-mark">{company.shortName}</span>
          <span className="brand-name">{company.name}</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label="باز کردن منو"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`main-nav ${open ? "is-open" : ""}`}>
          <a href="#about" onClick={close}>
            درباره ما
          </a>

          <a href="#services" onClick={close}>
            خدمات
          </a>

          <a href="#projects" onClick={close}>
            پروژه‌ها
          </a>

          <a href="#process" onClick={close}>
            فرآیند همکاری
          </a>

          <a
            className="nav-cta"
            href="#contact"
            onClick={close}
          >
            تماس با ما
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
