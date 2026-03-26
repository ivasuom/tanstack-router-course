import { createFileRoute } from "@tanstack/react-router";
import z from "zod";

const schema = z.object({
  query: z.coerce.string().trim().default("").catch(""),
  color: z
    .array(z.enum(["black", "gray", "white"]))
    .default([])
    .default([]),
});

export const Route = createFileRoute("/portal/products")({
  component: RouteComponent,
  validateSearch: schema,
});

function RouteComponent() {
  const searchParams = Route.useSearch();

  return <pre>{JSON.stringify(searchParams)}</pre>;
}
