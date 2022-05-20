import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

const defaultObj = {};
const VideosAndCategoriesContext = createContext(defaultObj);

const VideosAndCategoriesProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
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
    })();
  }, []);

  useEffect(() => {
    (async () => {
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
    })();
  }, []);

  const valueObj = {
    videos,
    categories,
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
