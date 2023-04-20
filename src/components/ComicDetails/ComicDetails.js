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
        <h2>{props.specificComic.data.results[0].title}</h2>
        <p>Description: {props.specificComic.data.results[0].description}</p>
        <p>
          Print Price: ${props.specificComic.data.results[0].prices[0].price}
        </p>
        <p>
          Digital Price: ${props.specificComic.data.results[0].prices[1].price}
        </p>
      </div>
    </div>
  );
};

export default ComicDetails;
