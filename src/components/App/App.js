import { useEffect, useState } from "react";
import ComicsContainer from "../ComicsContainer/ComicsContainer";
import Form from "../Form/Form";
import Navbar from "../Navbar/Navbar";
import "./App.css";
import md5 from "md5";
import { Route } from "react-router-dom";
import ComicDetails from "../ComicDetails/ComicDetails";

function App() {
  const [comics, setComics] = useState({});
  const [displayForm, setDisplayForm] = useState(true);
  const [specificComicID, setSpecificComicID] = useState(null);
  const [error, setError] = useState("");

  const getUrl = () => {
    let publicKey = "ff0d5561d11fcd117359f7100e6820aa";
    let privateKey = "c1c898aabe4d8540d3c5a2f4d0f4135a8195d7bb";
    let ts = new Date().getTime();
    let stringToHash = ts + privateKey + publicKey;
    let hash = md5(stringToHash);
    let baseUrl = "http://gateway.marvel.com/v1/public/comics";
    let limit = 20;
    let url = `${baseUrl}?limit=${limit}&ts=${ts}&apikey=${publicKey}&hash=${hash}`;
    return url;
  };

  useEffect(() => {
    fetch(getUrl())
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to revieve data");
        }
      })
      .then((data) => {
        console.log(data.data.results)
        setComics(data.data.results);
      })
      .catch((error) => setError(error));
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

  const updatedSort = (type) => {
    let result = [...comics];

    if (type === "Issue Number") {
      result.sort((a, b) => {
        return a.issueNumber - b.issueNumber;
      });
      setComics(result);
    } else if (type === "Low Price") {
      result.sort((a, b) => {
        return a.prices[0].price - b.prices[0].price;
      });
      setComics(result);
    } else if (type === "High Price") {
      result.sort((a, b) => {
        return b.prices[0].price - a.prices[0].price;
      });
      setComics(result);
    }
  };

  return (
    <div>
      <Navbar toggle={toggleWithLogo} />
      {displayForm && <Form sortMovieFunc={updatedSort} />}

      {error !== "" && <h2 className="error-message">Failed to revieve data</h2>}
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
        render={() => (
          <ComicDetails toggle={toggleForm} comicId={specificComicID} />
        )}
      />
    </div>
  );
}

export default App;
