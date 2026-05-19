import "./about.css";
import { AboutContent } from "./AboutContent.tsx";
import { useState } from "react";
import { useLang } from "../../context/LanguageContext.tsx";

type SectionKey = "personalInfo" | "professionalInfo" | "hobbies";

const SECTION_KEYS: SectionKey[] = ["personalInfo", "professionalInfo", "hobbies"];

export function About() {

  const [section, setSection] = useState<SectionKey>("personalInfo");
  const { t } = useLang();
  
  return (
    <section className="about">
      <div className="about-wrapper">
        <div className="about_tabs">
          <div className="about_tabs-list">
            {SECTION_KEYS.map((key) => (
              <button
                key={key}
                className={`about_tab ${section === key ? "active" : ""}`}
                onClick={() => setSection(key)}
              >
                {t.aboutme[key]}
              </button>
            ))}
          </div>
        </div>

        <main className="about__editor">
          <AboutContent section={section} />
        </main>
      </div>
    </section>
  );
}
