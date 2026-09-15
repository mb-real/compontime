import { company } from "../data/company"

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container about-grid">
        <div className="section-heading">
          <p className="eyebrow">درباره شرکت</p>

          <h2>
            تکنولوژی وقتی ارزشمند است که یک مسئله واقعی را حل کند.
          </h2>
        </div>

        <div className="about-copy">
          <p className="lead">
            {company.description}
          </p>

          <p>
            هدف ما فقط تحویل یک محصول یا اجرای یک پروژه
            نیست؛ تلاش می‌کنیم راهکاری بسازیم که در عمل
            قابل اتکا باشد، رشد کند و برای مشتری ارزش ایجاد
            کند.
          </p>

          <div className="about-signature">
            <span className="signature-line" />
            <span>
              از ایده تا نتیجه، کنار شما هستیم.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
