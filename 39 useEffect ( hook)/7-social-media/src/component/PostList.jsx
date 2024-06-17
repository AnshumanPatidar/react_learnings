import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-provider";
import Welcome_msg from "./Welcome-msg";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, addIntialPostList } = useContext(PostListData);
  const [fetching, setLodingState] = useState(false); // SPINNER

  // PRO useEffect
  // using abordController

  // using useEffect for fething the posts only ones  , in the start
  // first agrument is a funtion/ method and second argument is a dependence

  // loading state bhi yhi pr h
  useEffect(() => {
    setLodingState(true); // SPINNER TRUE
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addIntialPostList(data.posts);
        setLodingState(false); // SPINNER FALSE
      });

    // using about is good it will cancel the calls if you moved to differnet components
    return () => {
      console.log("cleaning up is called");
      controller.abort();
    };

    //  CLEAN UP MTTHOD IS CALLED FOR CANCELING NON-REQUIRED CALLS
    // IT WILL CALL AT THE TIME OF USEEFFCT DEATH

    // return () => {
    //   console.log("clean up is called");
    // };
  }, []);

  console.log(fetching);

  return (
    <>
      <div className="mt-60">
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
