import { useEffect, useState } from "react";
import Post from "./Post";

interface IPostPros {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const PostList = () => {
  const [posts, setPosts] = useState<IPostPros[]>([]);

  useEffect(() => {
    async function fetchPostData() {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?limit=10",
      );
      const data = await res.json();
      setPosts(data);
    }
    fetchPostData();
  }, []);

  return (
    <>
      <h3>Post List</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        {posts.map((post) => {
          return <Post key={post.id} title={post.title} body={post.body} />;
        })}
      </div>
    </>
  );
};

export default PostList;
