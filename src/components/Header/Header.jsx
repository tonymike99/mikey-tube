import "./Header.css";
import { Link } from "react-router-dom";
import { useTheme } from "../../hooks/context/index";

function Header() {
  const { theme, setTheme } = useTheme();

  // To handle theme button onClick
  const handlerTheme = () => {
    document.body.classList.toggle(theme);
    setTheme(theme === "dark-theme" ? "light-theme" : "dark-theme");
  };

  return (
    <header className="header">
      <div className="header-item">
        <Link to="/" className="brand-name">
          VideoBud
        </Link>
      </div>

      <nav className="header-item">
        <ul className="list list-spaced list-navbar">
          <li>
            <Link to="/login" className="styled-link-2">
              <i className="fas fa-user fa-lg" />
            </Link>
          </li>

          <li>|</li>
          <li>
            <a
              className="styled-link-2"
              href="https://github.com/tonymike99/video-bud"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github fa-lg" />
            </a>
          </li>
          <li>
            <Link to="#" className="styled-link-2" onClick={handlerTheme}>
              <i
                id="theme-icon"
                className={
                  theme === "dark-theme"
                    ? "fas fa-sun fa-lg"
                    : "fas fa-moon fa-lg"
                }
              />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export { Header };