import type { FC } from "react";

interface IPost {
  title: string;
  body: string;
}

const Post: FC<IPost> = ({ title, body }) => {
  return (
    <div style={{ border: "1px solid", padding: "40px" }}>
      <span>{title}</span>
      <br />
      <span>{body}</span>
    </div>
  );
};

export default Post;
