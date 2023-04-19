import { useState } from "react";
import ComicsContainer from "../ComicsContainer/ComicsContainer";
import Form from "../Form/Form";
import Navbar from "../Navbar/Navbar";
import "./App.css";

function App() {
  const [comics, setComics] = useState([{ id: 1 }, { id: 2 }, { id: 3 }]);

  return (
    <div>
      <Navbar />
      <Form />
      <ComicsContainer allComics={comics} />
    </div>
  );
}

export default App;
