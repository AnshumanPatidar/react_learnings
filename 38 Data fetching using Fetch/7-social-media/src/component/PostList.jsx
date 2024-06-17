import React, { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-provider";
import Welcome_msg from "./Welcome-msg";

const PostList = () => {
  const { postList, addIntialPostList } = useContext(PostListData);

  const handleOnClick = (event) => {
    event.preventDefault();

    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => addIntialPostList(data.posts));
  };

  return (
    <>
      <div className="mt-40">
        {postList.length === 0 && (
          <Welcome_msg handleOnClick={handleOnClick}></Welcome_msg>
        )}
        {postList.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </>
  );
};

export default PostList;
