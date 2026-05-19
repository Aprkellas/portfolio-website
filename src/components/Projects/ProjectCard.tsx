export interface ProjectData {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  placeholder?: boolean;
}

interface ProjectCardProps {
  project: ProjectData;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className={`project-card${project.placeholder ? " project-card--placeholder" : ""}`}>
      <span className="project-card__badge">
        {project.placeholder ? "// to-be-added" : "// project"}
      </span>

      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__desc">{project.description}</p>

      {project.tags.length > 0 && (
        <div className="project-card__tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-card__tag">
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="project-card__links">
        {project.placeholder ? (
          <>
            <span className="project-card__link">GitHub ↗</span>
            <span className="project-card__link">Live ↗</span>
          </>
        ) : (
          <>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                className="project-card__link"
                target="_blank"
                rel="noreferrer"
                style={{ opacity: 1, cursor: "pointer" }}
              >
                GitHub ↗
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                className="project-card__link"
                target="_blank"
                rel="noreferrer"
                style={{ opacity: 1, cursor: "pointer" }}
              >
                Live ↗
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
}
