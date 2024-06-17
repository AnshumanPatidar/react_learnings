import React from "react";
import ReactDOM from "react-dom/client";
import App from "./router/App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom"; // bydefault export should be in {}
import CreatePost, { createPostAction } from "./component/CreatePost.jsx";
import PostList, { postLoader } from "./component/PostList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <PostList></PostList>,
        loader: postLoader,
      },
      {
        path: "/create-post",
        element: <CreatePost></CreatePost>,
        action: createPostAction,
      },
    ],
  },
]); // array leta h

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
