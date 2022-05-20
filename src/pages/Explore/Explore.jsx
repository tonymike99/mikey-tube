import { Aside, CardVideo } from "../../components/index";
import { useDocumentTitle } from "../../hooks/custom/index";
import { useVideosAndCategories } from "../../hooks/context/index";

function Explore() {
  // SET DOCUMENT TITLE
  useDocumentTitle("Explore");

  // GET VIDEOS
  const { videos } = useVideosAndCategories();

  // ****************************************************************************************************

  return (
    <div className="main-container">
      <Aside />

      <main className="main">
        <section className="videos">
          {videos.map((video) => (
            <CardVideo key={video._id} video={video} />
          ))}
        </section>
      </main>
    </div>
  );
}

export { Explore };
