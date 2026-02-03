import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/login/LoginForm";
import PostList from "./components/post/PostList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/post" element={<PostList />} />
    </Routes>
  );
}

export default App;
