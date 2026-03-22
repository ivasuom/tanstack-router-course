import apiClient from "./apiClient";

interface Comment {
  id: number;
  postId: number;
  email: string;
  body: string;
}

class CommentService {
  getCommentsByPostId(postId: string, signal: AbortSignal) {
    return apiClient.get<Comment[]>("/comments", {
      params: { postId },
      signal,
    });
  }
}

export default new CommentService();
