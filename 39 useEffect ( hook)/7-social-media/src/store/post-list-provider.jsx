import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addIntialPostList: () => {},
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

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
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
  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
        addIntialPostList,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
