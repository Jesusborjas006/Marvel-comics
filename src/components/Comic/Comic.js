import "./Comic.css";
import { Link } from "react-router-dom";

const Comic = (props) => {
  return (
    <div className="comic-card">
      <Link
        to={`/comicDetails/${props.id}`}
        onClick={() => {
          props.comicClicked(props.id);
          props.toggleForm();
        }}
      >
        <img
          className="comic-img"
          src={`${props.img.path}.${props.img.extension}`}
          alt="poster"
          id={props.id}
        />
      </Link>

      <Link
        to={`/comicDetails/${props.id}`}
        onClick={() => {
          props.comicClicked(props.id);
          props.toggleForm();
        }}
      >
        <h2 className="comic-title">{props.title}</h2>
      </Link>
    </div>
  );
};

export default Comic;
