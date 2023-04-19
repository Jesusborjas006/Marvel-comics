import "./ComicsContainer.css";
import Comic from "../Comic/Comic";

const ComicsContainer = (props) => {
  const comicElements = props.allComics.map((comic) => <Comic id={comic.id} />);
  return (
    <div className="comics-container">
      {comicElements}
    </div>
  );
};

export default ComicsContainer;
