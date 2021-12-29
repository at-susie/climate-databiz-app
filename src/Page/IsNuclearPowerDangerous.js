import React, { Component } from "react";
import Header from "../Components/Header";
import { ResponsiveBar } from "@nivo/bar";
import "./IsNuclearPowerDangerous.scss";

const data = [
  {
    id: "Coal",
    label: "Coal",
    value: 24.6,
    color: "#F05D28",
    unit: "%",
  },
  {
    id: "Oil",
    label: "Oil",
    value: 18.4,
    color: "#FF9833",
    unit: "%",
  },
  {
    id: "Biomass",
    label: "Biomass",
    value: 4.6,
    color: "#5C7FE6",
    unit: "%",
  },
  {
    id: "Gas",
    label: "Gas",
    value: 2.8,
    color: "#13AAB3",
    unit: "%",
  },
  {
    id: "Nuclear",
    label: "Nuclear",
    value: 0.07,
    color: "#13AAB3",
    unit: "%",
  },
];

const theme = {
  //background: "#2c2c2e",
  fontSize: "14px",
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
  left: window.innerHeight > window.innerWidth ? 72 : 160,
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
          fontSize="16px"
          fontWeight={600}
          fill="#ccc"
        >
          {/* YOUR LABEL HERE */}
          {value} {"%"}
        </text>
      </g>
    );
  });
};

function BarChart(props) {
  return (
    <div className="MainChartContainerIsNuclear MainChartArea">
      <div className="barchartContainer">
        <ResponsiveBar
          data={data}
          margin={margin}
          theme={theme}
          label={false}
          //colors={["#79C6E3", "#F05D28", "#FF9833", "#5C7FE6", "#13AAB3"]}
          animate={true}
          motionStiffness={90}
          motionDamping={15}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Deaths per TWh (%)",
            legendPosition: "middle",
            legendOffset: -40,
            fontSize: "14px",
          }}
          layers={[
            "grid",
            "axes",
            "bars",
            "markers",
            "legends",
            "annotations",
            (props) => <ValueOutside {...props} />,
          ]}
        />
      </div>
    </div>
  );
}

function IsNuclearPowerDangerous(props) {
  return (
    <section id={props.id}>
      <Header
        HeaderTitle="Is nuclear power dangerous?"
        PageDescription="It's the only carbon-free energy source that can reliably deliver power day and night, through every season, almost everywhere on earth that has been proven to work on a large scale. No other clean energy source even comes close to what nuclear already provides today. No other clean energy source even comes close to what nuclear already provides today."
      />
      <h3>The number of death caused per unit of electricity</h3>
      <BarChart />
      <div className="plainDescription">
        <p>
          One of the biggest problems is that the nuclear power generation has
          been widely recognized just dangerous. High-profile accidents at Three
          Mile Island in the United States, Chernobyl, and Fukushima put a
          spotlight on all these risks. But the real problem is that we just
          stopped trying to advance the field.
        </p>
      </div>
    </section>
  );
}

export default IsNuclearPowerDangerous;
