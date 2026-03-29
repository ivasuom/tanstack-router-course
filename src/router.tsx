import { createRouter, createRouteMask } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import NotFound from "./components/NotFound";
import ErrorFound from "./components/ErrorFound";
import Pending from "./components/Pending";

const postCommentsToPostMask = createRouteMask({
  routeTree,
  from: "/portal/posts/$postId/comments",
  to: "/portal/posts/$postId",
  params: ({ postId }) => {
    return { postId };
  },
});

export const router = createRouter({
  routeTree: routeTree,
  routeMasks: [postCommentsToPostMask],
  defaultNotFoundComponent: NotFound,
  defaultErrorComponent: ErrorFound,
  defaultPendingComponent: Pending,
  defaultPendingMs: 250,
  defaultPendingMinMs: 100,
  defaultStaleTime: Infinity,
  defaultGcTime: 1000 * 60 * 20,
});

type RouterType = typeof router;

declare module "@tanstack/react-router" {
  interface Register {
    router: RouterType;
  }
}
