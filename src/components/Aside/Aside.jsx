import "./Aside.css";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";

function Aside() {
  const linkDetails = [
    { to: "/", name: "HOME", icon: "fa-home" },
    { to: "/explore", name: "EXPLORE", icon: "fa-compass" },
    { to: "/history", name: "HISTORY", icon: "fa-history" },
    { to: "/liked", name: "LIKED", icon: "fa-thumbs-up" },
    { to: "/watch-later", name: "WATCH LATER", icon: "fa-clock" },
    { to: "/playlists", name: "PLAYLISTS", icon: "fa-list-check" },
  ];

  return (
    <aside className="aside">
      <ul className="list list-vertical">
        {linkDetails.map((linkDetail) => (
          <Fragment key={linkDetail.to}>
            <li>
              <NavLink className="styled-link" to={`${linkDetail.to}`}>
                <i className={`fa-solid ${linkDetail.icon} fa-lg`}></i>
                {`${linkDetail.name}`}
              </NavLink>
            </li>
            <hr className="hr-thin" />
          </Fragment>
        ))}
      </ul>
    </aside>
  );
}

export { Aside };
