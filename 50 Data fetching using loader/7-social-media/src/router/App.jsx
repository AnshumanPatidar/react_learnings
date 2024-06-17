import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../component/Header";
import Footer from "../component/Footer";
import SideBar from "../component/SideBar";
import CreatePost from "../component/CreatePost";
import PostList from "../component/PostList";
import { useState } from "react";
import PostListProvider from "../store/post-list-provider";

import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <PostListProvider>
        <div className="flex ">
          <SideBar></SideBar>

          <div className="w-full">
            <Header></Header>
            <Outlet></Outlet>
          </div>
        </div>
      </PostListProvider>
    </>
  );
}

export default App;
