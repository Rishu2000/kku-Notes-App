import React from "react";

const Header = ({ dark, children, className }) => {
  dark = !!dark ? "dark" : "false";
  return (
    <nav
      className={
        "navbar navbar-" +
        dark +
        " bg-" +
        dark +
        (className ? " " + className : "")
      }
    >
      <div className="container-fluid">
        <span className="navbar-brand">{children}</span>
      </div>
    </nav>
  );
};

export default Header;
