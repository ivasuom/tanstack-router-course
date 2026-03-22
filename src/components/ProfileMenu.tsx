import { Link } from "@tanstack/react-router";
import { PiUser, PiUserFill, PiGearSix, PiGearSixFill } from "react-icons/pi";

const ProfileMenu = () => {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/profile"
          activeOptions={{ exact: true }}
          className="nav-link"
        >
          {({ isActive }) => (isActive ? <PiUserFill /> : <PiUser />)}
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/profile/edit" className="nav-link">
          {({ isActive }) => (isActive ? <PiGearSixFill /> : <PiGearSix />)}
        </Link>
      </li>
    </ul>
  );
};

export default ProfileMenu;
