import React from "react";
import Post from "./Post";

import Welcome_msg from "./Welcome-msg";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  const postList = useLoaderData();

  return (
    <>
      <div className="mt-60 ml-[20rem]">
        {postList.length === 0 && <Welcome_msg></Welcome_msg>}
        {postList.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </>
  );
};

export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};

export default PostList;
