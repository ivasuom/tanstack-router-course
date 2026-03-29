import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import postService from "../../services/postService";

export const Route = createFileRoute("/portal/posts")({
  component: RouteComponent,
  loader: async ({ abortController }) => {
    const { data } = await postService.getAllPosts(abortController.signal);

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
              preload="viewport"
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
