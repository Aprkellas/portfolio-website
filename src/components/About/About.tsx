import "./about.css";
import { AboutContent } from "./AboutContent.tsx";
import { useState } from "react";
import { useLang } from "../../context/LanguageContext.tsx";

export function About() {

  const [section, setSection] = useState("personal-info");
  const { t } = useLang();
  
  const items = [
    t.aboutme.personalInfo, 
    t.aboutme.professionalInfo, 
    t.aboutme.hobbies
  ];    
  return (
    <section className="about">
      <div className="about-wrapper">
        <div className="about_tabs">
          <div className="about_tabs-list">
            {items.map((tab) => (
              <button
                key={tab}
                className={`about_tab ${section === tab ? "active" : ""}`}
                onClick={() => setSection(tab)}
              >
                {tab}
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
