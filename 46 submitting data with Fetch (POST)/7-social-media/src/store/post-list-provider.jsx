import { createContext, useEffect, useReducer, useState } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  fetching: false,

  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostlist = currPostList;
  if (action.type === "DELETE_POST") {
    newPostlist = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostlist = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostlist = [action.payload, ...currPostList];
  }

  return newPostlist;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const [fetching, setLodingState] = useState(false); // SPINNER

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };

  const addIntialPostList = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

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
    // return () => {
    //   console.log("cleaning up is called");
    //   controller.abort();
    // };

    //  CLEAN UP MTTHOD IS CALLED FOR CANCELING NON-REQUIRED CALLS
    // IT WILL CALL AT THE TIME OF USEEFFCT DEATH

    return () => {
      // console.log("clean up is called");
    };
  }, []);
  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        fetching,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
