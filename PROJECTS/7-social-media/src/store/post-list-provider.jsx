import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostlist = currPostList;
  if (action.type === "DELETE_POST") {
    newPostlist = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostlist = [action.payload, ...currPostList];
  }

  return newPostlist;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

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
      }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "going to Mumbai",
    body: "hi friends , i am going to mumbai for my vacations , Hope to ejoy a lot. Peace out",
    reactions: "2",
    userId: "user-g",
    tags: ["vacation", "mumbai", "enjoying"],
  },
  {
    id: "2",
    title: "pass ho gya",
    body: "4 saal ki masti ke baad bhi ho gye h pass , hard to believe",
    reactions: "4",
    userId: "user-g",
    tags: ["unbelievable", "graduating"],
  },
];

export default PostListProvider;
