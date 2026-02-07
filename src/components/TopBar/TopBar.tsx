import { useLang } from "../../context/LanguageContext.tsx";
import "./topbar.css";

const tabs = ["Home", "About Me", "Projects", "Contact Me"];

export const TopBar = () => {
  const { lang, toggle } = useLang();

  return (
    <div className="topbar">
      <div className="tabs">
        {tabs.map((tab) => (
          <button key={tab} className="tab active">
            {tab}
          </button>
        ))}
      </div>

      <button className="langSwitch" onClick={toggle}>
        {lang.toUpperCase()}
      </button>
    </div>
  );
};
