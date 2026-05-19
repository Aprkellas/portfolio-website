import "./aboutme.css";
import { useLang } from "../../../context/LanguageContext.tsx";
import profilePhoto from "../../../styles/images/profile.png";

export function AboutMe() {
  const { t } = useLang();
  const p = t.aboutme.personalInfoContent;

  return (
    <div className="editor aboutme">
      <div className="aboutme__layout">
        <div className="aboutme__photo-col">
          <img
            src={profilePhoto}
            alt="Alex Kellas"
            className="aboutme__photo"
          />
        </div>

        <div className="aboutme__content">
          <h2 className="aboutme__heading">{p.heading}</h2>
          <p className="aboutme__greeting">{p.greeting}</p>

          {p.bio.map((para, i) => (
            <p key={i} className="aboutme__para">{para}</p>
          ))}

          <ul className="aboutme__tags">
            {p.tags.map((tag) => (
              <li key={tag} className="aboutme__tag">{tag}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
