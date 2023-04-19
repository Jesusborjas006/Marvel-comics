import "./ComicDetails.css";
import { Link } from "react-router-dom";

const ComicDetails = () => {
  return (
    <div className="comic-details">
      <h1>New Page</h1>

      <Link to="/">Go Back</Link>
    </div>
  );
};

export default ComicDetails;
