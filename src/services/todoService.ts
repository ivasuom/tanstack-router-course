import apiClient from "./apiClient";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

class TodoService {
  getAllTodos(signal: AbortSignal) {
    return apiClient.get<Todo[]>("/todos", {
      signal,
    });
  }
}

export default new TodoService();
