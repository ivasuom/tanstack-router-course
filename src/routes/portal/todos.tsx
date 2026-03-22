import { createFileRoute } from "@tanstack/react-router";
import todoService from "../../services/todoService";

export const Route = createFileRoute("/portal/todos")({
  component: RouteComponent,
  loader: async ({ abortController }) => {
    const { data } = await todoService.getAllTodos(abortController.signal);

    return data;
  },
});

function RouteComponent() {
  const todos = Route.useLoaderData();

  return (
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
  );
}
