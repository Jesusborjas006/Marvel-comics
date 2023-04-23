import "./Navbar.css";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

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

Navbar.propTypes = {
  toggle: PropTypes.func,
};
