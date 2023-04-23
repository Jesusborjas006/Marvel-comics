import "./ComicsContainer.css";
import Comic from "../Comic/Comic";
import PropTypes from "prop-types";

const ComicsContainer = (props) => {
  if (props.allComics.length) {
    const comicElements = props.allComics.map((comic) => (
      <Comic
        title={comic.title}
        printPrice={comic.prices[0].price}
        img={comic.thumbnail}
        id={comic.id}
        key={comic.id}
        toggleForm={props.toggle}
        comicClicked={props.comicClicked}
      />
    ));

    return <div className="comics-container">{comicElements}</div>;
  }
};

export default ComicsContainer;

ComicsContainer.prototypes = {
  allComics: PropTypes.array,
  toggle: PropTypes.func,
  comicClicked: PropTypes.func,
};
