import "./Form.css";

const Form = () => {
  return (
    <div>
      <form className="form">
        <select className="select-input">
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
    </div>
  );
};

export default Form;
