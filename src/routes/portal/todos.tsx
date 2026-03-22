import { createFileRoute } from "@tanstack/react-router";
import axios from "axios";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export const Route = createFileRoute("/portal/todos")({
  component: RouteComponent,
  loader: async ({ abortController }) => {
    const { data } = await axios.get<Todo[]>(
      "https://jsonplaceholder.typicode.com/todos",
      { signal: abortController.signal },
    );

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
