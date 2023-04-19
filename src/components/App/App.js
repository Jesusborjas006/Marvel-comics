import { useEffect, useState } from "react";
import ComicsContainer from "../ComicsContainer/ComicsContainer";
import Form from "../Form/Form";
import Navbar from "../Navbar/Navbar";
import "./App.css";
import md5 from "md5";

function App() {
  const [comics, setComics] = useState({});

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

  useEffect(() => {
    fetch(getUrl())
      .then((response) => response.json())
      .then((data) => setComics(data));
  }, []);

  return (
    <div>
      <Navbar />
      <Form />
      <ComicsContainer allComics={comics} />
    </div>
  );
}

export default App;
