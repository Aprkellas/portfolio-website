import "./footer.css";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { useLang } from "../../context/LanguageContext.tsx";

export function MobileFooter() {
  const { t } = useLang();
  return (
    <footer className="footer footer-mobile">
      <div className="footer-left">
        <span className="footer-label">{t.footer}</span>

        <a
          href="https://x.com/yourhandle"
          target="_blank"
          rel="noreferrer"
          className="footer-icon"
        >
          <FaInstagram />
        </a>

        <a
          href="https://www.linkedin.com/in/alex-kellas-70470b174/"
          target="_blank"
          rel="noreferrer"
          className="footer-icon"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="https://github.com/Aprkellas"
          target="_blank"
          rel="noreferrer"
          className="footer-icon"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
}
