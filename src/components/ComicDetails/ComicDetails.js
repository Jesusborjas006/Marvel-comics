import { useEffect, useState } from "react";
import "./ComicDetails.css";
import { Link } from "react-router-dom";
import md5 from "md5";

const ComicDetails = (props) => {
  const [comicDetails, setComicDetails] = useState({});

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
      .then((response) => response.json())
      .then((data) => setComicDetails(data));
  }, [props.comicId]);

  if (comicDetails.data) {
    return (
      <div className="comic-details">
        <Link to="/" onClick={() => props.toggle()} className="back-btn">
          Go Back
        </Link>
        <div className="main-detail-container">
          <div className="detail-img-container">
            <img
              src={`${comicDetails.data.results[0].thumbnail.path}.${comicDetails.data.results[0].thumbnail.extension}`}
              alt="comic"
            />
          </div>
          <div className="detail-text-container">
            <h2 className="detail-title">{comicDetails.data.results[0].title}</h2>
            <p className="description">{comicDetails.data.results[0].description}</p>
            <p className="print-price"><span>Print Price:</span> ${comicDetails.data.results[0].prices[0].price}</p>
          </div>
        </div>
      </div>
    );
  }
};

export default ComicDetails;
