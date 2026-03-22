import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import NotFound from "./components/NotFound";
import ErrorFound from "./components/ErrorFound";
import Pending from "./components/Pending";

export const router = createRouter({
  routeTree: routeTree,
  defaultNotFoundComponent: NotFound,
  defaultErrorComponent: ErrorFound,
  defaultPendingComponent: Pending,
  defaultPendingMs: 250,
  defaultPendingMinMs: 100,
});

type RouterType = typeof router;

declare module "@tanstack/react-router" {
  interface Register {
    router: RouterType;
  }
}
