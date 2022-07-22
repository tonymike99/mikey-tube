import { useState } from "react";
import { Aside, CardPlaylist } from "../../components/index";
import { useDocumentTitle } from "../../hooks/custom/index";
import { usePlaylist } from "../../hooks/context/index";

function Playlists() {
  // SET DOCUMENT TITLE
  useDocumentTitle("Playlists");

  // ****************************************************************************************************

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
        <section className="flex-center">
          <button
            className="btn btn-primary"
            onClick={handleCreateNewPlaylistButtonOnClick}
          >
            Create new playlist
          </button>

          {isModal && (
            <div className="modal-container">
              <div className="modal-card">
                <div className="modal-card-header relative">
                  <h3 className="h3 text-center">New Playlist</h3>
                  <button
                    id="modal-close"
                    className="round pointer btn btn-primary btn-floating badge badge-lg badge-inside-top-right"
                    onClick={handlePlaylistsCloseButtonOnClick}
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                </div>

                <form className="form" action="#">
                  <div className="form-control">
                    <input
                      className="new_input"
                      type="text"
                      id="titleInput"
                      placeholder="Playlist Title"
                      required
                      value={playlistDetails.title}
                      onChange={(e) => handlePlaylistTitleOnChange(e)}
                    />
                  </div>
                  <div className="form-control">
                    <textarea
                      className="new_textarea"
                      id="descriptionInput"
                      placeholder="Playlist Description"
                      rows="8"
                      required
                      value={playlistDetails.description}
                      onChange={(e) => handlePlaylistDescriptionOnChange(e)}
                    />
                  </div>
                  <div className="form-control">
                    <button
                      className="btn btn-primary btn-width-100"
                      onClick={handleCreateNewPlaylistSubmitButtonOnClick}
                    >
                      Create new playlist
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </section>

        <section className="categories">
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
