import { useGetCommentsQuery } from "../../store/api/commentsAPI";
import Comment from "./Comment";

const CommentList = () => {
  const { data, error, isLoading } = useGetCommentsQuery();
  if (isLoading) {
    return <p>loading...</p>;
  }
  if (error) {
    return <p>error is there</p>;
  }
  return (
    <>
      <h3>Comments List</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        {data?.map((comment) => {
          return (
            <Comment
              key={comment.id}
              name={comment.name}
              email={comment.email}
              body={comment.body}
            />
          );
        })}
      </div>
    </>
  );
};

export default CommentList;
