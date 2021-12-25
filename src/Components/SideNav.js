import React, { useState, useEffect } from "react";
import "./SideNav.scss";

const windowWidth = window.innerWidth;
const breakPoint = 960;

function SideNav(props) {
  const [isMobile, setIsMobile] = useState(true)
  const [drawerOpen, setDrawerOpen] = useState(false)

  //choose the screen size 
  const handleResize = () => {
    console.log("Page resize")
    if (window.innerWidth < breakPoint) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  const handleDrawer = () => {
    console.log("Click button")
    setDrawerOpen(s => !s)
  }

  const pageLoad = () => {
    console.log("Page load")
    if (window.innerWidth < breakPoint) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  // create an event listener
  useEffect(() => {
    window.addEventListener('load', pageLoad);
    window.addEventListener("resize", handleResize);
  })

  return (
    <div className={`sideNav ${(isMobile) ? "isMobile" : "isDesktop"} ${(drawerOpen) ? "drawerOpen" : "drawerClose"}`}>
      <ul className="navMenu">
        <li>test nav</li>
        <li>test nav</li>
        <li>test nav</li>
      </ul>
      <div className="navButton" onClick={handleDrawer}>X</div>
    </div>
  );
}

export default SideNav;
