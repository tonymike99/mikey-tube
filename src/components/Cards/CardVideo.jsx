import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDocumentTitle } from "../../hooks/custom/index";
import {
  useAuth,
  useHistory,
  useWatchLater,
  useLiked,
  usePlaylist,
  useVideosAndCategories,
} from "../../hooks/context/index";

function CardVideo({ video }) {
  const { _id, title, categoryName, thumbnailUrl } = video;
  const { encodedToken } = useAuth();
  const { historyVideos, addVideoToHistory, removeVideoFromHistory } =
    useHistory();
  const { watchLaterVideos, addVideoToWatchLater, removeVideoFromWatchLater } =
    useWatchLater();
  const { likedVideos, addVideoToLiked, removeVideoFromLiked } = useLiked();
  const {
    playlists,
    getPlaylists,
    addVideoToPlaylist,
    removeVideoFromPlaylist,
  } = usePlaylist();
  const { getVideo } = useVideosAndCategories();
  const [isModal, setIsModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // ****************************************************************************************************

  // SET DOCUMENT TITLE
  useDocumentTitle(`${title}`);

  // ****************************************************************************************************

  const IsVideoInHistory = historyVideos.find(
    (historyVideo) => historyVideo._id === _id
  )
    ? true
    : false;

  const isVideoInWatchLater = watchLaterVideos.find(
    (watchLaterVideo) => watchLaterVideo._id === _id
  )
    ? true
    : false;

  const isVideoInLiked = likedVideos.find(
    (likedVideo) => likedVideo._id === _id
  )
    ? true
    : false;

  const isVideoInPlaylist = (singlePlaylistId) => {
    let playlist = playlists.find(
      (playlist) => playlist._id === singlePlaylistId
    );
    if (playlist !== -1)
      return playlist.videos?.find((video) => video._id === _id) ? true : false;
    return false;
  };

  // ****************************************************************************************************

  const handleGetVideoAndAddVideoToHistoryButtonOnClick = () => {
    getVideo(_id);

    if (encodedToken && !IsVideoInHistory) {
      addVideoToHistory(video);
    }
  };

  const handleRemoveVideoFromHistoryButtonOnClick = () => {
    if (encodedToken && IsVideoInHistory) {
      removeVideoFromHistory(_id);
    } else {
      navigate("/auth");
    }
  };

  const handleWatchLaterButtonOnClick = () => {
    if (encodedToken) {
      isVideoInWatchLater
        ? removeVideoFromWatchLater(_id)
        : addVideoToWatchLater(video);
    } else {
      navigate("/auth");
    }
  };

  const handleLikeButtonOnClick = () => {
    if (encodedToken) {
      isVideoInLiked ? removeVideoFromLiked(_id) : addVideoToLiked(video);
    } else {
      navigate("/auth");
    }
  };

  const handlePlaylistsOpenButtonOnClick = () => {
    if (encodedToken) {
      setIsModal(!isModal);
    } else {
      navigate("/auth");
    }
  };

  const handlePlaylistsCloseButtonOnClick = () => {
    setIsModal(!isModal);
  };

  const handleEachPlaylistButtonOnChange = (e, playlistId) => {
    getPlaylists();
    e.target.checked
      ? addVideoToPlaylist(playlistId, video)
      : removeVideoFromPlaylist(playlistId, video._id);
  };

  // ****************************************************************************************************

  return (
    <div className="card card-video">
      <Link to={`/explore/${_id}`}>
        <img
          className="image-responsive"
          src={thumbnailUrl}
          alt={title}
          onClick={handleGetVideoAndAddVideoToHistoryButtonOnClick}
        />
      </Link>

      <div className="card-header">
        <h4 className="text-bold">{title}</h4>
        <small className="text-grey">{categoryName}</small>
      </div>

      <div className="card-footer">
        <span className="pointer" onClick={handleLikeButtonOnClick}>
          {isVideoInLiked ? (
            <i className="fa-solid fa-thumbs-up"></i>
          ) : (
            <i className="fa-regular fa-thumbs-up"></i>
          )}
        </span>

        <span className="pointer" onClick={handleWatchLaterButtonOnClick}>
          {isVideoInWatchLater ? (
            <i className="fa-solid fa-clock"></i>
          ) : (
            <i className="fa-regular fa-clock"></i>
          )}
        </span>

        <span
          className="pointer"
          onClick={handleRemoveVideoFromHistoryButtonOnClick}
        >
          {location.pathname === "/history" && IsVideoInHistory && (
            <i className="fa-solid fa-trash"></i>
          )}
        </span>

        <span className=" pointer" onClick={handlePlaylistsOpenButtonOnClick}>
          <i className="fa-solid fa-list-check"></i>
        </span>

        {isModal && (
          <div className="modal-window">
            <div>
              <div className="margin-2">
                <h1 className="text-center">Playlists</h1>
                <span
                  className="modal-close"
                  onClick={handlePlaylistsCloseButtonOnClick}
                >
                  <i className="fa-solid fa-xmark"></i>
                </span>
              </div>

              <div className="playlists-list">
                {playlists.map((singlePlaylist) => (
                  <div key={singlePlaylist._id}>
                    <input
                      type="checkbox"
                      name={singlePlaylist.title}
                      defaultValue={singlePlaylist.title}
                      defaultChecked={isVideoInPlaylist(singlePlaylist._id)}
                      onInput={(e) =>
                        handleEachPlaylistButtonOnChange(e, singlePlaylist._id)
                      }
                    />
                    <label htmlFor={singlePlaylist.title}>
                      {" "}
                      {singlePlaylist.title}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <Link to={`/explore/${_id}`}>
        <button
          className="btn btn-secondary btn-width-100 pointer"
          onClick={handleGetVideoAndAddVideoToHistoryButtonOnClick}
        >
          Watch Now
        </button>
      </Link>
    </div>
  );
}

export { CardVideo };
