import "./professional.css";
import { useLang } from "../../../context/LanguageContext.tsx";

interface Skill {
  name: string;
  level: number; // 0–100
}

// Skill data is language-agnostic (names are proper nouns / universal)
const skillGroups: Skill[][] = [
  [
    { name: "C# / .NET (6-9)", level: 90 },
    { name: "TypeScript / JavaScript", level: 70 },
    { name: "React", level: 60 },
    { name: "Blazor / WPF", level: 80 },
    { name: "Python (Django, Flask)", level: 50 },
  ],
  [
    { name: "MySQL / SQL", level: 60 },
    { name: "MongoDB", level: 50 },
  ],
  [
    { name: "Git", level: 88 },
    { name: "Azure DevOps", level: 75 },
    { name: "Docker", level: 40 },
    { name: "Kubernetes", level: 30 },
    { name: "Shell Scripting", level: 55 },
  ],
];

function SkillBar({ skill }: { skill: Skill }) {
  const blocks = 20;
  const filled = Math.round((skill.level / 100) * blocks);

  return (
    <div className="skill-row">
      <span className="skill-name">{skill.name}</span>
      <div className="skill-bar" aria-label={`${skill.name}: ${skill.level}%`}>
        {Array.from({ length: blocks }).map((_, i) => (
          <div
            key={i}
            className={`skill-block ${i < filled ? "skill-block--filled" : "skill-block--empty"}`}
          />
        ))}
      </div>
      <span className="skill-level">{skill.level}</span>
    </div>
  );
}

function SkillGroup({ title, skills }: { title: string; skills: Skill[] }) {
  return (
    <div className="skill-group">
      <h3 className="skill-group__title">
        <span className="skill-group__comment">// </span>{title}
      </h3>
      {skills.map((s) => (
        <SkillBar key={s.name} skill={s} />
      ))}
    </div>
  );
}

export function Professional() {
  const { t } = useLang();
  const p = t.aboutme.professionalContent;

  return (
    <div className="editor professional">
      <h2 className="professional__heading">{p.heading}</h2>

      <div className="professional__layout">
        {/* Left column */}
        <div className="professional__left">
          <section className="professional__section">
            <h3 className="professional__section-title">
              <span className="skill-group__comment">// </span>{p.profileTitle}
            </h3>
            <p className="professional__bio">{p.profileBio}</p>
          </section>

          <section className="professional__section">
            <h3 className="professional__section-title">
              <span className="skill-group__comment">// </span>{p.qualificationsTitle}
            </h3>
            <ul className="professional__quals">
              {p.qualifications.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ul>
          </section>
        </div>

        {/* Right column – skill bars */}
        <div className="professional__right">
          {p.groups.map((group, i) => (
            <SkillGroup key={group.title} title={group.title} skills={skillGroups[i]} />
          ))}
        </div>
      </div>
    </div>
  );
}
