import React from "react";
import { useState } from "react";
import {
  Nav,
  Bars,
  NavBtn,
  NavBtnLink,
  NavLink,
  NavMenu,
} from "./TopbarElements";
import "./topbar.css";

export default function TopBar() {
  const [navCollpase, setNavCollapse] = useState(false);
  const collapaseNavBtn = () => {
    setNavCollapse(!navCollpase);
    console.log(navCollpase);
  };
  return (
    <Nav>
      <NavLink to="/">
        <i className="fas fa-signature"></i>
        <h3>Write Up</h3>
      </NavLink>
      <Bars onClick={collapaseNavBtn}></Bars>
      <NavMenu style={navCollpase ? { display: "flex" } : {}}>
        <NavLink to="/" exact>
          <h5>Home</h5>
        </NavLink>
        <NavLink to="/about">
          <h5>About Us</h5>
        </NavLink>
        <NavLink to="/contact">
          <h5>Contact Us</h5>
        </NavLink>
        <NavLink to="/write">
          <h5>Write</h5>
        </NavLink>
        <NavBtn>
          <NavBtnLink to="/signin">
            <h5>Sign in</h5>
          </NavBtnLink>
        </NavBtn>
      </NavMenu>
    </Nav>

    // <div className="topbar">
    //   <div className="topbarLeft">
    //     <i className="topIcon fab fa-facebook-square"></i>
    //     <i className="topIcon fab fa-instagram"></i>
    //   </div>
    //   <div className="topbarCenter">
    //     <ul className="topList">
    //       <li>
    //         <Link className="topListItem" to="/">
    //           Home
    //         </Link>
    //       </li>
    //       <li>
    //         <Link className="topListItem" to="/about">
    //           About Us
    //         </Link>
    //       </li>
    //       <li>
    //         <Link className="topListItem" to="/contact">
    //           Contact Us
    //         </Link>
    //       </li>
    //       <li>
    //         <Link className="topListItem" to="/write">
    //           write
    //         </Link>
    //       </li>
    //       <li>
    //         <Link className="topListItem" to="/login">
    //           Login
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    //   <div className="topbarRight">
    //     <img
    //       className="topImg"
    //       src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
    //       alt="profilepic"
    //     ></img>
    //     <i className="topSearchIcon fas fa-search"></i>
    //   </div>
    // </div>
  );
}
