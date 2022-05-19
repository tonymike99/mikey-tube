import "./Aside.css";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";

function Aside() {
  const linkDetails = [
    { to: "/", name: "HOME", icon: "fa-home" },
    { to: "/explore", name: "EXPLORE", icon: "fa-compass" },
    { to: "/history", name: "HISTORY", icon: "fa-history" },
    { to: "/watch-later", name: "WATCH LATER", icon: "fa-clock" },
    { to: "/playlists", name: "PLAYLISTS", icon: "fa-list-check" },
    { to: "/liked-videos", name: "LIKED VIDEOS", icon: "fa-thumbs-up" },
  ];

  return (
    <aside className="aside">
      <ul className="list list-stacked tabs">
        {linkDetails.map((linkDetail) => (
          <Fragment key={linkDetail.to}>
            <li>
              <NavLink to={`${linkDetail.to}`}>
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
