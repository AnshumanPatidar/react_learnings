import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-provider";
import Welcome_msg from "./Welcome-msg";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, fetching } = useContext(PostListData);

  return (
    <>
      <div className="mt-60 ml-[20rem]">
        {fetching && <LoadingSpinner></LoadingSpinner>}
        {/* FETCHING TRUE TOH
        SPINNER DIKHE GA */}
        {!fetching && postList.length === 0 && <Welcome_msg></Welcome_msg>}
        {!fetching &&
          postList.map((post) => <Post key={post.id} post={post}></Post>)}
      </div>
    </>
  );
};

export default PostList;
