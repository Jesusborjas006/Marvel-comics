import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/">
        <h1 className="logo">Marvel Comics</h1>
      </Link>
    </nav>
  );
};

export default Navbar;
