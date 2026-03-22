import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
}

export const Route = createFileRoute("/portal/posts")({
  component: RouteComponent,
  loader: async () => {
    const { data } = await axios.get<Post[]>(
      "https://jsonplaceholder.typicode.com/posts",
    );

    console.log(data);
  },
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
