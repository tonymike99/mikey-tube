import { videos } from "../../backend/db/videos";
import { Aside, CardVideo } from "../../components/index";
import { useDocumentTitle } from "../../hooks/custom/index";
import { Link } from "react-router-dom";

function Explore() {
  // SET DOCUMENT TITLE
  useDocumentTitle("Explore");

  return (
    <div className="main-container">
      <Aside />

      <main className="main">
        <section className="videos">
          {videos
            .sort(() => Math.random() - 0.5)
            .map((video) => (
              <CardVideo key={video._id} video={video} />
            ))}
        </section>
      </main>
    </div>
  );
}

export { Explore };
