import React from "react";
import "../App.css";

const navItems = ["Home", "Service", "Blog", "Contact"];
export const NavBar = () => {
  return (
    <>
      <div className="main-nav">
        <ul>
          {navItems.map((item, index) => (
            <li className="nav-item" key={index}>
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
