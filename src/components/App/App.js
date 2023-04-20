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
  const [specificComicID, setSpecificComicID] = useState(null);

  console.log("specificId in APP<>>>>>>>>>", specificComicID);

  const getUrl = () => {
    let publicKey = "ff0d5561d11fcd117359f7100e6820aa";
    let privateKey = "c1c898aabe4d8540d3c5a2f4d0f4135a8195d7bb";
    let ts = new Date().getTime();
    let stringToHash = ts + privateKey + publicKey;
    let hash = md5(stringToHash);
    let baseUrl = "http://gateway.marvel.com/v1/public/comics";
    let limit = 10;
    let url = `${baseUrl}?limit=${limit}&ts=${ts}&apikey=${publicKey}&hash=${hash}`;
    return url;
  };

  useEffect(() => {
    fetch(getUrl())
      .then((response) => response.json())
      .then((data) => setComics(data));
  }, []);

  const toggleForm = () => {
    setDisplayForm(!displayForm);
  };

  const toggleWithLogo = () => {
    setDisplayForm(true);
  };

  const getComicID = (id) => {
    setSpecificComicID(id);
  };

  console.log("Component rendered");

  return (
    <div>
      <Navbar toggle={toggleWithLogo} />
      {displayForm && <Form />}

      <Route
        exact
        path="/"
        render={() => (
          <ComicsContainer
            allComics={comics}
            toggle={toggleForm}
            comicClicked={getComicID}
          />
        )}
      />

      <Route
        path="/comicDetails/:id"
        render={() => <ComicDetails toggle={toggleForm} comicId={specificComicID}  />}
      />
    </div>
  );
}

export default App;
