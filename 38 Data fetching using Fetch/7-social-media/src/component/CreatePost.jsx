import React, { useContext, useRef } from "react";
import { PostList } from "../store/post-list-provider";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleCreatePostSubmit = (event) => {
    event.preventDefault();

    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    console.log(userId, postTitle, postBody, reactions, tags);
    addPost(userId, postTitle, postBody, reactions, tags);
  };

  return (
    <>
      <div className="mt-[150px] w-[80%] p-3">
        <form onSubmit={handleCreatePostSubmit}>
          <div className="mb-3">
            <label htmlFor="userId" className="form-label" />
            Enter your User Id
            <input
              type="text"
              className="form-control"
              id="userId"
              ref={userIdElement}
              aria-describedby="emailHelp"
              placeholder="Your User ID..."
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tags" className="form-label">
              Enter the tags
            </label>
            <input
              type="text"
              className="form-control"
              id="tags"
              ref={tagsElement}
              aria-describedby="emailHelp"
              placeholder="Please Enter tags using space.."
            />
          </div>

          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Post Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              ref={postTitleElement}
              aria-describedby="emailHelp"
              placeholder="How are you feeing today...."
            />
          </div>
          <div className="mb-3">
            <label htmlFor="body" className="form-label">
              Post Content
            </label>
            <textarea
              rows={4}
              type="text"
              className="form-control"
              ref={postBodyElement}
              placeholder="Tell us more about it..."
              id="body"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="reactions" className="form-label">
              Number of reactions
            </label>
            <input
              type="text"
              className="form-control"
              id="reactions"
              ref={reactionsElement}
              aria-describedby="emailHelp"
              placeholder="How many people reacted to this post..."
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Post
          </button>
        </form>
      </div>
    </>
  );
};

export default CreatePost;
