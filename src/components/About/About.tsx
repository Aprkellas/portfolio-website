import "./about.css";
import { AboutTree } from "./AboutTree.tsx";
import { AboutContent } from "./AboutContent.tsx";
import { useState } from "react";

export function About() {

  const [section, setSection] = useState("personal-info");
  
  return (
    <section className="about">
      <aside className="about__sidebar">
        <AboutTree selected={section} onSelect={setSection} />
      </aside>

      <main className="about__editor">
        <AboutContent section={section} />
      </main>

    </section>
  );
}
