import * as React from "react";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import NavBar from "../components/NavBar";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

interface RouterContext {
  isAuthenticated: () => boolean;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <NavBar />
      <Outlet />
      <TanStackRouterDevtools />
    </React.Fragment>
  );
}
