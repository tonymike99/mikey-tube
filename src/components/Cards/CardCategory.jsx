import { Link } from "react-router-dom";

function CardCategory({ data }) {
  const { _id, name, imageUrl } = data;

  // ****************************************************************************************************

  return (
    <Link key={_id} to="/explore">
      <div className="card relative round">
        <img
          className="image-responsive round image-translucent card-category"
          src={imageUrl}
          alt={name}
        />
        <div className="card-header absolute badge-inside-center-stretch">
          <h3 className="font-montserrat color-white">{name.toUpperCase()}</h3>
        </div>
      </div>
    </Link>
  );
}

export { CardCategory };
