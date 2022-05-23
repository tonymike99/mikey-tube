import { Link } from "react-router-dom";
import { usePlaylist } from "../../hooks/context/index";

function CardPlaylist({ playlist }) {
  const { _id, title } = playlist;
  const { getPlaylist, removePlaylist } = usePlaylist();

  // ****************************************************************************************************

  const handleRemovePlaylistButtonOnClick = () => {
    removePlaylist(_id);
  };

  const handlePlaylistOnClick = () => {
    getPlaylist(_id);
  };

  // ****************************************************************************************************

  return (
    <div className="card relative round">
      <div onClick={handlePlaylistOnClick}>
        <Link key={_id} to={`/playlists/${_id}`}>
          <img
            className="image-responsive round image-translucent card-category"
            src={require("../../assets/images/bg.png").default}
            alt={title}
          />
          <div className="card-header absolute badge-inside-center-stretch">
            <h3 className="font-montserrat">{title.toUpperCase()}</h3>
          </div>
        </Link>
      </div>
      <div
        className="absolute badge badge-busy"
        onClick={handleRemovePlaylistButtonOnClick}
      >
        <span className="pointer color-white">
          <i className="fa-solid fa-trash"></i>
        </span>
      </div>
    </div>
  );
}

export { CardPlaylist };
