import "./about.css";
import { AboutTree } from "./AboutTree.tsx";
import { AboutContent } from "./AboutContent.tsx";
import { CodeSnippets } from "./CodeSnippets.tsx";

export function About() {
  return (
    <section className="about">
      <aside className="about__sidebar">
        <AboutTree />
      </aside>

      <main className="about__editor">
        <AboutContent />
      </main>

      <aside className="about__snippets">
        <CodeSnippets />
      </aside>
    </section>
  );
}
