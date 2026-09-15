import { company } from "../data/company"

function Process() {
  return (
    <section
      className="section process-section"
      id="process"
    >
      <div className="container">
        <div className="section-heading centered">
          <p className="eyebrow">
            فرآیند همکاری
          </p>

          <h2>
            شفاف از اولین گفتگو تا آخرین مرحله.
          </h2>
        </div>

        <div className="process-grid">
          {company.process.map((item) => (
            <div
              className="process-item"
              key={item.step}
            >
              <span className="process-step">
                {item.step}
              </span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
