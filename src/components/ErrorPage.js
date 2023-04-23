import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <h2 className="error-message">No page found. Please go back.</h2>
      <Link to="/" className="error-back-btn">
        Go Back
      </Link>
    </>
  );
};

export default ErrorPage;
