import "./ComicDetails.css";
import { Link } from "react-router-dom";

const ComicDetails = (props) => {
  return (
    <div className="comic-details">
      <Link to="/" onClick={() => props.toggle()} className="back-btn">
        Go Back
      </Link>
      <div className="detail-container">
        <img
          src={`${props.specificComic.data.results[0].thumbnail.path}.${props.specificComic.data.results[0].thumbnail.extension}`}
          alt="poster"
          className="details-img"
        />
      </div>
    </div>
  );
};

export default ComicDetails;
