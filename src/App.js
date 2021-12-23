import "./App.scss";

import React, { useState } from "react";
import MainSideMenu from "./Components/MainSideMenu";
import MainContentCover from "./Components/MainContentCover";
import ThingsWeDo from "./Components/ThingsWeDo";
import Electricity from "./Components/Electricity";
import Transportation from "./Components/Transportation";
import IsNuclearPowerDangerous from "./Components/IsNuclearPowerDangerous";

function App(props) {

  const [leftOpen, setLeftOpen] = useState(true);

  return (
    <div id="layout" className={`sideMenu${leftOpen}`}>
      <div id="left" className={leftOpen}>
        <div className="icon" onClick={() => setLeftOpen(!leftOpen)}>
          <svg width="24px" height="10px" viewBox="0 0 24 10" version="1.1">
              <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="Artboard" transform="translate(0.000000, -7.000000)" fill="#CCCCCC">
                      <path d="M23,15 C23.5522847,15 24,15.4477153 24,16 C24,16.5522847 23.5522847,17 23,17 L1,17 C0.44771525,17 6.76353751e-17,16.5522847 0,16 C-6.76353751e-17,15.4477153 0.44771525,15 1,15 L23,15 Z M23,7 C23.5522847,7 24,7.44771525 24,8 C24,8.55228475 23.5522847,9 23,9 L1,9 C0.44771525,9 6.76353751e-17,8.55228475 0,8 C-6.76353751e-17,7.44771525 0.44771525,7 1,7 L23,7 Z" id="menu"></path>
                  </g>
              </g>
          </svg>
        </div>
        <div className={`sidebar ${window.innerWidth < window.innerHeight ? !leftOpen : leftOpen}`}>
          <MainSideMenu />
        </div>
      </div>

      <div id="main">
        <MainContentCover id="sectionCover"/>
        <ThingsWeDo id="sectionThingsWeDo"/>
        <Electricity id="sectionElectricity"/>
        <Transportation id="sectionTransportation"/>
        <IsNuclearPowerDangerous id="sectionNuclear"/>
        

        <div id="test3" className="content">
          <h3>Main content</h3>
          <br />
          <p>
            Nam accumsan eleifend metus at imperdiet. Mauris pellentesque
            ipsum nisi, et fringilla leo blandit sed. In tempor, leo sit amet
            fringilla imperdiet, ipsum enim sagittis sem, non molestie nisi
            purus consequat sapien. Proin at velit id elit tincidunt iaculis
            ac ac libero. Vivamus vitae tincidunt ex. Duis sit amet lacinia
            massa. Quisque lobortis tincidunt metus ut commodo. Sed euismod
            quam gravida condimentum commodo.
          </p>
          <br />
          <p>
            Vivamus tincidunt risus ut sapien tincidunt, ac fermentum libero
            dapibus. Duis accumsan enim ac magna tempor, vestibulum euismod
            nisl pharetra. Ut dictum lacus eu venenatis vestibulum. Vestibulum
            euismod at arcu ac blandit. Curabitur eu imperdiet magna. Duis
            bibendum efficitur diam, eget placerat nunc imperdiet eget. Morbi
            porta at leo sed porta. Nullam eleifend eleifend quam eget dictum.
          </p>
          <br />
          <p>
            Sed nulla erat, lacinia sit amet dui at, cursus blandit neque. In
            ultricies, dui a laoreet dignissim, risus mi cursus risus, at
            luctus sem arcu non tortor. In hac habitasse platea dictumst.
            Etiam ut vulputate augue. Aenean efficitur commodo ipsum, in
            aliquet arcu blandit non. Praesent sed tempus dui, non eleifend
            nisi. Proin non finibus diam, quis finibus ante. Fusce aliquam
            faucibus mauris, id consequat velit ultricies at. Aliquam neque
            erat, fermentum non aliquam id, mattis nec justo. Nullam eget
            suscipit lectus.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;