import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "../../hooks/context/index";

const defaultObj = {};
const WatchLaterContext = createContext(defaultObj);

const WatchLaterProvider = ({ children }) => {
  const { encodedToken } = useAuth();
  const [watchLaterVideos, setWatchLaterVideos] = useState([]);

  // ****************************************************************************************************

  useEffect(() => {
    if (encodedToken) {
      getWatchLaterVideos();
    }
  }, [encodedToken]);

  // ****************************************************************************************************

  const getWatchLaterVideos = async () => {
    try {
      const params = {
        method: "get",
        url: "/api/user/watchlater",
        headers: {
          authorization: encodedToken,
        },
      };

      const watchLaterVideosResponse = await axios.request(params);

      if (watchLaterVideosResponse.status === 200) {
        setWatchLaterVideos(watchLaterVideosResponse.data.watchlater);
      }
    } catch (error) {
      console.error(error.response);
    }
  };

  const addVideoToWatchLater = async (video) => {
    try {
      const params = {
        method: "post",
        url: "/api/user/watchlater",
        data: { video },
        headers: {
          authorization: encodedToken,
        },
      };

      const watchLaterVideosResponse = await axios.request(params);

      if (watchLaterVideosResponse.status === 201) {
        setWatchLaterVideos(watchLaterVideosResponse.data.watchlater);
      }
    } catch (error) {
      console.error(error.response);
    }
  };

  const removeVideoFromWatchLater = async (videoId) => {
    try {
      const params = {
        method: "delete",
        url: `/api/user/watchlater/${videoId}`,
        headers: {
          authorization: encodedToken,
        },
      };

      const watchLaterVideosResponse = await axios.request(params);

      if (watchLaterVideosResponse.status === 200) {
        setWatchLaterVideos(watchLaterVideosResponse.data.watchlater);
      }
    } catch (error) {
      console.error(error.response);
    }
  };

  const valueObj = {
    watchLaterVideos,
    addVideoToWatchLater,
    removeVideoFromWatchLater,
  };

  // ****************************************************************************************************

  return (
    <WatchLaterContext.Provider value={valueObj}>
      {children}
    </WatchLaterContext.Provider>
  );
};

const useWatchLater = () => useContext(WatchLaterContext);

export { WatchLaterProvider, useWatchLater };
