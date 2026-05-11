import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/login/LoginForm";
import PostList from "./components/post/PostList";
import CommentList from "./components/comments/CommentList";
import Xss from "./components/xss/Xss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/post" element={<PostList />} />
      <Route path="/comments/" element={<CommentList />} />
      <Route path="/xss" element={<Xss />} />
    </Routes>
  );
}

export default App;
