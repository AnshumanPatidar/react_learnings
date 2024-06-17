import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-provider";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <>
      <div className="card m-3 my-4" style={{ width: "30rem" }}>
        <div className="card-body">
          <h5 className="card-title uppercase text-2xl font-bold">
            {post.title}
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger "
              onClick={() => deletePost(post.id)}
            >
              <MdDelete />{" "}
            </span>
          </h5>
          <p className="card-text">{post.body}</p>
          {post.tags.map((tag) => (
            <span key={tag} className="badge text-bg-secondary mx-1">
              {tag}
            </span>
          ))}
          <div className="alert alert-success mt-[12px]" role="alert">
            This post is reacted by {post.reactions} people.
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
