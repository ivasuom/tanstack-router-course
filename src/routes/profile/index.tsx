import { createFileRoute } from "@tanstack/react-router";
import Auth from "../../components/Auth";
import z from "zod";

const schema = z.object({
  redirect: z.string().optional(),
});

export const Route = createFileRoute("/profile/")({
  component: RouteComponent,
  validateSearch: schema,
});

function RouteComponent() {
  const { redirect } = Route.useSearch();

  return <Auth redirect={redirect} />;
}
