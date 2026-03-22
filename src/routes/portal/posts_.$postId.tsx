import { createFileRoute, Outlet, useNavigate } from "@tanstack/react-router";
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
  const navigate = useNavigate();

  const handleClick = () => {
    navigate({
      to: "/portal/posts/$postId/comments",
      params: { postId: post.id.toString() },
    });
  };

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={handleClick} className="btn btn-primary">
        Show comments
      </button>
      <Outlet />
    </div>
  );
}
