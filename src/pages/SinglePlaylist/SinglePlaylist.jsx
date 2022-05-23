import { Aside, CardVideo } from "../../components/index";
import { useDocumentTitle } from "../../hooks/custom/index";
import { usePlaylist } from "../../hooks/context/index";

function SinglePlaylist() {
  const { playlist } = usePlaylist();

  // ****************************************************************************************************

  // SET DOCUMENT TITLE
  useDocumentTitle(`${playlist.title}`);

  // ****************************************************************************************************

  return (
    <div className="main-container">
      <Aside />

      <main className="main">
        <section>
          <div className="card padding-2">
            <h3>Playlist Name: {playlist.title}</h3>
            <h3>Playlist Description: {playlist.description}</h3>
            <h3>Playlist Length: {playlist.videos?.length}</h3>
          </div>
        </section>

        <section className="videos">
          {playlist.videos?.length ? (
            playlist.videos?.map((playlistVideo) => (
              <CardVideo key={playlistVideo._id} video={playlistVideo} />
            ))
          ) : (
            <h1>Playlist videos empty!</h1>
          )}
        </section>
      </main>
    </div>
  );
}

export { SinglePlaylist };
