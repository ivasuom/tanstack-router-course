import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/portal/posts_/$postId/comments')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/portal/posts_/$postId/comments"!</div>
}
