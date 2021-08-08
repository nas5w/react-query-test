import { usePosts } from "../queries/posts";
import { RequestWrapper } from "../queries/RequestWrapper";

const PostList = () => {
  const { data } = usePosts();
  return (
    <div>
      <ul>
        {data?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export const Posts = () => (
  <>
    <h2>Posts</h2>
    <RequestWrapper>
      <PostList />
    </RequestWrapper>
  </>
);
