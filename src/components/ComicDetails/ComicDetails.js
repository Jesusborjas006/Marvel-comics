import { useEffect, useState } from "react";
import "./ComicDetails.css";
import { Link } from "react-router-dom";
import md5 from "md5";
import PropTypes from "prop-types";

const ComicDetails = (props) => {
  const [comicDetails, setComicDetails] = useState({});
  const [errorMessage, setErrorMessage] = useState()
  
  const getSpecificUrl = (id) => {
    let publicKey = "ff0d5561d11fcd117359f7100e6820aa";
    let privateKey = "c1c898aabe4d8540d3c5a2f4d0f4135a8195d7bb";
    let ts = new Date().getTime();
    let stringToHash = ts + privateKey + publicKey;
    let hash = md5(stringToHash);
    let baseUrl = `http://gateway.marvel.com/v1/public/comics/${id}`;
    let url = `${baseUrl}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
    return url;
  };

  useEffect(() => {
    fetch(getSpecificUrl(props.comicId))
      .then((response) => {
        if(response.ok) {
          console.log(response)
          return response.json()
        } else {
          throw new Error("Failed to retrieve data")
        }
      })
      .then((data) => setComicDetails(data))
      .catch(error => setErrorMessage(error))
  }, [props.comicId]);

  if (comicDetails.data) {
    return (
      <div className="comic-details">
        <Link to="/" onClick={() => props.toggle()} className="back-btn">
          Go Back
        </Link>
        {errorMessage === "" && <h2 className="error-message">Failed to revieve data</h2>}
        <div className="main-detail-container">
          <div className="detail-img-container">
            <img
              src={`${comicDetails.data.results[0].thumbnail.path}.${comicDetails.data.results[0].thumbnail.extension}`}
              alt="comic"
            />
          </div>
          <div className="detail-text-container">
            <h2 className="detail-title">
              {comicDetails.data.results[0].title}
            </h2>
            {comicDetails.data.results[0].description === "" ? (
              <p className="description">Description not Available</p>
            ) : (
              <p className="description">
                {comicDetails.data.results[0].description}
              </p>
            )}
            <p className="print-price">
              <span>Print Price:</span>
              {comicDetails.data.results[0].prices[0].price !== 0
                ? ` $${comicDetails.data.results[0].prices[0].price}`
                : "Not available"}
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default ComicDetails;

ComicDetails.prototypes = {
  toggle: PropTypes.func,
  comicId: PropTypes.number
}
