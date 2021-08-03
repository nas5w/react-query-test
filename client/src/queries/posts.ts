import { useQuery } from "react-query";
import { QueryError } from "./errors";
import { fetchWithAuth } from "./baseQuery";

type Post = { id: number; title: string };

function getPosts() {
  return fetchWithAuth<Post[]>("/api/posts");
}

export const usePosts = () => {
  return useQuery<Post[], QueryError>("posts", getPosts, { retry: 0 });
};

function getPost({ id }: { id: number }) {
  return fetchWithAuth<Post>(`/api/posts/${id}`);
}

export const usePost = ({ id }: { id: number }) => {
  return useQuery<Post, QueryError>(["posts", id], () => getPost({ id }), {
    retry: 0,
  });
};
