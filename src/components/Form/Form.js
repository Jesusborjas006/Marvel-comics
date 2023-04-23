import "./Form.css";

const Form = (props) => {
  const handleClick = () => {
    let sortedComics = document.querySelector(".select-input");
    props.sortMovieFunc(sortedComics.value);
  };

  return (
    <div>
      <form className="form" onChange={() => handleClick()}>
        <select className="select-input">
          <option value="">Sort</option>
          <option value="Issue Number">Issue Number</option>
          <option value="Low Price">Price (Low to High)</option>
          <option value="High Price">Price (High to Low)</option>
        </select>
        <input
          type="text"
          className="search-input"
          placeholder="Search for comic..."
        />
      </form>
    </div>
  );
};

export default Form;
