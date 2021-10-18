import React from "react";
import "./writepage.css";

export default function WritePage() {
  return (
    <div className="writePage">
      <img
        className="writePageImg"
        alt="img"
        src="https://images.unsplash.com/photo-1634364080677-4e4995f68818?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=856&q=80"
      ></img>
      <form className="writePageForm">
        <div className="writePageFormGroup">
          <label htmlFor="fileInput">
            <i className="writePageIcon far fa-plus-square"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }}></input>
          <input
            type="text"
            className="writeInput"
            placeholder="Title"
            id="title"
            autoFocus={true}
          ></input>
        </div>
        <div className="writePageFormGroup">
          <textarea
            placeholder="Tell your story....."
            type="text"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writePageSubmit">Publish</button>
      </form>
    </div>
  );
}
