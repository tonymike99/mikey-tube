import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-item">
        <small>
          Made with
          <span>
            <i className="fas fa-heart footer-heart-icon" />
          </span>
          and
          <span>
            <i className="fas fa-code footer-code-icon" />
          </span>
          by
        </small>
      </div>
      <div className="footer-item">
        <span className="my-name">Tony Mike Auxen</span>
      </div>
      <div className="footer-item footer-icons">
        <a
          className="social-icon"
          href="https://github.com/tonymike99/"
          target="_blank"
          rel="noreferrer"
        >
          <i
            className="fab fa-github fa-lg footer-github-icon"
            aria-hidden="true"
          />
        </a>
        <a
          className="social-icon"
          href="https://linkedin.com/in/tonymike99"
          target="_blank"
          rel="noreferrer"
        >
          <i
            className="fab fa-linkedin-in fa-lg footer-linkedin-icon"
            aria-hidden="true"
          />
        </a>
        <a
          className="social-icon"
          href="https://twitter.com/tonymike07"
          target="_blank"
          rel="noreferrer"
        >
          <i
            className="fab fa-twitter fa-lg footer-twitter-icon"
            aria-hidden="true"
          />
        </a>
        <a
          className="social-icon"
          href="mailto:tonymike99@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <i
            className="fas fa-envelope fa-lg footer-email-icon"
            aria-hidden="true"
          />
        </a>
      </div>
      <div className="footer-item">
        <small>No copyright © issues. Feel free to copy.</small>
      </div>
      <div className="footer-item">
        <a href="https://placeholder.com/">
          Placeholder images by Placeholder.com
        </a>
      </div>
    </footer>
  );
}

export { Footer };
