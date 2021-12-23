import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./MainSideMenu.scss";

function MainSideMenu({ toggled }) {
  const [isOpen, setOpen] = useState(false);
  const windowWidth = window.innerWidth;

  return (
    <div className="SideMenu">
      <div>
        <div className="SideMenuItem">
          <AnchorLink href="#sectionThingsWeDo">
            How much greenhouse gas is emitted by the things we do?
          </AnchorLink>
        </div>
        <div className="SideMenuItem">
          <AnchorLink href="#sectionElectricity">
          Electricity
          </AnchorLink>
        </div>
        <div className="SideMenuItem">
          <AnchorLink href="#sectionTransportation">
            Transportation
          </AnchorLink>
        </div>
        <div className="SideMenuItem">
          <AnchorLink href="#sectionNuclear">
            Is nuclear power dangerous?
          </AnchorLink>
        </div>
        <div className="SideMenuItem">
          <AnchorLink href="#test3">
            Comparison in death rate between COVID-19 and climate change
          </AnchorLink>
        </div>
      </div>
    </div>
  );
}

export default MainSideMenu;
