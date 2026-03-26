import apiClient from "./apiClient";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

class TodoService {
  getAllTodos(signal: AbortSignal, page: number, limit: number) {
    return apiClient.get<Todo[]>("/todos", {
      signal,
      params: { _page: page, _limit: limit },
    });
  }
}

export default new TodoService();
