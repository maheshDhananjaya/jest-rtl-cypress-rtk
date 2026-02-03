import type { FC } from "react";

interface ICommentProps {
  name: string;
  email: string;
  body: string;
}

const Comment: FC<ICommentProps> = ({ name, email, body }) => {
  return (
    <div
      style={{
        border: "1px solid",
        padding: "40px",
      }}
    >
      <p>{name}</p>
      <p>{email}</p>
      <p>{body}</p>
    </div>
  );
};

export default Comment;
