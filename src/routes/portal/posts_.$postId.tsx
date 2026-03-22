import {
  createFileRoute,
  Outlet,
  useLocation,
  Link,
} from "@tanstack/react-router";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
}

export const Route = createFileRoute("/portal/posts_/$postId")({
  component: RouteComponent,
  loader: async ({ params, abortController }) => {
    const { data } = await axios.get<Post>(
      "https://jsonplaceholder.typicode.com/posts/" + params.postId,
      { signal: abortController.signal },
    );

    return data;
  },
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
      >
        {isCommentsVisible ? "Hide comments" : "Show comments"}
      </Link>
      <Outlet />
    </div>
  );
}
