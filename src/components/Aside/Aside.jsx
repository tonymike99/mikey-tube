import "./Aside.css";
import { NavLink } from "react-router-dom";

function Aside() {
  return (
    <aside className="aside">
      <ul className="list list-stacked tabs">
        <li>
          <NavLink to="/">
            <i className="fa-solid fa-home fa-lg"></i>
            HOME
          </NavLink>
        </li>
        <hr className="hr-thin" />
        <li>
          <NavLink to="/explore">
            <i className="fa-solid fa-compass fa-lg"></i>
            EXPLORE
          </NavLink>
        </li>
        <hr className="hr-thin" />
        <li>
          <NavLink to="/history">
            <i className="fa-solid fa-history fa-lg"></i>
            HISTORY
          </NavLink>
        </li>
        <hr className="hr-thin" />
        <li>
          <NavLink to="/watch-later">
            <i className="fa-solid fa-clock fa-lg"></i>
            WATCH LATER
          </NavLink>
        </li>
        <hr className="hr-thin" />
        <li>
          <NavLink to="/playlists">
            <i className="fa-solid fa-list-check fa-lg"></i>
            PLAYLISTS
          </NavLink>
        </li>
        <hr className="hr-thin" />
        <li>
          <NavLink to="/liked-videos">
            <i className="fa-solid fa-thumbs-up fa-lg"></i>
            LIKED VIDEOS
          </NavLink>
        </li>
        <hr className="hr-thin" />
      </ul>
    </aside>
  );
}

export { Aside };
