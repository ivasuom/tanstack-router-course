import { createFileRoute } from "@tanstack/react-router";
import apiClient from "../../services/apiClient";

interface Comment {
  id: number;
  postId: number;
  email: string;
  body: string;
}

export const Route = createFileRoute("/portal/posts_/$postId/comments")({
  component: RouteComponent,
  loader: async ({ params, abortController }) => {
    const { data } = await apiClient.get<Comment[]>("/comments", {
      params: { postId: params.postId },
      signal: abortController.signal,
    });

    return data;
  },
});

function RouteComponent() {
  const comments = Route.useLoaderData();

  return (
    <div className="my-3">
      {comments.map((comment) => (
        <div className="card mb-3" key={comment.id}>
          <div className="card-body">
            <p className="fw-bold mb-3">{comment.email.toLowerCase()}</p>
            <p>{comment.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
