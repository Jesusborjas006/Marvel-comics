import "./ComicsContainer.css";
import Comic from "../Comic/Comic";

const ComicsContainer = (props) => {
  console.log("Props<>>>>>>", props.allComics);
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
  } else {
    <p>Loading...</p>;
  }
};

export default ComicsContainer;
