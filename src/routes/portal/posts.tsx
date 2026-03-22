import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import apiClient from "../../services/apiClient";

interface Post {
  id: number;
  title: string;
  body: string;
}

export const Route = createFileRoute("/portal/posts")({
  component: RouteComponent,
  loader: async ({ abortController }) => {
    const { data } = await apiClient.get<Post[]>("/posts", {
      signal: abortController.signal,
    });

    return data;
  },
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
