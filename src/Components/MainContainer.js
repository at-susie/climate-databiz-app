import React, { useState, useEffect } from "react";
import "./MainContainer.scss";
import MainContentCover from "../Page/MainContentCover";
import ThingsWeDo from "../Page/ThingsWeDo";
import Electricity from "../Page/Electricity";
import Transportation from "../Page/Transportation";
import IsNuclearPowerDangerous from "../Page/IsNuclearPowerDangerous";
import HowMuchSpace from "../Page/HowMuchSpace";
import CovidClimate from "../Page/CovidClimate";

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
      
      <ThingsWeDo id="sectionThingsWeDo" />
      <Electricity id="sectionElectricity" />
      <HowMuchSpace id="sectionHowMuchSpace" />
      <IsNuclearPowerDangerous id="sectionNuclear" />
      <Transportation id="sectionTransportation" />
      <CovidClimate id="sectionCovidClimate"/>
      {/* <MainContentCover id="sectionCover"/> */}
    </div>
  );
}

export default MainContainer;
