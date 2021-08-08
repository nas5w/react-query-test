import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Admin } from "./components/Admin";
import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Login } from "./components/Login";
import { Posts } from "./components/Posts";
import { NewPost } from "./components/NewPost";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/posts" component={Posts} />
        <Route path="/post/:id" component={Post} />
        <Route path="/admin" component={Admin} />
        <Route path="/login" component={Login} />
        <Route path="/create-post" component={NewPost} />
      </Switch>
    </Router>
  );
}

export default App;
