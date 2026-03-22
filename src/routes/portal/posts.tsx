import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/portal/posts")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <ul className="list-group">
        <li className="list-group-item">
          <Link to="/portal/posts/$postId" params={{ postId: "1" }}>
            Post 1
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/portal/posts/$postId" params={{ postId: "2" }}>
            Post 2
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/portal/posts/$postId" params={{ postId: "3" }}>
            Post 3
          </Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
