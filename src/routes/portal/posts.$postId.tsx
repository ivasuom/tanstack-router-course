import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/portal/posts/$postId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { postId } = Route.useParams();

  return <div>Hello "/portal/posts/{postId}"!</div>;
}
