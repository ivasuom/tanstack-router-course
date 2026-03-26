import { Link } from "@tanstack/react-router";

const PortalMenu = () => {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/portal" activeOptions={{ exact: true }} className="nav-link">
          Portal
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/portal/posts" className="nav-link">
          Posts
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/portal/todos" className="nav-link">
          Todos
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/portal/products"
          className="nav-link"
          search={{ query: "leyboard", color: ["black", "gray"] }}
        >
          Products
        </Link>
      </li>
    </ul>
  );
};

export default PortalMenu;
