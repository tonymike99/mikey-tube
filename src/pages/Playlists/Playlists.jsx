import { useState } from "react";
import { Aside, CardPlaylist } from "../../components/index";
import { useDocumentTitle } from "../../hooks/custom/index";
import { usePlaylist } from "../../hooks/context/index";

function Playlists() {
  // SET DOCUMENT TITLE
  useDocumentTitle("Playlists");

  const { playlists, addPlaylist } = usePlaylist();
  const [isModal, setIsModal] = useState(false);
  const [playlistDetails, setPlaylistDetails] = useState({
    title: "",
    description: "",
  });

  // ****************************************************************************************************

  const handleCreateNewPlaylistButtonOnClick = () => {
    setIsModal(!isModal);
  };

  const handlePlaylistsCloseButtonOnClick = () => {
    setIsModal(!isModal);
  };

  const handlePlaylistTitleOnChange = (e) => {
    setPlaylistDetails({ ...playlistDetails, title: e.target.value });
  };

  const handlePlaylistDescriptionOnChange = (e) => {
    setPlaylistDetails({ ...playlistDetails, description: e.target.value });
  };

  const handleCreateNewPlaylistSubmitButtonOnClick = () => {
    if (playlistDetails.title && playlistDetails.description) {
      addPlaylist(playlistDetails);
      setIsModal(!isModal);
      setPlaylistDetails({
        title: "",
        description: "",
      });
    }
  };

  // ****************************************************************************************************

  return (
    <div className="main-container">
      <Aside />

      <main className="main">
        <section>
          <button
            className="btn btn-primary"
            onClick={handleCreateNewPlaylistButtonOnClick}
          >
            Create new playlist
          </button>

          {isModal && (
            <div className="modal-window">
              <div>
                <div className="margin-2">
                  <h1 className="text-center">New Playlist</h1>
                  <span
                    className="modal-close"
                    onClick={handlePlaylistsCloseButtonOnClick}
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </span>
                </div>
                <form className="form-spacing" action="#">
                  <input
                    type="text"
                    id="titleInput"
                    placeholder="Playlist Title"
                    required
                    value={playlistDetails.title}
                    onChange={(e) => handlePlaylistTitleOnChange(e)}
                  />
                  <textarea
                    className="playlist-description"
                    id="descriptionInput"
                    placeholder="Playlist Description"
                    rows="8"
                    cols="50"
                    required
                    value={playlistDetails.description}
                    onChange={(e) => handlePlaylistDescriptionOnChange(e)}
                  />
                  <button
                    className="btn btn-primary"
                    onClick={handleCreateNewPlaylistSubmitButtonOnClick}
                  >
                    Create new playlist
                  </button>
                </form>
              </div>
            </div>
          )}
        </section>

        <section className="videos">
          {playlists.length ? (
            playlists.map((playlist) => (
              <CardPlaylist key={playlist._id} playlist={playlist} />
            ))
          ) : (
            <h1>Playlists empty!</h1>
          )}
        </section>
      </main>
    </div>
  );
}

export { Playlists };
