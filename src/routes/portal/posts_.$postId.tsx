import { createFileRoute } from "@tanstack/react-router";
import axios from "axios";
import ErrorFound from "../../components/ErrorFound";
import Pending from "../../components/Pending";

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
  errorComponent: ErrorFound,
  pendingComponent: Pending,
  pendingMs: 250,
  pendingMinMs: 100,
});

function RouteComponent() {
  const post = Route.useLoaderData();

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
