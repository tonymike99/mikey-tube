import "./Header.css";
import { Link } from "react-router-dom";
import { useTheme, useAuth } from "../../hooks/context/index";

function Header() {
  const { theme, setTheme } = useTheme();

  // To handle theme button onClick
  const handlerTheme = () => {
    document.body.classList.toggle(theme);
    setTheme(theme === "dark-theme" ? "light-theme" : "dark-theme");
  };

  // ****************************************************************************************************

  const { encodedToken, logoutUserDetails } = useAuth();

  // To handle logout button onClick
  const handlerLogout = () => {
    logoutUserDetails();
  };

  // ****************************************************************************************************

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
            {encodedToken ? (
              <Link to="/" className="styled-link" onClick={handlerLogout}>
                Logout
              </Link>
            ) : (
              <Link to="/auth" className="styled-link">
                Login
              </Link>
            )}
          </li>
          <li>|</li>
          <li>
            <a
              className="styled-link"
              href="https://github.com/tonymike99/video-bud"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github fa-lg"></i>
            </a>
          </li>
          <li>
            <Link to="#" className="styled-link" onClick={handlerTheme}>
              <i
                id="theme-icon"
                className={
                  theme === "dark-theme"
                    ? "fa-solid fa-sun fa-lg"
                    : "fa-solid fa-moon fa-lg"
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
