import { createFileRoute, stripSearchParams } from "@tanstack/react-router";
import z from "zod";

const schema = z.object({
  query: z.coerce.string().trim().default("").catch(""),
  color: z
    .array(z.enum(["black", "gray", "white"]))
    .default([])
    .default([]),
  inStock: z.boolean().optional(),
  priceRange: z
    .object({
      minPrice: z.number().min(1).catch(1),
      maxPrice: z.number().min(1).max(1000).catch(1000),
    })
    .default({ minPrice: 1, maxPrice: 1000 })
    .transform(({ minPrice, maxPrice }) => ({
      minPrice: Math.min(minPrice, maxPrice),
      maxPrice: maxPrice,
    })),
});

type SchemaType = z.infer<typeof schema>;

const defaultValues: SchemaType = {
  query: "",
  color: [],
  priceRange: { minPrice: 1, maxPrice: 1000 },
};

export const Route = createFileRoute("/portal/_auth/products")({
  component: RouteComponent,
  validateSearch: schema,
  search: { middlewares: [stripSearchParams(defaultValues)] },
});

function RouteComponent() {
  const searchParams = Route.useSearch();

  return <pre>{JSON.stringify(searchParams)}</pre>;
}
