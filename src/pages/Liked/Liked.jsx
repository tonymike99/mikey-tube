import { Aside, CardVideo } from "../../components/index";
import { useDocumentTitle } from "../../hooks/custom/index";
import { useLiked } from "../../hooks/context/index";

function Liked() {
  // SET DOCUMENT TITLE
  useDocumentTitle("Liked");

  const { likedVideos } = useLiked();

  // ****************************************************************************************************

  return (
    <div className="main-container">
      <Aside />

      <main className="main">
        <section className="videos">
          {likedVideos.length ? (
            likedVideos.map((likedVideo) => (
              <CardVideo key={likedVideo._id} video={likedVideo} />
            ))
          ) : (
            <h1>Liked is empty!</h1>
          )}
        </section>
      </main>
    </div>
  );
}

export { Liked };
