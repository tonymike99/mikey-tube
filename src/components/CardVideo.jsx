import { Link } from "react-router-dom";
import { useVideoSections } from "../hooks/context/index";
import { VIDEO_ACTIONS } from "../constants/VIDEO_ACTIONS";
import { useState } from "react";

function CardVideo({ video }) {
  const { _id, title, categoryName, thumbnailUrl } = video;
  const { videoSectionsState: section, dispatch } = useVideoSections();
  const [isModal, setIsModal] = useState(false);

  const handleHistoryOnClick = (video) => {
    if (!section.historyVideos.includes(video)) {
      dispatch({
        type: VIDEO_ACTIONS.ADD_TO_HISTORY_VIDEOS,
        payload: { video },
      });
      return;
    }

    if (section.historyVideos.includes(video)) {
      dispatch({
        type: VIDEO_ACTIONS.REMOVE_FROM_HISTORY_VIDEOS,
        payload: { video },
      });
      dispatch({
        type: VIDEO_ACTIONS.ADD_TO_HISTORY_VIDEOS,
        payload: { video },
      });
      return;
    }
  };

  const handleLikeButtonOnClick = (video) => {
    if (!section.likedVideos.includes(video)) {
      dispatch({
        type: VIDEO_ACTIONS.ADD_TO_LIKED_VIDEOS,
        payload: { video },
      });
      return;
    }

    if (section.likedVideos.includes(video)) {
      dispatch({
        type: VIDEO_ACTIONS.REMOVE_FROM_LIKED_VIDEOS,
        payload: { video },
      });
      return;
    }
  };

  const handleWatchLaterButtonOnClick = (video) => {
    if (!section.watchLaterVideos.includes(video)) {
      dispatch({
        type: VIDEO_ACTIONS.ADD_TO_WATCH_LATER_VIDEOS,
        payload: { video },
      });
      return;
    }

    if (section.watchLaterVideos.includes(video)) {
      dispatch({
        type: VIDEO_ACTIONS.REMOVE_FROM_WATCH_LATER_VIDEOS,
        payload: { video },
      });
      return;
    }
  };

  const handlePlaylistsOpenCloseButtonOnClick = () => {
    setIsModal(!isModal);
  };

  const handleEachPlaylistButtonOnChange = (e, playlistId, video) => {
    if (
      e.target.checked &&
      !section.playlists
        .find((playlist) => playlist._id === playlistId)
        .videos.includes(video)
    ) {
      dispatch({
        type: VIDEO_ACTIONS.ADD_TO_PLAYLIST,
        payload: { playlistId, video },
      });
      return;
    }

    if (
      !e.target.checked &&
      section.playlists
        .find((playlist) => playlist._id === playlistId)
        .videos.includes(video)
    ) {
      dispatch({
        type: VIDEO_ACTIONS.REMOVE_FROM_PLAYLIST,
        payload: { playlistId, video },
      });
      return;
    }
  };

  return (
    <div className="card card-video">
      <Link to={`/explore/${_id}`}>
        <img className="image-responsive" src={thumbnailUrl} alt={title} />
      </Link>

      <div className="card-header">
        <h4 className="text-bold">{title}</h4>
        <small className="text-grey">{categoryName}</small>
      </div>

      <div className="card-footer">
        <span onClick={() => handleLikeButtonOnClick(video)}>
          {!section.likedVideos.includes(video) ? (
            <i className="fa-regular fa-thumbs-up"></i>
          ) : (
            <i className="fa-solid fa-thumbs-up"></i>
          )}
        </span>

        <span onClick={() => handleWatchLaterButtonOnClick(video)}>
          {!section.watchLaterVideos.includes(video) ? (
            <i className="fa-regular fa-clock"></i>
          ) : (
            <i className="fa-solid fa-clock"></i>
          )}
        </span>

        <span
          className="relative"
          onClick={() => handlePlaylistsOpenCloseButtonOnClick()}
        >
          <i className="fa-solid fa-list-check"></i>
          <span className="badge round light badge-sm badge-outside-bottom-right">
            {section.playlists.reduce(
              (count, playlist) =>
                playlist.videos.includes(video) ? count + 1 : count,
              0
            )}
          </span>
        </span>

        {isModal && (
          <div className="modal-window">
            <div>
              <span
                className="modal-close"
                onClick={() => handlePlaylistsOpenCloseButtonOnClick()}
              >
                <i className="fa-solid fa-xmark"></i>
              </span>
              <div className="playlists-list">
                {section.playlists.map((playlist) => (
                  <div key={playlist._id}>
                    <input
                      type="checkbox"
                      id={playlist.name}
                      name={playlist.name}
                      defaultValue={playlist.name}
                      defaultChecked={
                        playlist.videos.includes(video) ? true : false
                      }
                      onInput={(e) =>
                        handleEachPlaylistButtonOnChange(e, playlist._id, video)
                      }
                    />
                    <label htmlFor={playlist.name}>
                      {" "}
                      {playlist.name} ({playlist.videos.length})
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <Link key={_id} to={`/explore/${_id}`}>
        <button
          className="btn btn-secondary btn-width-100 pointer"
          onClick={() => handleHistoryOnClick(video)}
        >
          Watch Now
        </button>
      </Link>
    </div>
  );
}

export { CardVideo };
