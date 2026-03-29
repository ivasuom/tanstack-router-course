import {
  createFileRoute,
  Outlet,
  useLocation,
  Link,
} from "@tanstack/react-router";
import postService from "../../services/postService";

export const Route = createFileRoute("/portal/posts_/$postId")({
  component: RouteComponent,
  loader: async ({ params, abortController }) => {
    const { data } = await postService.getPostById(
      params.postId,
      abortController.signal,
    );

    return data;
  },
  staleTime: 1000 * 60 * 20,
  gcTime: 1000 * 60 * 40,
});

function RouteComponent() {
  const post = Route.useLoaderData();
  const location = useLocation();
  const isCommentsVisible = location.pathname.endsWith("/comments");

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link
        to={
          isCommentsVisible
            ? "/portal/posts/$postId"
            : "/portal/posts/$postId/comments"
        }
        params={{ postId: post.id.toString() }}
        activeProps={{ className: "" }}
        className="btn btn-primary"
        preload="render"
      >
        {isCommentsVisible ? "Hide comments" : "Show comments"}
      </Link>
      <Outlet />
    </div>
  );
}
