import { createFileRoute, Outlet } from "@tanstack/react-router";
import PortalMenu from "../components/PortalMenu";

export const Route = createFileRoute("/portal")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <PortalMenu />
      <div className="my-3">
        <Outlet />
      </div>
    </>
  );
}
