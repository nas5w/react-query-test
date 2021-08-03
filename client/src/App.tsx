import { Codes } from "./queries/errors";
import { usePosts } from "./queries/posts";

function App() {
  const { isLoading, error, data } = usePosts();

  if (isLoading) {
    return <>Loading...</>;
  }

  if (error?.status === Codes.UNAUTHORIZED) {
    return <>Logout</>;
  }

  if (error) {
    return <>Bad news</>;
  }

  return <div>{JSON.stringify(data)}</div>;
}

export default App;
