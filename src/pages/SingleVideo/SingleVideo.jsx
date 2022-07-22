import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Aside } from "../../components/index";
import { useDocumentTitle } from "../../hooks/custom/index";
import {
  useAuth,
  useWatchLater,
  useLiked,
  usePlaylist,
  useVideosAndCategories,
} from "../../hooks/context/index";

function SingleVideo() {
  const { encodedToken } = useAuth();
  const { watchLaterVideos, addVideoToWatchLater, removeVideoFromWatchLater } =
    useWatchLater();
  const { likedVideos, addVideoToLiked, removeVideoFromLiked } = useLiked();
  const {
    playlists,
    getPlaylists,
    addVideoToPlaylist,
    removeVideoFromPlaylist,
  } = usePlaylist();
  const { video, getVideo } = useVideosAndCategories();
  const [isModal, setIsModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // ****************************************************************************************************

  // SET DOCUMENT TITLE
  useDocumentTitle(`${video.title}`);

  // ****************************************************************************************************

  const isVideoInWatchLater = watchLaterVideos.find(
    (watchLaterVideo) => watchLaterVideo._id === video._id
  )
    ? true
    : false;

  const isVideoInLiked = likedVideos.find(
    (likedVideo) => likedVideo._id === video._id
  )
    ? true
    : false;

  const isVideoInPlaylist = (singlePlaylistId) => {
    let playlist = playlists.find(
      (playlist) => playlist._id === singlePlaylistId
    );
    if (playlist !== -1)
      return playlist.videos?.find(
        (playlistVideo) => playlistVideo._id === video._id
      )
        ? true
        : false;
    return false;
  };

  // ****************************************************************************************************

  const handleWatchLaterButtonOnClick = () => {
    if (encodedToken) {
      isVideoInWatchLater
        ? removeVideoFromWatchLater(video._id)
        : addVideoToWatchLater(video);
    } else {
      navigate("/auth");
    }
  };

  const handleLikeButtonOnClick = () => {
    if (encodedToken) {
      isVideoInLiked ? removeVideoFromLiked(video._id) : addVideoToLiked(video);
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
    <div className="main-container">
      <Aside />

      <main className="main">
        <section className="single-video">
          <iframe src={video.url}></iframe>
        </section>

        <section className="single-video-details">
          <h3 className="h3">{video.title}</h3>

          <p className="">{video.categoryName}</p>

          <small className="text-grey">{video.description}</small>

          <div>
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
              className=" pointer"
              onClick={handlePlaylistsOpenButtonOnClick}
            >
              <i className="fa-solid fa-list-check"></i>
            </span>
          </div>

          {isModal && (
            <div className="modal-container">
              <div className="modal-card">
                <div className="modal-card-header relative">
                  <h3 className="h3 text-center">Playlists</h3>
                  <button
                    id="modal-close"
                    className="round pointer btn btn-primary btn-floating badge badge-lg badge-inside-top-right"
                    onClick={handlePlaylistsCloseButtonOnClick}
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </button>
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
                          handleEachPlaylistButtonOnChange(
                            e,
                            singlePlaylist._id
                          )
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
        </section>
      </main>
    </div>
  );
}

export { SingleVideo };
