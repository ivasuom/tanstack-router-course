import { createFileRoute, Outlet } from "@tanstack/react-router";
import ProfileMenu from "../components/ProfileMenu";

export const Route = createFileRoute("/profile")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <ProfileMenu />
      <div className="my-3">
        <Outlet />
      </div>
    </>
  );
}
