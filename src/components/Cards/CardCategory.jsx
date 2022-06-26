import { Link } from "react-router-dom";

function CardCategory({ data }) {
  const { _id, name, imageUrl } = data;

  // ****************************************************************************************************

  return (
    <Link key={_id} to="/explore">
      <div className="card card-category round relative">
        <img
          className="image-responsive round image-translucent"
          src={imageUrl}
          alt={name}
        />
        <span className="absolute badge-inside-center">
          <h3 className="h3 text-center color-white">{name.toUpperCase()}</h3>
        </span>
      </div>
    </Link>
  );
}

export { CardCategory };
