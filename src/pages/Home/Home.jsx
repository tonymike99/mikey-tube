import { Aside, CardCategory, Slideshow } from "../../components/index";
import { useDocumentTitle } from "../../hooks/custom/index";
import { categories } from "../../backend/db/categories";

function Home() {
  // SET DOCUMENT TITLE
  useDocumentTitle("Home");

  return (
    <div className="main-container">
      <Aside />

      <main className="main">
        <section>
          <Slideshow />
        </section>

        <section className="videos">
          {categories.map((category) => (
            <CardCategory key={category._id} data={category} />
          ))}
        </section>
      </main>
    </div>
  );
}

export { Home };
