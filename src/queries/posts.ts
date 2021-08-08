import { useQuery } from "react-query";
import axios, { AxiosError } from "axios";

type Post = { id: number; title: string };

async function getPosts() {
  const { data } = await axios.get<Post[]>("/api/posts");
  return data;
}

export const usePosts = () => {
  return useQuery<Post[], AxiosError>("posts", getPosts, { retry: 0 });
};

// This will intentionally fail (there is no /api/post endpoint)
async function getPost(id: string) {
  const { data } = await axios.get<Post>(`/api/post/${id}`);
  return data;
}

export const usePost = (id: string) => {
  return useQuery<Post, AxiosError>(["post", id], () => getPost(id), {
    retry: 0,
  });
};

// This will intentionally return a 401 status
async function getPostAdmin() {
  const { data } = await axios.get<Post>("/api/post/admin");
  return data;
}

export const usePostAdmin = () => {
  return useQuery<Post, AxiosError>("post", getPostAdmin, {
    retry: 0,
  });
};
