import { Aside, CardVideo } from "../../components/index";
import { useDocumentTitle } from "../../hooks/custom/index";
import { useWatchLater } from "../../hooks/context/index";

function WatchLater() {
  // SET DOCUMENT TITLE
  useDocumentTitle("Watch Later");

  const { watchLaterVideos } = useWatchLater();

  // ****************************************************************************************************

  return (
    <div className="main-container">
      <Aside />

      <main className="main">
        <section className="videos">
          {watchLaterVideos.length ? (
            watchLaterVideos.map((watchLaterVideo) => (
              <CardVideo key={watchLaterVideo._id} video={watchLaterVideo} />
            ))
          ) : (
            <h1>Watch Later is empty!</h1>
          )}
        </section>
      </main>
    </div>
  );
}

export { WatchLater };
