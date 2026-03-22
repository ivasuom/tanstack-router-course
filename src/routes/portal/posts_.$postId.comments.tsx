import { createFileRoute } from "@tanstack/react-router";
import commentService from "../../services/commentService";

export const Route = createFileRoute("/portal/posts_/$postId/comments")({
  component: RouteComponent,
  loader: async ({ params, abortController }) => {
    const { data } = await commentService.getCommentsByPostId(
      params.postId,
      abortController.signal,
    );

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
