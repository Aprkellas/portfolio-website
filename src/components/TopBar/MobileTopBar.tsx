import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "./mobilepanel.css";
import { useLang } from "../../context/LanguageContext.tsx";
import { NavLink } from "react-router-dom";

export function MobileTopBar() {
  const [open, setOpen] = useState(false);
  const { t, lang, toggle } = useLang();

  // Prevent background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  const tabs = [
      { label: t.tabHello, path: "/" },
      { label: t.tabAbout, path: "/about" },
      { label: t.tabProjects, path: "/projects" },
    ];
  return (
    <>
      <header className="mobile-topbar">
        <span className="mobile-title">alex-kellas</span>

        <button
          className="mobile-menu"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          <FiMenu />
        </button>
      </header>

      {/* Backdrop */}
      <div
        className={`mobile-backdrop ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
      />

      {/* Slide panel */}
      <aside className={`mobile-panel ${open ? "open" : ""}`}>
        <button
          className="panel-close"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        >
          <FiX />
        </button>

        <nav className="panel-nav">
          {tabs.map(({ label, path }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `tab ${isActive ? "active" : ""}`
            }
            end={path === "/"}
            onClick={() => setOpen(false)}
          >
            {label}
          </NavLink>
        ))}
        </nav>

        <div className="panel-lang">
          <a
            href="/cv.pdf"
            download
            className="cv-btn"
            aria-label="Download CV"
            onClick={() => setOpen(false)}
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
      </aside>
    </>
  );
}
