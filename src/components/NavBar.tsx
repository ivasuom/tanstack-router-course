import { Link } from "@tanstack/react-router";
import { PiUser, PiUserFill } from "react-icons/pi";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        TSR
      </Link>
      <ul className="navbar-nav d-flex flex-row">
        <li className="nav-item">
          <Link to="/portal" className="nav-link">
            Portal
          </Link>
        </li>
        <li className="nav-item ms-3">
          <Link to="/profile" className="nav-link">
            {({ isActive }) => (isActive ? <PiUserFill /> : <PiUser />)}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
