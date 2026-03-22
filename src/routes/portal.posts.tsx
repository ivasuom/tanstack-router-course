import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/portal/posts')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/portal/posts"!</div>
}
