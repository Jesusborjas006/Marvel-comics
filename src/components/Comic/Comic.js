import "./Comic.css";
import { Link } from "react-router-dom";

const Comic = (props) => {
  console.log("comic Props<>>>>", props);
  return (
    <div className="comic-card">
      <Link to={`/comicDetails/${props.id}`} onClick={() => props.comicClicked(props.id)}>
        <img
          className="comic-img"
          src={`${props.img.path}.${props.img.extension}`}
          alt="poster"
        />
      </Link>

      <Link to="/comicDetails" onClick={() => props.toggleForm()}>
        <h2 className="comic-title">{props.title}</h2>
      </Link>
    </div>
  );
};

export default Comic;
