import { Link } from "react-router-dom";

function CardCategory({ data }) {
  const { _id, name, imageUrl } = data;

  return (
    <Link key={_id} to="/explore">
      <div className="card relative round">
        <img
          className="image-responsive round image-translucent card-category "
          src={imageUrl}
          alt={name}
        />
        <div className="card-header absolute badge-center">
          <h3 className="font-montserrat color-white text-center">
            {name.toUpperCase()}
          </h3>
        </div>
      </div>
    </Link>
  );
}

export { CardCategory };
