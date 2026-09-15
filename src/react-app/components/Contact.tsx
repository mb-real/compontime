import { company } from "../data/company"

function Contact() {
  return (
    <section
      className="section contact-section"
      id="contact"
    >
      <div className="container contact-box">
        <div className="contact-copy">
          <p className="eyebrow">
            تماس با ما
          </p>

          <h2>
            برای پروژه بعدی آماده‌ایم.
          </h2>

          <p>
            درباره ایده، نیاز یا پروژه‌تان با ما صحبت
            کنید. اولین گفتگو برای شناخت مسئله و بررسی
            مسیر همکاری است.
          </p>

          <a
            className="button button-primary"
            href={`mailto:${company.contact.email}`}
          >
            ارسال ایمیل
            <span>←</span>
          </a>
        </div>

        <div className="contact-details">
          <a
            href={`tel:${company.contact.phone}`}
          >
            <span>تلفن</span>
            <strong>
              {company.contact.phone}
            </strong>
          </a>

          <a
            href={`mailto:${company.contact.email}`}
          >
            <span>ایمیل</span>
            <strong>
              {company.contact.email}
            </strong>
          </a>

          <div>
            <span>آدرس</span>
            <strong>
              {company.contact.address}
            </strong>
          </div>

          <div>
            <span>ساعات کاری</span>
            <strong>
              {company.contact.hours}
            </strong>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
