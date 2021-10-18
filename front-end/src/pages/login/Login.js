import React from "react";
import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input type="text" placeholder="Email"></input>
        <label>Password</label>
        <input type="text" placeholder="Password"></input>
        <button className="loginBtn">Login</button>
      </form>
      <button className="loginPageRegisterBtn">Register</button>
    </div>
  );
}
