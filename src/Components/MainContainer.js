import React, { useState, useEffect } from "react";
import "./MainContainer.scss";
import MainContentCover from "./MainContentCover";
import ThingsWeDo from "../Page/ThingsWeDo";
import Electricity from "../Page/Electricity";
import Transportation from "../Page/Transportation";
import IsNuclearPowerDangerous from "../Page/IsNuclearPowerDangerous";

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
      <MainContentCover id="sectionCover"/>
      <ThingsWeDo id="sectionThingsWeDo" />
      <Electricity id="sectionElectricity" />
      <Transportation id="sectionTransportation" />
      <IsNuclearPowerDangerous id="sectionNuclear" />
    </div>
  );
}

export default MainContainer;
