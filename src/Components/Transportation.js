import React, { Component } from "react";
import Header from "./Header";
import { ResponsivePie } from "@nivo/pie";
import ChartLegend from "./ChartLegend";
import "./Transportation.scss";

const dataExample = [
  {
    id: "Passenger cars",
    label: "Cars, SUVs, and motorcycles",
    value: 47,
  },
  {
    id: "Gerbage trucks, buses, etc.",
    label: "Gerbage trucks, buses, etc.",
    value: 30,
  },
  {
    id: "Cargo and cruise ships",
    label: "Cargo and cruise ships",
    value: 10,
  },
  {
    id: "Airplanes",
    label: "Airplanes",
    value: 10,
  },
  {
    id: "Other",
    label: "Other",
    value: 3,
  },
];

const theme = {
  labels: {
    text: {
      fontSize: 17,
      fontWeight: "bold",
      fontFamily: "Source Sans Pro, sans-serif",
      //fill: '#ccc'
    },
  },
  legends: {
    text: {
      fontSize: 16,
    },
  },
};

const margin = {
  top: window.innerHeight > window.innerWidth ? 60 : 80,
  right: window.innerHeight > window.innerWidth ? 80 : 120,
  bottom: window.innerHeight > window.innerWidth ? 160 : 200,
  left: window.innerHeight > window.innerWidth ? 80 : 120,
};

function DonutChart(props) {
  return (
    <div className="MainChartTransportation MainChartArea">
      <ResponsivePie
        data={dataExample}
        valueFormat={(value) =>
          `${Number(value).toLocaleString("ru-RU", {
            minimumFractionDigits: 0,
          })}%`
        }
        margin={margin}
        //legends={legends}
        innerRadius={window.innerHeight > window.innerWidth ? 0.4 : 0.7}
        startAngle={10}
        endAngle={370}
        padAngle={0.8}
        cornerRadius={1}
        activeOuterRadiusOffset={8}
        theme={theme}
        colors={["#79C6E3", "#F05D28", "#FF9833", "#5C7FE6", "#13AAB3"]}
        radialLabelsSkipAngle={10}
        radialLabelsTextXOffset={6}
        arcLinkLabelsTextColor="#ccc"
        radialLabelsLinkOffset={0}
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
      />
      <ChartLegend
        LegendTitle="Title"
        LegendDescription="Description"
      />
    </div>
  );
}

function Transportation(props) {
  return (
    <section id={props.id}>
      <Header
        HeaderTitle="Transportation"
        PageDescription="Transportation sector is responsible for 16% (8.2 billion tons) of 51 billion tons of greenhouse gases per year."
      />
      <DonutChart />
    </section>
  );
}

export default Transportation;
