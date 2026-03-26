import apiClient from "./apiClient";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

class TodoService {
  getAllTodos(
    signal: AbortSignal,
    page: number,
    limit: number,
    completed?: boolean,
  ) {
    return apiClient.get<Todo[]>("/todos", {
      signal,
      params: { _page: page, _limit: limit, completed },
    });
  }
}

export default new TodoService();
