import "./footer.css";
import { useLang } from "../../context/LanguageContext.tsx";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  const { t } = useLang();
  return (
    <footer className="footer">
      <div className="footer-left">
        <span className="footer-label">{t.footer}</span>
        <a 
          href="https://www.instagram.com/alexkellas/" 
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
      </div>

      <div className="footer-right">
        <span className="footer-username">@Aprkellas</span>
        <span className="footer-icon">⌁</span>
      </div>
    </footer>
  );
};
