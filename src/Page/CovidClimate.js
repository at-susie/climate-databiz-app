import * as React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

import { ResponsiveBar } from "@nivo/bar";
import Header from "../Components/Header";
import "./CovidClimate.scss";

const data = [
  {
    id: "COVID-19",
    label: "14 deaths per 100,000 people",
    value: 14,
    color: "#F05D28",
    unit: "per 100,000 people",
  },
  {
    id: "Climate change",
    label: "Will cause 75 deaths per 100,000 people",
    value: 75,
    color: "#FF9833",
    unit: "per 100,000 people",
  },
];

const theme = {
  //background: "#2c2c2e",
  fontSize: window.innerWidth < 440 ? "13px" : "16px",

  labels: {
    text: {
      fontWeight: 900,
    },
  },
  axis: {
    textColor: "#ccc",
    tickColor: "#eee",
    ticks: {
      line: {
        stroke: "#555555",
      },
      text: {
        fill: "#ffffff",
      },
    },
    legend: {
      text: {
        fill: "#aaaaaa",
      },
    },
  },
  grid: {
    line: {
      stroke: "#555555",
    },
  },
};

const margin = {
  top: window.innerHeight > window.innerWidth ? 20 : 40,
  right: window.innerHeight > window.innerWidth ? 24 : 160,
  bottom: window.innerHeight > window.innerWidth ? 32 : 40,
  left: window.innerHeight > window.innerWidth ? 24 : 160,
};

const ValueOutside = ({ bars }) => {
  return bars.map((bar) => {
    const {
      key,
      width,
      height,
      x,
      y,
      data: { value, unit },
    } = bar;
    return (
      <g key={key} transform={`translate(${x + width / 2}, ${y - 10})`}>
        <text
          //transform={`translate(${width}, ${height })`}
          textAnchor="middle"
          fontSize="15px"
          fontWeight="bold"
          fill="#ccc"
        >
          {/* YOUR LABEL HERE */}
          {value} {"deaths per 100,000 people"}
        </text>
      </g>
    );
  });
};

function BarChart(props) {
  return (
    <div className="MainChartContainerIsNuclear MainChartArea">
      <ResponsiveBar
        data={data}
        margin={margin}
        theme={theme}
        label={(d) => `${d.value}` + " per 100,000 people"}
        //colors={["#79C6E3", "#F05D28", "#FF9833", "#5C7FE6", "#13AAB3"]}
        tooltip={(datum) => {
          //console.log(datum.unit);
          return (
            <div className="toolTipContainer">
              {datum.value} deaths per 100,000 people
            </div>
          );
        }}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        axisLeft={false}
        layers={[
          "grid",
          "axes",
          "bars",
          "markers",
          "legends",
          "annotations",
          //(props) => <ValueOutside {...props} />,
        ]}
      />
    </div>
  );
}

function CovidClimate(props) {
  return (
    <section id={props.id}>
      <Header
        HeaderTitle="Comparison in death rate between COVID-19 and climate change"
        PageDescription="Climate change could be five time worse than COVID-19 by the end of 2100. "
      />
      {/* <h3>Climate change could be five time worse than COVID-19 by the end of 2100.</h3> */}
      <BarChart />
    </section>
  );
}

export default CovidClimate;
