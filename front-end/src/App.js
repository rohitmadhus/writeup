import TopBar from "./components/topbar/TopBar";
import HomePage from "./pages/home/HomePage";
import Login from "./pages/login/Login";
import PostPage from "./pages/post/PostPage";
import WritePage from "./pages/write/WritePage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SinglePost from "./components/singlePost/SinglePost";

function App() {
  return (
    <Router>
      <TopBar></TopBar>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/create">
          <WritePage />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/post/:postId" component={PostPage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
