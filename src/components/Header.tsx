import { Link } from "react-router-dom";

export const Header = () => (
  <header>
    <h1>My Website</h1>
    <ul>
      <li>
        Successful query: <Link to="/posts">All posts</Link>
      </li>
      <li>
        Failed query (404): <Link to="/post/4">Bad post link</Link>
      </li>
      <li>
        Unauthenticated query (401): <Link to="/admin">Admin section</Link>
      </li>
    </ul>
  </header>
);
