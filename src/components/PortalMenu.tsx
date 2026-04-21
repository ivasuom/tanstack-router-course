import { Link } from "@tanstack/react-router";
import { useAuthStore } from "../stores/authStore";

const PortalMenu = () => {
  const { isAuthenticated } = useAuthStore();

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
      {isAuthenticated() && (
        <>
          <li className="nav-item">
            <Link
              to="/portal/todos"
              className="nav-link"
              // search={{ completed: true, page: 1 }}
            >
              Todos
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/portal/products"
              className="nav-link"
              // search={{
              //   query: "leyboard",
              //   color: ["black", "gray"],
              //   inStock: true,
              //   priceRange: { minPrice: 300, maxPrice: 800 },
              // }}
            >
              Products
            </Link>
          </li>
        </>
      )}
    </ul>
  );
};

export default PortalMenu;
