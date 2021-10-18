import React from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./homepage.css";

export default function HomePage() {
  return (
    <>
      <Header></Header>
      <div className="home">
        <Posts></Posts>
        {/* <Sidebar></Sidebar> */}
      </div>
    </>
  );
}
