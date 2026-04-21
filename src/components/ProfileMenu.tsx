import { Link } from "@tanstack/react-router";
import { PiUser, PiUserFill, PiGearSix, PiGearSixFill } from "react-icons/pi";
import { useAuthStore } from "../stores/authStore";

const ProfileMenu = () => {
  const { isAuthenticated } = useAuthStore();

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
      {isAuthenticated() && (
        <li className="nav-item">
          <Link to="/profile/edit" className="nav-link">
            {({ isActive }) => (isActive ? <PiGearSixFill /> : <PiGearSix />)}
          </Link>
        </li>
      )}
    </ul>
  );
};

export default ProfileMenu;
