import { useEffect, useState } from "react";
import ComicsContainer from "../ComicsContainer/ComicsContainer";
import Form from "../Form/Form";
import Navbar from "../Navbar/Navbar";
import "./App.css";
import md5 from "md5";
import { Route, Link } from "react-router-dom";
import ComicDetails from "../ComicDetails/ComicDetails";

function App() {
  const [comics, setComics] = useState({});
  const [displayForm, setDisplayForm] = useState(true);
  const [specificComic, setSpecificComic] = useState({});

  const getUrl = () => {
    let publicKey = "6a25bac30807eb952292f566a7bd499e";
    let privateKey = "f6b652ef11a6f5bf655a1be8d34e48ceea22d039";
    let ts = new Date().getTime();
    let stringToHash = ts + privateKey + publicKey;
    let hash = md5(stringToHash);
    let baseUrl = "http://gateway.marvel.com/v1/public/comics";
    let limit = 10;
    let url = `${baseUrl}?limit=${limit}&ts=${ts}&apikey=${publicKey}&hash=${hash}`;
    return url;
  };

  const getSpecificUrl = (id) => {
    let publicKey = "6a25bac30807eb952292f566a7bd499e";
    let privateKey = "f6b652ef11a6f5bf655a1be8d34e48ceea22d039";
    let ts = new Date().getTime();
    let stringToHash = ts + privateKey + publicKey;
    let hash = md5(stringToHash);
    let baseUrl = `http://gateway.marvel.com/v1/public/comics/${id}`;
    let limit = 10;
    let url = `${baseUrl}?limit=${limit}&ts=${ts}&apikey=${publicKey}&hash=${hash}`;
    return url;
  };

  useEffect(() => {
    fetch(getUrl())
      .then((response) => response.json())
      .then((data) => setComics(data));
  }, []);

  const getSpecificComic = (id) => {
    console.log("Comic is selected " + id);
    fetch(getSpecificUrl(id))
      .then((response) => response.json())
      .then((data) => setSpecificComic(data));
  };

  const toggleForm = () => {
    setDisplayForm(!displayForm);
  };

  const toggleWithLogo = () => {
    setDisplayForm(true);
  };

  return (
    <div>
      <Navbar toggle={toggleWithLogo} />
      {/* {displayForm && <Form />} */}

      <Route
        exact
        path="/"
        render={() => (
          <ComicsContainer allComics={comics} toggle={toggleForm} comicClicked={getSpecificComic} />
        )}
      />

      {/* <Route
        path="/comicDetails"
        render={() => (
          <ComicDetails specificComic={specificComic} toggle={toggleForm} />
        )}
      /> */}
    </div>
  );
}

export default App;
