import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "../../hooks/context/index";

const defaultObj = {};
const PlaylistContext = createContext(defaultObj);

const PlaylistProvider = ({ children }) => {
  const { encodedToken } = useAuth();
  const [playlist, setPlaylist] = useState({});
  const [playlists, setPlaylists] = useState([]);

  // ****************************************************************************************************

  useEffect(() => {
    if (encodedToken) {
      getPlaylists();
    }
  }, [encodedToken]);

  const getPlaylist = async (playlistId) => {
    try {
      const params = {
        method: "get",
        url: `/api/user/playlists/${playlistId}`,
        headers: {
          authorization: encodedToken,
        },
      };

      const playlistResponse = await axios.request(params);

      if (playlistResponse.status === 200) {
        setPlaylist(playlistResponse.data.playlist);
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const addVideoToPlaylist = async (playlistId, video) => {
    try {
      const params = {
        method: "post",
        url: `/api/user/playlists/${playlistId}`,
        data: { video },
        headers: {
          authorization: encodedToken,
        },
      };

      const playlistResponse = await axios.request(params);

      if (playlistResponse.status === 201) {
        setPlaylist(playlistResponse.data.playlist);
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const removeVideoFromPlaylist = async (playlistId, videoId) => {
    try {
      const params = {
        method: "delete",
        url: `/api/user/playlists/${playlistId}/${videoId}`,
        headers: {
          authorization: encodedToken,
        },
      };

      const playlistResponse = await axios.request(params);

      if (playlistResponse.status === 200) {
        setPlaylist(playlistResponse.data.playlist);
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const getPlaylists = async () => {
    try {
      const params = {
        method: "get",
        url: "/api/user/playlists",
        headers: {
          authorization: encodedToken,
        },
      };

      const playlistsResponse = await axios.request(params);

      if (playlistsResponse.status === 200) {
        setPlaylists(playlistsResponse.data.playlists);
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const addPlaylist = async (playlist) => {
    try {
      const params = {
        method: "post",
        url: "/api/user/playlists",
        data: { playlist },
        headers: {
          authorization: encodedToken,
        },
      };

      const playlistsResponse = await axios.request(params);

      if (playlistsResponse.status === 201) {
        setPlaylists(playlistsResponse.data.playlists);
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const removePlaylist = async (playlistId) => {
    try {
      const params = {
        method: "delete",
        url: `/api/user/playlists/${playlistId}`,
        headers: {
          authorization: encodedToken,
        },
      };

      const playlistsResponse = await axios.request(params);

      if (playlistsResponse.status === 200) {
        setPlaylists(playlistsResponse.data.playlists);
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const valueObj = {
    playlist,
    getPlaylist,
    addVideoToPlaylist,
    removeVideoFromPlaylist,
    playlists,
    getPlaylists,
    addPlaylist,
    removePlaylist,
  };

  // ****************************************************************************************************

  return (
    <PlaylistContext.Provider value={valueObj}>
      {children}
    </PlaylistContext.Provider>
  );
};

const usePlaylist = () => useContext(PlaylistContext);

export { PlaylistProvider, usePlaylist };
