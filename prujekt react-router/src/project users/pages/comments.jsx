import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import fetchData from "./fatch";

const Comments = () => {
  const [sow, setSow] = useState(false);
  let postId = useParams("postsId");

  let comments;

  const { data, loading, error } = fetchData(`posts/${postId.postsId}`);
  comments = fetchData(`posts/${postId.postsId}/comments`).data;

  const sowComments = () => {
    setSow(!sow);
  };

  return (
    <>
      <h3>post: {data.title}</h3>
      <h5>body: {data.body}</h5>
      <button onClick={sowComments}>view comments</button>
      {sow &&
        comments.map((comm, idx) => (
          <h5 key={idx}>
            {" "}
            Comment {idx + 1}: {comm.body}{" "}
          </h5>
        ))}
    </>
  );
};

export default Comments;
