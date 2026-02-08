import "./footer.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
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
          className="footer-icon"
        >
          <FaXTwitter />
        </a>

        <a
          href="https://linkedin.com/in/yourhandle"
          target="_blank"
          className="footer-icon"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="https://github.com/yourhandle"
          target="_blank"
          className="footer-icon"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
}
