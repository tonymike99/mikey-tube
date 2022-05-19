import { Link, useNavigate } from "react-router-dom";

function CardVideo({ video }) {
  const { _id, title, categoryName, thumbnailUrl } = video;

  // ****************************************************************************************************

  return (
    <div className="card card-video">
      <Link to={`/explore/${_id}`}>
        <img className="image-responsive" src={thumbnailUrl} alt={title} />
      </Link>

      <div className="card-header">
        <h4 className="text-bold">{title}</h4>
        <small className="text-grey">{categoryName}</small>
      </div>

      <div className="card-footer">
        <span>
          <i className="fa-solid fa-clock"></i>
        </span>
      </div>

      <Link to={`/explore/${_id}`}>
        <button className="btn btn-secondary btn-width-100 pointer">
          Watch Now
        </button>
      </Link>
    </div>
  );
}

export { CardVideo };
