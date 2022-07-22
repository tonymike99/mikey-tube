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
    <div className="card card-category round relative">
      <div onClick={handlePlaylistOnClick}>
        <Link key={_id} to={`/playlists/${_id}`}>
          <img
            className="image-responsive round image-translucent"
            src={require("../../assets/images/bg.png").default}
            alt={title}
          />

          <span className="absolute badge-inside-center">
            <h3 className="h3 text-center">{title.toUpperCase()}</h3>
          </span>
        </Link>
      </div>

      <span
        className="absolute badge badge-busy pointer color-white"
        onClick={handleRemovePlaylistButtonOnClick}
      >
        <i className="fa-solid fa-trash"></i>
      </span>
    </div>
  );
}

export { CardPlaylist };
