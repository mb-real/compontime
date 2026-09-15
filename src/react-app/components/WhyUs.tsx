import { company } from "../data/company"

function WhyUs() {
  return (
    <section className="section values-section">
      <div className="container values-grid">
        <div className="values-intro">
          <p className="eyebrow">چرا ما</p>

          <h2>
            اعتماد از کیفیت کار شروع می‌شود.
          </h2>

          <p>
            چهار اصل ساده، پایه تصمیم‌گیری و شیوه همکاری
            ما با مشتریان هستند.
          </p>
        </div>

        <div className="values-list">
          {company.values.map((value, index) => (
            <div
              className="value-row"
              key={value.title}
            >
              <span>
                0{index + 1}
              </span>

              <div>
                <h3>{value.title}</h3>

                <p>{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUs
