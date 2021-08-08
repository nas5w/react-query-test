import { usePostAdmin } from "../queries/posts";
import { RequestWrapper } from "../queries/RequestWrapper";

const AdminDetails = () => {
  const { data } = usePostAdmin();
  return <h3>Edit post {data?.title}</h3>;
};

export const Admin = () => (
  <>
    <h2>Admin</h2>
    <RequestWrapper>
      <AdminDetails />
    </RequestWrapper>
  </>
);
