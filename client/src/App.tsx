import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Admin } from "./components/Admin";
import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Login } from "./components/Login";
import { Posts } from "./components/Posts";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/posts" component={Posts} />
        <Route path="/post/:id" component={Post} />
        <Route path="/admin" component={Admin} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
