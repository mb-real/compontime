import { company } from "../data/company"

function Stats() {
  return (
    <section className="stats-section">
      <div className="container stats-grid">
        {company.stats.map((stat) => (
          <div className="stat" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats
