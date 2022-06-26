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
        <section className="flex-center">
          <div className="card">
            <p className="text-bold">Playlist Name: {playlist.title}</p>
            <p className="text-bold">
              Playlist Description: {playlist.description}
            </p>
            <p className="text-bold">
              Playlist Length: {playlist.videos?.length}
            </p>
          </div>
        </section>

        <section className="videos">
          {playlist.videos?.length ? (
            playlist.videos?.map((playlistVideo) => (
              <CardVideo key={playlistVideo._id} video={playlistVideo} />
            ))
          ) : (
            <h1>Playlist {playlist.title} has no videos!</h1>
          )}
        </section>
      </main>
    </div>
  );
}

export { SinglePlaylist };
