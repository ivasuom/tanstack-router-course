import {
  createFileRoute,
  stripSearchParams,
  useNavigate,
} from "@tanstack/react-router";
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
  loaderDeps: ({ search }) => ({ page: search.page }),
  loader: async ({ abortController, deps }) => {
    const limit = 20;

    const { data } = await todoService.getAllTodos(
      abortController.signal,
      deps.page,
      limit,
    );

    return data;
  },
});

function RouteComponent() {
  const todos = Route.useLoaderData();

  const searchParams = Route.useSearch();

  const navigate = useNavigate({ from: Route.fullPath });

  const updateSearch = <K extends keyof SchemaType>(
    key: K,
    value: SchemaType[K],
  ) => {
    navigate({
      search: (prev) => ({ ...prev, [key]: value }),
    });
  };
  return (
    <>
      <pre>{JSON.stringify(searchParams)}</pre>
      <div className="mb-3 d-flex gap-2">
        <select
          className="form-select"
          value={
            searchParams.completed === undefined
              ? ""
              : searchParams.completed.toString()
          }
          onChange={(e) => {
            const completed =
              e.target.value === ""
                ? undefined
                : e.target.value === "true"
                  ? true
                  : false;

            updateSearch("completed", completed);
          }}
        >
          <option value="">All</option>
          <option value="true">Completed</option>
          <option value="false">Todo</option>
        </select>
        <button
          className="btn btn-outline-primary"
          onClick={() => {
            const previousPage = searchParams.page - 1;

            updateSearch("page", previousPage);
          }}
          disabled={searchParams.page <= 1}
        >
          Previous
        </button>
        <button
          className="btn btn-outline-primary"
          onClick={() => {
            const nextPage = searchParams.page + 1;

            updateSearch("page", nextPage);
          }}
        >
          Next
        </button>
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
