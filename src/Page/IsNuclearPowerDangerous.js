import React, { Component } from "react";
import Header from "../Components/Header";
import { ResponsiveBar } from "@nivo/bar";
import "./IsNuclearPowerDangerous.scss";


const dataExample = [
  {
    id: "Coal",
    label: "Coal",
    value: 24.6,
    color: "#F05D28",
    unit: "%"
  },
  {
    id: "Oil",
    label: "Oil",
    value: 18.4,
    color: "#FF9833",
    unit: "%"
  },
  {
    id: "Biomass",
    label: "Biomass",
    value: 4.6,
    color: "#5C7FE6",
    unit: "%"
  },
  {
    id: "Gas",
    label: "Gas",
    value: 2.8,
    color: "#13AAB3",
    unit: "%"
  },
  {
    id: "Nuclear",
    label: "Nuclear",
    value: 0.07,
    color: "#13AAB3",
    unit: "%"
  },
];


const theme = {
  background: "#2c2c2e",
  axis: {
    textColor: "#ccc",
    fontSize: "18px",
    tickColor: "#eee",
    ticks: {
      line: {
        stroke: "#555555"
      },
      text: {
        fill: "#ffffff"
      }
    },
    legend: {
      text: {
        fill: "#aaaaaa"
      }
    }
  },
  grid: {
    line: {
      stroke: "#555555"
    }
  }
};


const ValueOutside = ({ bars }) => {
  return bars.map((bar) => {
    const {
      key,
      width,
      height,
      x,
      y,
      data: {
        value,
        unit 
      }
    } = bar;
    return (
      <g key={key} transform={`translate(${x + width/2}, ${y - 10})`}>
        <text
          //transform={`translate(${width}, ${height })`}
          textAnchor="middle"
          fontSize="16px"
          fontWeight={600}
          fill= "#ccc"
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
      <ResponsiveBar
        data={dataExample}
        margin={{
          top: 80,
          right: 120,
          bottom: 200,
          left: 120,
        }}
        innerRadius={0.7}
        padAngle={0.8}
        cornerRadius={1}
        activeOuterRadiusOffset={8}
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
          legendOffset: -60,
          fontSize: 24,
        }}
        layers={[
          "grid",
          "axes",
          "bars",
          "markers",
          "legends",
          "annotations",
          (props) => <ValueOutside {...props} />
        ]}
      />
    </div>
  );
}

function IsNuclearPowerDangerous(props) {
  return (
    <section id={props.id}>
      <Header
        HeaderTitle="Is nuclear power dangerous?"
        PageDescription="Not if you're counting the bumber of death caused per unit of electricity, as this chart shows. The numbers here cover the entire process of generating energy, from extracting fuels to turning them into electricity, as well as the environmental problems they cause, such as air pollution."
      />
      <BarChart />
    </section>
  );
}


export default IsNuclearPowerDangerous;
