import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import NotFound from "./components/NotFound";

export const router = createRouter({
  routeTree: routeTree,
  defaultNotFoundComponent: NotFound,
});

type RouterType = typeof router;

declare module "@tanstack/react-router" {
  interface Register {
    router: RouterType;
  }
}
