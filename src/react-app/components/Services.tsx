import { company } from "../data/company"

function Services() {
  return (
    <section
      className="section services-section"
      id="services"
    >
      <div className="container">
        <div className="section-topline">
          <div className="section-heading">
            <p className="eyebrow">خدمات ما</p>

            <h2>
              از مسئله تا راهکار، یک مسیر کامل.
            </h2>
          </div>

          <p className="section-intro">
            خدمات ما به‌گونه‌ای طراحی شده‌اند که بتوانیم
            در هر مرحله‌ای از پروژه، ارزش مشخص و قابل
            اندازه‌گیری ایجاد کنیم.
          </p>
        </div>

        <div className="services-grid">
          {company.services.map((service) => (
            <article
              className="service-card"
              key={service.number}
            >
              <span className="service-number">
                {service.number}
              </span>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <span className="service-arrow">
                ↙
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
