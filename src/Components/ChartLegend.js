import React, { useState } from "react";
import "./ChartLegend.scss";

function ChartLegend(props) {
  const [isOpen, setOpen] = useState(false);
  const windowWidth = window.innerWidth;

  return (
    <li>
      <div className="LegendTitle">
        <div className="HeaderIcons"></div>
        <div>{props.LegendTitle}</div>
      </div>
      <div className="LegendDescription">{props.LegendDescription}</div>
    </li>
  );
}




export default ChartLegend;

