import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/portal/products")({
  component: RouteComponent,
});

function RouteComponent() {
  const searchParams = Route.useSearch();

  return <pre>{JSON.stringify(searchParams)}</pre>;
}
