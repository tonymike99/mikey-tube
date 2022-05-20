import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  useAuth,
  useHistory,
  useWatchLater,
  useLiked,
} from "../../hooks/context/index";

function CardVideo({ video }) {
  const { _id, title, categoryName, thumbnailUrl } = video;
  const { encodedToken } = useAuth();
  const { historyVideos, addVideoToHistory, removeVideoFromHistory } =
    useHistory();
  const { watchLaterVideos, addVideoToWatchLater, removeVideoFromWatchLater } =
    useWatchLater();
  const { likedVideos, addVideoToLiked, removeVideoFromLiked } = useLiked();
  const navigate = useNavigate();
  const location = useLocation();

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

  // ****************************************************************************************************

  const handleAddVideoToHistoryOnClick = () => {
    if (encodedToken && !IsVideoInHistory) {
      addVideoToHistory(video);
    } else {
      navigate("/auth");
    }
  };

  const handleRemoveVideoFromHistoryOnClick = () => {
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

  // ****************************************************************************************************

  return (
    <div className="card card-video">
      <Link to={`/explore/${_id}`}>
        <img
          className="image-responsive"
          src={thumbnailUrl}
          alt={title}
          onClick={handleAddVideoToHistoryOnClick}
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

        <span className="pointer" onClick={handleRemoveVideoFromHistoryOnClick}>
          {location.pathname === "/history" && IsVideoInHistory && (
            <i className="fa-solid fa-trash"></i>
          )}
        </span>
      </div>

      <Link to={`/explore/${_id}`}>
        <button
          className="btn btn-secondary btn-width-100 pointer"
          onClick={handleAddVideoToHistoryOnClick}
        >
          Watch Now
        </button>
      </Link>
    </div>
  );
}

export { CardVideo };
