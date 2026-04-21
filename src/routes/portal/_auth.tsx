import { createFileRoute, redirect, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/portal/_auth")({
  beforeLoad: ({ context, location }) => {
    if (!context.isAuthenticated()) {
      throw redirect({
        to: "/profile",
        search: { redirect: location.pathname },
      });
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  return <Outlet />;
}
