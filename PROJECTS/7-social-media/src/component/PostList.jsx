import React, { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-provider";

const PostList = () => {
  const { postList } = useContext(PostListData);
  return (
    <>
      <div className="mt-40">
        {postList.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </>
  );
};

export default PostList;
