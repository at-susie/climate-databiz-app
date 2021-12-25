import React, { useState, useEffect } from "react";
import "./MainContainer.scss";
import ThingsWeDo from "./ThingsWeDo";
import Electricity from "./Electricity";

const windowWidth = window.innerWidth;
const breakPoint = 960;

function MainContainer(props) {
  const [width, setWidth] = useState(windowWidth);
  const [isMobile, setIsMobile] = useState(width < breakPoint);

  useEffect(() => {
    window.addEventListener("resize", () => {
      const ismobile = window.innerWidth < breakPoint;
      if (ismobile !== isMobile) setIsMobile(ismobile);
    }, false);
  }, [isMobile]);

  return (
    <div className={`mainContainer ${isMobile ? "isMobile" : "isDesktop"}`}>
      <ThingsWeDo />
      <Electricity />
    </div>
  );
}

export default MainContainer;
