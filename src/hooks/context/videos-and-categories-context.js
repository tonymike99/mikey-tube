import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

const defaultObj = {};
const VideosAndCategoriesContext = createContext(defaultObj);

const VideosAndCategoriesProvider = ({ children }) => {
  const [video, setVideo] = useState({});
  const [category, setCategory] = useState({});
  const [videos, setVideos] = useState([]);
  const [categories, setCategories] = useState([]);

  // ****************************************************************************************************

  useEffect(() => {
    getVideos();
    getCategories();
  }, []);

  // ****************************************************************************************************

  const getVideos = async () => {
    try {
      const params = {
        method: "get",
        url: "/api/videos",
      };

      const videosResponse = await axios.request(params);

      if (videosResponse.status === 200) {
        setVideos(videosResponse.data.videos);
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const getCategories = async () => {
    try {
      const params = {
        method: "get",
        url: "/api/categories",
      };

      const categoriesResponse = await axios.request(params);

      if (categoriesResponse.status === 200) {
        setCategories(categoriesResponse.data.categories);
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const getVideo = async (videoId) => {
    try {
      const params = {
        method: "get",
        url: `/api/video/${videoId}`,
      };

      const videoResponse = await axios.request(params);
      if (videoResponse.status === 200) {
        setVideo(videoResponse.data.video);
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const getCategory = async (categoryId) => {
    try {
      const params = {
        method: "get",
        url: `/api/category/${categoryId}`,
      };

      const categoryResponse = await axios.request(params);

      if (categoryResponse.status === 200) {
        setCategory(categoryResponse.data.category);
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const valueObj = {
    videos,
    categories,
    video,
    category,
    getVideo,
    getCategory,
  };

  // ****************************************************************************************************

  return (
    <VideosAndCategoriesContext.Provider value={valueObj}>
      {children}
    </VideosAndCategoriesContext.Provider>
  );
};

const useVideosAndCategories = () => useContext(VideosAndCategoriesContext);

export { VideosAndCategoriesProvider, useVideosAndCategories };
