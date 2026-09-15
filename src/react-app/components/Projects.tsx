import { company } from "../data/company"

function Projects() {
  return (
    <section
      className="section projects-section"
      id="projects"
    >
      <div className="container">
        <div className="section-topline">
          <div className="section-heading">
            <p className="eyebrow">نمونه‌کارها</p>

            <h2>
              چند نمونه از مسیرهایی که ساخته‌ایم.
            </h2>
          </div>

          <p className="section-intro">
            تصاویر و اطلاعات این بخش نمونه هستند و بعداً
            می‌توانی پروژه‌های واقعی شرکت را جایگزین آن‌ها
            کنی.
          </p>
        </div>

        <div className="projects-grid">
          {company.projects.map((project, index) => (
            <article
              className={`project-card ${
                index === 0 ? "project-featured" : ""
              }`}
              key={project.title}
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
              />

              <div className="project-overlay">
                <span>{project.category}</span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
