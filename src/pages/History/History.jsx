import { Aside, CardVideo } from "../../components/index";
import { useDocumentTitle } from "../../hooks/custom/index";
import { useHistory } from "../../hooks/context/index";

function History() {
  // SET DOCUMENT TITLE
  useDocumentTitle("History");

  // ****************************************************************************************************

  const { historyVideos, removeAllVideosFromHistory } = useHistory();

  // ****************************************************************************************************

  return (
    <div className="main-container">
      <Aside />

      <main className="main">
        {historyVideos.length > 0 && (
          <section className="flex-center">
            {historyVideos.length > 0 && (
              <button
                className="btn btn-danger"
                onClick={removeAllVideosFromHistory}
              >
                Delete all from history
              </button>
            )}
          </section>
        )}

        <section className="videos">
          {historyVideos.length ? (
            historyVideos.map((historyVideo) => (
              <CardVideo key={historyVideo._id} video={historyVideo} />
            ))
          ) : (
            <h1>History is empty!</h1>
          )}
        </section>
      </main>
    </div>
  );
}

export { History };
