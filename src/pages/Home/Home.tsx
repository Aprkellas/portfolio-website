import { useLang } from "../../context/LanguageContext.tsx";
import "./home.css";
import { Snake } from "../../components/Snake/Snake.tsx";

export const Home = () => {
  const { t } = useLang();

  return (
    <div className="main">
      <div className="copy">
        <p className="muted">{t.greeting}</p>
        <h1>{t.name}</h1>
        <h2>&gt; {t.role}</h2>
        <pre className="code">
          <span className="comment">{t.code.codeCommentProjects}</span>
          {"\n"}
          <span className="comment">{t.code.codeCommentGithub}</span>
          {"\n"}
          <span className="keyword">var</span>{" "}
          <span className="variable">githubLink</span><span className="colon"> =</span> {" "}
          <span className="string"> "https://github.com/Aprkellas"</span>
          <span className="colon">;</span>
        </pre>
      </div>

      <div className="snakePanel">
        <Snake />
      </div>
    </div>

  );
};
