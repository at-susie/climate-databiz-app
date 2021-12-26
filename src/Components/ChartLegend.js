import React, { Component } from "react";
import "./ChartLegend.scss";

function ChartLegend(props) {
  //const color = 
  return (
    <ul className="chartLegendContainer">
      {props.dataExample.map((post) => (
        <li className="chartLegendItem" key={post.id}>
          <div className="legendColor" style={{ background: post.color }}></div>
          <div>
            <div className="legendTitle">{post.id}</div>
            <div className="legendDescription">{post.label}</div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ChartLegend;