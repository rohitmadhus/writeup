import React from "react";
import "./singlepost.css";

export default function SinglePost(props) {
  const { post } = props;
  console.log(post);
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" alt="img" src={post.image}></img>
        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon fas fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author : <b>Rohit Madhu</b>
          </span>
          <span>3 hours ago</span>
        </div>
        <p className="singlePostDesc">{post.content}</p>
      </div>
    </div>
  );
}
