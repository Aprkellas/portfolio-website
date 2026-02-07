import { useLang } from "../../context/LanguageContext.tsx";
import "./home.css";

export const Home = () => {
  const { t } = useLang();

  return (
    <div className="main">
      <div className="copy">
        <p className="muted">{t.greeting}</p>
        <h1>{t.name}</h1>
        <h2>&gt; {t.role}</h2>
        <pre className="code">
          {t.hintComplete}
          {"\n"}
          {t.hintGithub}
          {"\n"}
          const githubLink = "https://github.com/Aprkellas";
        </pre>
      </div>

      <div className="snakePanel">
        {/* TODO: Put snakeComponent */}
        <button className="start">start-game</button>
        <button className="skip">skip</button>
      </div>
    </div>
  );
};
