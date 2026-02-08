import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <span className="footer-label">find me in:</span>

        <a href="https://www.instagram.com/alexkellas/" target="_blank" rel="noreferrer" className="footer-icon">
          X
        </a>

        <a href="https://www.linkedin.com/in/alex-kellas-70470b174/" target="_blank" rel="noreferrer" className="footer-icon">
          in
        </a>
      </div>

      <div className="footer-right">
        <span className="footer-username">@Aprkellas</span>
        <span className="footer-icon">⌁</span>
      </div>
    </footer>
  );
};
