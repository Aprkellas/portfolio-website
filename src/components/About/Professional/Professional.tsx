import "./professional.css";
import { useLang } from "../../../context/LanguageContext.tsx";
import {
  SiSharp, SiTypescript, SiReact, SiPython,
  SiMysql, SiMongodb, SiGit, SiDocker,
  SiKubernetes, SiGnubash, SiBlazor, SiDotnet,
} from "react-icons/si";
import { TbBrandAzure } from "react-icons/tb";
import { IconType } from "react-icons";

interface Skill {
  name: string;
  level: number; // 0–100
  icon: IconType;
}

// Skill data is language-agnostic (names are proper nouns / universal)
const skillGroups: Skill[][] = [
  [
    { name: "C# / .NET (6-9)", level: 90, icon: SiDotnet },
    { name: "TypeScript / JavaScript", level: 70, icon: SiTypescript },
    { name: "React", level: 60, icon: SiReact },
    { name: "Blazor", level: 80, icon: SiBlazor },
    { name: "WPF", level: 80, icon: SiSharp },
    { name: "Python (Django, Flask)", level: 50, icon: SiPython },
  ],
  [
    { name: "MySQL / SQL", level: 60, icon: SiMysql },
    { name: "MongoDB", level: 50, icon: SiMongodb },
  ],
  [
    { name: "Git", level: 88, icon: SiGit },
    { name: "Azure DevOps", level: 75, icon: TbBrandAzure },
    { name: "Docker", level: 40, icon: SiDocker },
    { name: "Kubernetes", level: 30, icon: SiKubernetes },
    { name: "Shell Scripting", level: 55, icon: SiGnubash },
  ],
];

function SkillBar({ skill }: { skill: Skill }) {
  const blocks = 20;
  const filled = Math.round((skill.level / 100) * blocks);
  const Icon = skill.icon;

  return (
    <div className="skill-row" style={{ "--level": `${skill.level}%` } as React.CSSProperties}>
      {/* Desktop: block bars */}
      <span className="skill-name">
        <Icon className="skill-icon" aria-hidden="true" />
        {skill.name}
      </span>
      <div className="skill-bar" aria-label={`${skill.name}: ${skill.level}%`}>
        {Array.from({ length: blocks }).map((_, i) => (
          <div
            key={i}
            className={`skill-block ${i < filled ? "skill-block--filled" : "skill-block--empty"}`}
          />
        ))}
      </div>
      <span className="skill-level">{skill.level}</span>

      {/* Mobile: circular wheel */}
      <div className="skill-wheel" aria-hidden="true">
        <svg viewBox="0 0 36 36" className="skill-wheel__svg">
          <circle className="skill-wheel__bg" cx="18" cy="18" r="15.9" />
          <circle className="skill-wheel__fill" cx="18" cy="18" r="15.9"
            strokeDasharray={`${skill.level} ${100 - skill.level}`}
            strokeDashoffset="25"
          />
        </svg>
        <span className="skill-wheel__label">{skill.level}</span>
      </div>
      <span className="skill-wheel-name">{skill.name}</span>
    </div>
  );
}

function SkillGroup({ title, skills }: { title: string; skills: Skill[] }) {
  return (
    <div className="skill-group">
      <h3 className="skill-group__title">
        <span className="skill-group__comment">{"// "}</span>{title}
      </h3>
      <div className="skill-group__wheels">
        {skills.map((s) => (
          <SkillBar key={s.name} skill={s} />
        ))}
      </div>
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
              <span className="skill-group__comment">{"// "}</span>{p.profileTitle}
            </h3>
            <p className="professional__bio">{p.profileBio}</p>
          </section>

          <section className="professional__section">
            <h3 className="professional__section-title">
              <span className="skill-group__comment">{"// "}</span>{p.qualificationsTitle}
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
