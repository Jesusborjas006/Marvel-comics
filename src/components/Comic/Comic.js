import "./Comic.css";
import { Link } from "react-router-dom";

const Comic = (props) => {
  return (
    <div className="comic-card">
      <Link to="/comicDetails">
        <img
          className="comic-img"
          src={`${props.img.path}.${props.img.extension}`}
          alt="poster"
        />
      </Link>

      <Link to="/comicDetails">
        <h2 className="comic-title">{props.title}</h2>
      </Link>
    </div>
  );
};

export default Comic;
