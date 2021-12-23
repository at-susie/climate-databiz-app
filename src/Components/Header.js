import React from "react";
import "./Header.scss";

function Header(props) {
  return (
    <header className="pageHeader">
      <div className="title">
        <h1>{props.HeaderTitle}</h1>
        <div className="HeaderIcons"></div>
      </div>
      <div className="description">{props.PageDescription}</div>
    </header>
  );
}

export default Header;
