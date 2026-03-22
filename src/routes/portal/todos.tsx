import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/portal/todos')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/portal/todos"!</div>
}
