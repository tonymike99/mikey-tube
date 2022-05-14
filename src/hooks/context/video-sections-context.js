import { createContext, useContext, useReducer, useEffect } from "react";
import { videoSectionsReducer } from "../reducer/video-sections-reducer";

const defaultObj = {};
const VideoSectionsContext = createContext(defaultObj);

const VideoSectionsProvider = ({ children }) => {
  // INITIAL VIDEOS STATE
  const initialVideoSections = {
    historyVideos: [],
    likedVideos: [],
    watchLaterVideos: [],
    playlists: [
      {
        _id: 1,
        name: "Playlist1",
        imageUrl: "logo512.png",
        videos: [],
      },
      {
        _id: 2,
        name: "Playlist2",
        imageUrl: "logo512.png",
        videos: [],
      },
    ],
  };

  // USEREDUCER
  const [videoSectionsState, dispatch] = useReducer(
    videoSectionsReducer,
    // JSON.parse(localStorage.getItem("storedVideoSections")) ??
    initialVideoSections
  );

  // USEEFFECT
  useEffect(() => {
    localStorage.setItem(
      "storedVideoSections",
      JSON.stringify(initialVideoSections)
    );
  });

  const valueObj = { videoSectionsState, dispatch };

  return (
    <VideoSectionsContext.Provider value={valueObj}>
      {children}
    </VideoSectionsContext.Provider>
  );
};

const useVideoSections = () => useContext(VideoSectionsContext);

export { VideoSectionsProvider, useVideoSections };
