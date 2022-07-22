import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./index";

const defaultObj = {};
const HistoryContext = createContext(defaultObj);

const HistoryProvider = ({ children }) => {
  const { encodedToken } = useAuth();
  const [historyVideos, setHistoryVideos] = useState([]);

  // ****************************************************************************************************

  useEffect(() => {
    if (encodedToken) {
      getHistoryVideos();
    }
  }, [encodedToken]);

  // ****************************************************************************************************

  const getHistoryVideos = async () => {
    try {
      const params = {
        method: "get",
        url: "/api/user/history",
        headers: {
          authorization: encodedToken,
        },
      };

      const historyVideosResponse = await axios.request(params);

      if (historyVideosResponse.status === 200) {
        setHistoryVideos(historyVideosResponse.data.history);
      }
    } catch (error) {
      console.error(error.response);
    }
  };

  const addVideoToHistory = async (video) => {
    try {
      const params = {
        method: "post",
        url: "/api/user/history",
        data: { video },
        headers: {
          authorization: encodedToken,
        },
      };

      const historyVideosResponse = await axios.request(params);

      if (historyVideosResponse.status === 201) {
        setHistoryVideos(historyVideosResponse.data.history);
      }
    } catch (error) {
      console.error(error.response);
    }
  };

  const removeVideoFromHistory = async (videoId) => {
    try {
      const params = {
        method: "delete",
        url: `/api/user/history/${videoId}`,
        headers: {
          authorization: encodedToken,
        },
      };

      const historyVideosResponse = await axios.request(params);

      if (historyVideosResponse.status === 200) {
        setHistoryVideos(historyVideosResponse.data.history);
      }
    } catch (error) {
      console.error(error.response);
    }
  };

  const removeAllVideosFromHistory = async () => {
    try {
      const params = {
        method: "delete",
        url: "/api/user/history/all",
        headers: {
          authorization: encodedToken,
        },
      };

      const historyVideosResponse = await axios.request(params);

      if (historyVideosResponse.status === 200) {
        setHistoryVideos(historyVideosResponse.data.history);
      }
    } catch (error) {
      console.error(error.response);
    }
  };

  const valueObj = {
    historyVideos,
    addVideoToHistory,
    removeVideoFromHistory,
    removeAllVideosFromHistory,
  };

  // ****************************************************************************************************

  return (
    <HistoryContext.Provider value={valueObj}>
      {children}
    </HistoryContext.Provider>
  );
};

const useHistory = () => useContext(HistoryContext);

export { HistoryProvider, useHistory };
