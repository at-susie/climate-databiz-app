import React, { Component } from "react";
import Header from "../Components/Header";
import ChartLegend from "../Components/ChartLegend";
import { ResponsivePie } from "@nivo/pie";
import DonutView from "../Components/DonutView";
import "./Electricity.scss";



const data = [
  {
    id: "Coal",
    //label: "Coal",
    value: 36,
    color: "#F05D28",
  },
  {
    id: "Natural gas",
    //label: "Natural gas",
    value: 23,
    color: "#FF9833",
  },
  {
    id: "Hydropower",
    //label: "Hydropower",
    value: 16,
    color: "#5C7FE6",
  },
  {
    id: "Nuclear",
    //label: "Nuclear",
    value: 10,
    color: "#13AAB3",
  },
  {
    id: "Renewables",
    //label: "Renewables",
    value: 11,
    color: "#79C6E3",
  },
  {
    id: "Oil",
    //label: "Oil",
    value: 3,
    color: "#BF60F0",
  },
  {
    id: "Other",
    //label: "Other",
    value: 1,
    color: "#CAF060",
  }
];

const theme = {
  labels: {
    text: {
      fontSize: 17,
      fontWeight: "bold",
      fontFamily: "Source Sans Pro, sans-serif",
      fill: '#161617'
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
          return <div className="toolTipContainer">{label.datum.label}: {label.datum.value}%</div>;
        }}
        innerRadius={0.7}
        startAngle={10}
        endAngle={370}
        padAngle={0.8}
        cornerRadius={1}
        activeOuterRadiusOffset={8}
        theme={theme}
        colors={["#F05D28", "#FF9833", "#5C7FE6", "#13AAB3", "#79C6E3", "#BF60F0", "#CAF060"]}
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
        emphasizedValue="27%"
        unitType="of 51 billion tons per year"
      />
    </div>
  );
}

function Electricity(props) {
  return (
    <section id={props.id}>
      <Header
        HeaderTitle="Greenhouse gas emitted from electricity"
        PageDescription="27% of 51 billion tons of greenhouse gases are produced from electricity."
      />
      <DonutChart />
      <ChartLegend dataExample={data} />
    </section>
  );
}





export default Electricity;
