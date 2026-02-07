import { useLang } from "../../context/LanguageContext.tsx";
import "./topbar.css";

const tabs = ["Hello", "About Me", "Projects", "Contact Me"];

export const TopBar = () => {
  const { lang, toggle } = useLang();

  return (
    <div className="topbar">
      <div className="topbar-left">
        <span className="brand">alex-kellas</span>
      </div>

      <div className="tabs">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            className={`tab ${i === 0 ? "active" : ""}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="topbar-right">
        <button
          className={`lang-toggle ${lang === "es" ? "active" : ""}`}
          onClick={toggle}
          aria-label="Toggle language"
        >
          <span className="lang-label">EN</span>
          <span className="lang-thumb" />
          <span className="lang-label">ES</span>
        </button>
      </div>
    </div>
  );
};