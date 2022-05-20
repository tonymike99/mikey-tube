import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./index";

const defaultObj = {};
const LikedContext = createContext(defaultObj);

const LikedProvider = ({ children }) => {
  const { encodedToken } = useAuth();
  const [likedVideos, setLikedVideos] = useState([]);

  useEffect(() => {
    if (encodedToken) {
      (async () => {
        try {
          const params = {
            method: "get",
            url: "/api/user/likes",
            headers: {
              authorization: encodedToken,
            },
          };

          const likedVideosResponse = await axios.request(params);

          if (likedVideosResponse.status === 200) {
            setLikedVideos(likedVideosResponse.data.likes);
          }
        } catch (error) {
          console.log(error.response.data);
        }
      })();
    }
  }, [encodedToken]);

  const addVideoToLiked = async (video) => {
    try {
      const params = {
        method: "post",
        url: "/api/user/likes",
        data: { video },
        headers: {
          authorization: encodedToken,
        },
      };

      const likedVideosResponse = await axios.request(params);

      if (likedVideosResponse.status === 201) {
        setLikedVideos(likedVideosResponse.data.likes);
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const removeVideoFromLiked = async (videoId) => {
    try {
      const params = {
        method: "delete",
        url: `/api/user/likes/${videoId}`,
        headers: {
          authorization: encodedToken,
        },
      };

      const likedVideosResponse = await axios.request(params);

      if (likedVideosResponse.status === 200) {
        setLikedVideos(likedVideosResponse.data.likes);
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const valueObj = {
    likedVideos,
    addVideoToLiked,
    removeVideoFromLiked,
  };

  // ****************************************************************************************************

  return (
    <LikedContext.Provider value={valueObj}>{children}</LikedContext.Provider>
  );
};

const useLiked = () => useContext(LikedContext);

export { LikedProvider, useLiked };
