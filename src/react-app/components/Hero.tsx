import { company } from "../data/company"

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid" />

      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-dot" />
            {company.eyebrow}
          </p>

          <h1>{company.hero.title}</h1>

          <p className="hero-description">
            {company.hero.description}
          </p>

          <div className="hero-actions">
            <a
              className="button button-primary"
              href="#contact"
            >
              {company.hero.primaryAction}
              <span>←</span>
            </a>

            <a
              className="button button-ghost"
              href="#about"
            >
              {company.hero.secondaryAction}
            </a>
          </div>
        </div>

        <div
          className="hero-visual"
          aria-hidden="true"
        >
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />

          <div className="visual-core">
            <span>{company.shortName}</span>
          </div>

          <div className="visual-card card-top">
            <small>تمرکز</small>
            <strong>راهکارهای واقعی</strong>
          </div>

          <div className="visual-card card-bottom">
            <small>رویکرد</small>
            <strong>دقیق • شفاف • ماندگار</strong>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
