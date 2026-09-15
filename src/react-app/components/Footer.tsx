import { company } from "../data/company"

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div>
          <a
            className="brand footer-brand"
            href="#top"
          >
            <span className="brand-mark">
              {company.shortName}
            </span>

            <span className="brand-name">
              {company.name}
            </span>
          </a>

          <p>{company.tagline}</p>
        </div>

        <div className="footer-links">
          <a href="#about">درباره ما</a>
          <a href="#services">خدمات</a>
          <a href="#projects">پروژه‌ها</a>
          <a href="#contact">تماس</a>
        </div>

        <div className="social-links">
          <a
            href={company.social.linkedin}
            aria-label="LinkedIn"
          >
            in
          </a>

          <a
            href={company.social.instagram}
            aria-label="Instagram"
          >
            ig
          </a>

          <a
            href={company.social.telegram}
            aria-label="Telegram"
          >
            tg
          </a>

          <a
            href={company.social.whatsapp}
            aria-label="WhatsApp"
          >
            wa
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()}{" "}
          {company.name}. تمامی حقوق محفوظ است.
        </span>

        <a href="#top">
          بازگشت به بالا ↑
        </a>
      </div>
    </footer>
  )
}

export default Footer
