import React, { useState, useEffect } from "react";
import "./SideNav.scss";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Slant as Hamburger } from 'hamburger-react'
import BookThumbnail from '../Assets/BookThumbnail.jpg';

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
      <div className="appLogoContainer">
        <AnchorLink href="#sectionCover">
          <img src={BookThumbnail} alt="Book thumbnail" />
        </AnchorLink>
      </div>
      <ul className="navMenu">
        <li className="SideMenuItem">
          <AnchorLink href="#sectionThingsWeDo">
            How much greenhouse gas is emitted by the things we do?
          </AnchorLink>
        </li>
        <li className="SideMenuItem">
          <AnchorLink href="#sectionElectricity">
            Electricity
          </AnchorLink>
        </li>
        <li className="SideMenuItem">
          <AnchorLink href="#sectionTransportation">
            Transportation
          </AnchorLink>
        </li>
        <li className="SideMenuItem">
          <AnchorLink href="#sectionNuclear">
            Is nuclear power dangerous?
          </AnchorLink>
        </li>
        <li className="SideMenuItem">
          <AnchorLink href="#test3">
            Comparison in death rate between COVID-19 and climate change
          </AnchorLink>
        </li>
      </ul>
      <div className="navButton" onClick={handleDrawer}>
        <Hamburger size={20} direction="left" />
      </div>
    </div>
  );
}

export default SideNav;
