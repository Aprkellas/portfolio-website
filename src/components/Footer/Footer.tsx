import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <span className="footer-label">find me in:</span>

        <a href="https://x.com" target="_blank" rel="noreferrer" className="footer-icon">
          X
        </a>

        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="footer-icon">
          in
        </a>
      </div>

      <div className="footer-right">
        <span className="footer-username">@username</span>
        <span className="footer-icon">⌁</span>
      </div>
    </footer>
  );
};
