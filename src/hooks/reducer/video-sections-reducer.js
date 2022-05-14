import { VIDEO_ACTIONS } from "../../constants/VIDEO_ACTIONS";

const videoSectionsReducer = (state, action) => {
  switch (action.type) {
    case VIDEO_ACTIONS.ADD_TO_HISTORY_VIDEOS:
      return {
        ...state,
        historyVideos: [action.payload.video, ...state.historyVideos],
      };

    case VIDEO_ACTIONS.ADD_TO_LIKED_VIDEOS:
      return {
        ...state,
        likedVideos: [action.payload.video, ...state.likedVideos],
      };

    case VIDEO_ACTIONS.ADD_TO_WATCH_LATER_VIDEOS:
      return {
        ...state,
        watchLaterVideos: [action.payload.video, ...state.watchLaterVideos],
      };

    case VIDEO_ACTIONS.ADD_TO_PLAYLIST:
      return {
        ...state,
        playlists: [
          ...state.playlists.map((playlist) => {
            if (playlist._id === action.payload.playlistId) {
              playlist.videos = [action.payload.video, ...playlist.videos];
            }

            return playlist;
          }),
        ],
      };

    case VIDEO_ACTIONS.REMOVE_FROM_HISTORY_VIDEOS:
      return {
        ...state,
        historyVideos: state.historyVideos.filter(
          (video) => video._id !== action.payload.video._id
        ),
      };

    case VIDEO_ACTIONS.REMOVE_FROM_LIKED_VIDEOS:
      return {
        ...state,
        likedVideos: state.likedVideos.filter(
          (video) => video._id !== action.payload.video._id
        ),
      };

    case VIDEO_ACTIONS.REMOVE_FROM_WATCH_LATER_VIDEOS:
      return {
        ...state,
        watchLaterVideos: state.watchLaterVideos.filter(
          (video) => video._id !== action.payload.video._id
        ),
      };

    case VIDEO_ACTIONS.REMOVE_FROM_PLAYLIST:
      return {
        ...state,
        playlists: [
          ...state.playlists.map((playlist) => {
            if (playlist._id === action.payload.playlistId) {
              playlist.videos = playlist.videos.filter(
                (video) => video._id !== action.payload.video._id
              );
            }

            return playlist;
          }),
        ],
      };
  }
};

export { videoSectionsReducer };
