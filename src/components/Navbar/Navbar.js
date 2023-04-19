import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className="nav">
      <Link to="/" onClick={() => props.toggle()}>
        <h1 className="logo">Marvel Comics</h1>
      </Link>
    </nav>
  );
};

export default Navbar;
