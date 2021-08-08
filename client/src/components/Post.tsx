import { useParams } from "react-router-dom";
import { usePost } from "../queries/posts";
import { RequestWrapper } from "../queries/RequestWrapper";

type Props = {
  id: string;
};

const PostContent = ({ id }: Props) => {
  const { data } = usePost(id);
  return (
    <>
      <h3>{data?.title}</h3>
    </>
  );
};

export const Post = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <>
      <h2>Single Post</h2>
      <RequestWrapper>
        <PostContent id={id} />
      </RequestWrapper>
    </>
  );
};
