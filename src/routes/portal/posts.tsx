import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import axios from "axios";
import ErrorFound from "../../components/ErrorFound";
import Pending from "../../components/Pending";

interface Post {
  id: number;
  title: string;
  body: string;
}

export const Route = createFileRoute("/portal/posts")({
  component: RouteComponent,
  loader: async ({ abortController }) => {
    const { data } = await axios.get<Post[]>(
      "https://jsonplaceholder.typicode.com/posts",
      { signal: abortController.signal },
    );

    return data;
  },
  errorComponent: ErrorFound,
  pendingComponent: Pending,
  pendingMs: 250,
  pendingMinMs: 100,
});

function RouteComponent() {
  const posts = Route.useLoaderData();

  return (
    <>
      <ul className="list-group">
        {posts.map((post) => (
          <li className="list-group-item" key={post.id}>
            <Link
              to="/portal/posts/$postId"
              params={{ postId: post.id.toString() }}
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
}
