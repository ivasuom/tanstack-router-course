import { createFileRoute, stripSearchParams } from "@tanstack/react-router";
import todoService from "../../services/todoService";
import z from "zod";

const schema = z.object({
  completed: z.boolean().optional().catch(undefined),
  page: z.number().min(1).default(1).catch(1),
});

type SchemaType = z.infer<typeof schema>;

const defaultValues: SchemaType = {
  page: 1,
};

export const Route = createFileRoute("/portal/todos")({
  component: RouteComponent,
  validateSearch: schema,
  search: { middlewares: [stripSearchParams(defaultValues)] },
  loader: async ({ abortController }) => {
    const { data } = await todoService.getAllTodos(abortController.signal);

    return data;
  },
});

function RouteComponent() {
  const todos = Route.useLoaderData();

  const searchParams = Route.useSearch();

  return (
    <>
      <pre>{JSON.stringify(searchParams)}</pre>
      <div className="mb-3 d-flex gap-2">
        <select className="form-select">
          <option value="">All</option>
          <option value="">Completed</option>
          <option value="">Todo</option>
        </select>
        <button className="btn btn-outline-primary">Previous</button>
        <button className="btn btn-outline-primary">Next</button>
      </div>
      <ul className="list-group">
        {todos.map((todo) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={todo.id}
          >
            <span>{todo.title}</span>
            <span>{todo.completed ? "Completed" : "Todo"}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
