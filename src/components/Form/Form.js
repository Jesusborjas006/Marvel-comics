import { useState } from "react";
import "./Form.css";

const Form = (props) => {
  const [sortComics, setSortComics] = useState({});
  // console.log(sortComics);

  const handleSortInput = (event) => {
    setSortComics({ [event.target.name]: event.target.value });
  };

  if(sortComics.sort === "Price") {
    props.sortPrice()
  } else {
    // console.log("not sorted")
  }

  return (
    <div>
      <form className="form">
        <select
          className="select-input"
          name="sort"
          value={sortComics.sort}
          onChange={(event) => handleSortInput(event)}
        >
          <option value="">Sort</option>
          <option value="Date">Date</option>
          <option value="Issue Number">Issue Number</option>
          <option value="Price">Price</option>
        </select>
        <input
          type="text"
          className="search-input"
          placeholder="Search for comic..."
        />
      </form>
      {/* <h1>{sortComics}</h1> */}
    </div>
  );
};

export default Form;
