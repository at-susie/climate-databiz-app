import React, { Component } from "react";
import Header from "../Components/Header";
import ChartLegend from "../Components/ChartLegend";
import DonutView from "../Components/DonutView";
import { ResponsivePie } from "@nivo/pie";
//import { BasicTooltip } from '@nivo/tooltip';
import "./ThingsWeDo.scss";

const data = [
  {
    id: "Making things",
    label: "Cement, steel, plastic",
    value: 31,
    color: "#F05D28",
  },
  {
    id: "Plugging in",
    label: "Electricity",
    value: 27,
    color: "#FF9833",
  },
  {
    id: "Growng things",
    label: "Animals, plants",
    value: 19,
    color: "#5C7FE6",
  },
  {
    id: "Getting around",
    label: "Planes, trucks, cargo ships",
    value: 16,
    color: "#13AAB3",
  },
  {
    id: "Warming & cooling",
    label: "Heating, cooling, refrigeration",
    value: 7,
    color: "#79C6E3",
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
  top: window.innerHeight > window.innerWidth ? 8 : 40,
  right: window.innerHeight > window.innerWidth ? 20 : 40,
  bottom: window.innerHeight > window.innerWidth ? 8 : 40,
  left: window.innerHeight > window.innerWidth ? 20 : 40,
};


function DonutChart(props) {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  return (
    <div className="MainChartThingsWeDo MainChartArea">
      <ResponsivePie
        data={data}
        valueFormat={(value) =>
          `${Number(value).toLocaleString("ru-RU", {
            minimumFractionDigits: 0,
          })}%`
        }
        margin={margin}
        tooltip={(label) => {
          console.log(label.datum.label);
          return <div className="toolTipContainer">{label.datum.label}</div>;
        }}
        innerRadius={windowHeight > windowWidth ? 0.6 : 0.7}
        startAngle={10}
        endAngle={370}
        padAngle={0.8}
        cornerRadius={1}
        activeOuterRadiusOffset={8}
        theme={theme}
        colors={["#F05D28", "#FF9833", "#5C7FE6", "#13AAB3", "#79C6E3"]}
        radialLabelsSkipAngle={10}
        radialLabelsTextXOffset={6}
        enableArcLinkLabels={windowHeight < windowWidth ? true : false}
        arcLinkLabelsTextColor="#dadee6"
        // arcLinkLabel={(e) => {
        //   return (
        //     e.id+" ("+e.label+")"
        // )}}
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
      <DonutView
        emphasizedValue="51"
        unitType="billion tons / year"
      />
    </div>
  );
}

function ThingsWeDo(props) {
  return (
    <section id={props.id}>
      <Header
        HeaderTitle="How much greenhouse gas is emitted by the things we do?"
        PageDescription="And we have to make it zero to avoid catastrophic disasters"
      />
      <DonutChart />
      <ChartLegend dataExample={data} />
    </section>
  );
}

export default ThingsWeDo;
