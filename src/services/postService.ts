import apiClient from "./apiClient";

interface Post {
  id: number;
  title: string;
  body: string;
}

class PostService {
  getAllPosts(signal: AbortSignal) {
    return apiClient.get<Post[]>("/posts", {
      signal,
    });
  }

  getPostById(postId: string, signal: AbortSignal) {
    return apiClient.get<Post>("/posts/" + postId, {
      signal,
    });
  }
}

export default new PostService();
