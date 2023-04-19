import "./ComicsContainer.css";
import Comic from "../Comic/Comic";

const ComicsContainer = (props) => {
  console.log(props)
  if (props.allComics.data) {
    const comicElements = props.allComics.data.results.map((comic) => (
      <Comic title={comic.title} img={comic.thumbnail} id={comic.id} key={comic.id} />
    ));

    return <div className="comics-container">{comicElements}</div>;
  } else {
    console.log("Oh no!");
    <p>Loading.....</p>;
  }
};

export default ComicsContainer;
