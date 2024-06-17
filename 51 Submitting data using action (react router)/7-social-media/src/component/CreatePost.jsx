import React, { useContext, useRef } from "react";
import { PostList } from "../store/post-list-provider";
import { Form, redirect, useNavigate } from "react-router-dom";

const CreatePost = () => {
  return (
    <>
      <div className="mt-[150px] w-[80%] p-3 ml-[20rem]">
        <Form method="POST">
          <div className="mb-3">
            <label htmlFor="userId" className="form-label" />
            Enter your User Id
            <input
              type="text"
              className="form-control"
              id="userId"
              name="userId"
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
              name="tags"
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
              name="title"
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
              name="body"
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
              name="reactions"
              aria-describedby="emailHelp"
              placeholder="How many people reacted to this post..."
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Post
          </button>
        </Form>
      </div>
    </>
  );
};

export async function createPostAction(data) {
  const formdata = await data.request.formData();
  const postData = Object.fromEntries(formdata);
  postData.tags = postData.tags.split(" ");
  console.log(postData);

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData), // you have to convert it the postData into json because its a js oject thats why using JSON.stringify
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
    });

  return redirect("/");
}

export default CreatePost;
