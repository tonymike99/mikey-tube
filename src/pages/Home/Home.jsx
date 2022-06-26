import { Aside, CardCategory, Slideshow } from "../../components/index";
import { useDocumentTitle } from "../../hooks/custom/index";
import { useVideosAndCategories } from "../../hooks/context/index";

function Home() {
  // SET DOCUMENT TITLE
  useDocumentTitle("Home");

  // ****************************************************************************************************

  // GET VIDEOS AND CATEGORIES
  const { videos, categories } = useVideosAndCategories();

  // ****************************************************************************************************

  return (
    <div className="main-container">
      <Aside />

      <main className="main">
        <Slideshow videos={videos} />

        <section className="categories">
          {categories.map((category) => (
            <CardCategory key={category._id} data={category} />
          ))}
        </section>
      </main>
    </div>
  );
}

export { Home };
