import React, { Component } from "react";
import Header from "./Header";
import { ResponsiveBar } from "@nivo/bar";
import "./IsNuclearPowerDangerous.scss";

const dataExample = [
  {
    id: "Coal",
    label: "Coal",
    value: 24.6,
  },
  {
    id: "Oil",
    label: "Oil",
    value: 18.4,
  },
  {
    id: "Biomass",
    label: "Biomass",
    value: 4.6,
  },
  {
    id: "Gas",
    label: "Gas",
    value: 2.8,
  },
  {
    id: "Nuclear",
    label: "Nuclear",
    value: 0.07,
  },
];

const theme = {
  labels: { 
    text: { 
      fontSize: 16,
      textColor: '#ccc',
    } 
  },
  legends: {
    text: {
      fontSize: 16,
      textColor: '#ccc',
    },
  },
};

function BarChart(props) {
  return (
    <div className="MainChartContainerIsNuclear MainChartArea">
      <ResponsiveBar
        data={dataExample}
        valueFormat={(value) =>
          `${Number(value).toLocaleString("ru-RU", {
            minimumFractionDigits: 2,
          })} %`
        }
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
        colors={["#79C6E3", "#F05D28", "#FF9833", "#5C7FE6", "#13AAB3"]}
        radialLabelsSkipAngle={10}
        radialLabelsTextXOffset={6}
        radialLabelsTextColor="#333333"
        radialLabelsLinkOffset={0}
        radialLabelsLinkDiagonalLength={16}
        radialLabelsLinkHorizontalLength={24}
        radialLabelsLinkStrokeWidth={1}
        radialLabelsLinkColor={{
          from: "color",
        }}
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor="#333333"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Deaths per TWh",
          legendPosition: "middle",
          legendOffset: -60,
          fontSize: 20,
        }}
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
