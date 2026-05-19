import { useLang } from "../../context/LanguageContext.tsx";
import "./topbar.css";
import { NavLink } from "react-router-dom";

export const TopBar = () => {
  const { t, lang, toggle } = useLang();

  const tabs = [
    { label: t.tabHello, path: "/" },
    { label: t.tabAbout, path: "/about" },
    { label: t.tabProjects, path: "/projects" },
  ];
  
  return (
    <div className="topbar">
      <div className="topbar-left">
        <span className="brand">alex-kellas</span>
      </div>

      <div className="tabs">
        {tabs.map(({ label, path }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `tab ${isActive ? "active" : ""}`
            }
            end={path === "/"}
          >
            {label}
          </NavLink>
        ))}
      </div>

      <div className="topbar-right">
        <a
          href="/AlexKellas_CV.pdf"
          download
          className="cv-btn"
          aria-label="Download CV"
        >
          {t.downloadCV}
        </a>
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