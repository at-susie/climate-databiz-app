import React, { Component } from "react";
import "./DonutView.scss"

function DonutView(props) {
  return (
    <div className="DonutViewContainer">
      <div className="BigNumber">
        <div className="emphasizedValue">{props.emphasizedValue}</div>
        <div className="unitType">{props.unitType}</div>
      </div>
    </div>
  );
}

export default DonutView;
