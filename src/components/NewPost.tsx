import React, { MouseEventHandler, useState } from "react";
import { queryClient } from "..";
import { useCreatePost } from "../queries/posts";

export const NewPost = () => {
  const [title, setTitle] = useState("");
  const createPost = useCreatePost(title);

  const handleSubmit: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    await createPost.mutateAsync();
    setTitle("");
    queryClient.invalidateQueries("posts");
  };

  return (
    <>
      <h2>Create Post</h2>
      <label htmlFor="title">Title: </label>
      <form>
        <input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={createPost.isLoading}
        >
          Create
        </button>
      </form>
    </>
  );
};
