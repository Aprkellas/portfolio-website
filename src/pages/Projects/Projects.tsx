import { useLang } from "../../context/LanguageContext.tsx";
import { ProjectsCarousel } from "../../components/Projects/ProjectsCarousel.tsx";
import "../../components/Projects/projects.css";

export function Projects() {
  const { t } = useLang();

  return (
    <section className="projects">
      <div className="projects__header">
        <h1 className="projects__title">{t.projects.title}</h1>
        <p className="projects__subtitle">{t.projects.subtitle}</p>
      </div>

      <ProjectsCarousel />
    </section>
  );
}
