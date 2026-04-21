import { RouterProvider } from "@tanstack/react-router";
import { router } from "./router";
import { useAuthStore } from "./stores/authStore";

const App = () => {
  const { isAuthenticated } = useAuthStore();

  return <RouterProvider router={router} context={{ isAuthenticated }} />;
};

export default App;
