import React, { Component } from "react";
import Header from "./Header";
import { ResponsivePie } from "@nivo/pie";
import "./Electricity.scss";

const dataExample = [
  {
    id: "Coal",
    label: "Coal",
    value: 36,
  },
  {
    id: "Natural gas",
    label: "Natural gas",
    value: 23,
  },
  {
    id: "Hydropower",
    label: "Hydropower",
    value: 16,
  },
  {
    id: "Nuclear",
    label: "Nuclear",
    value: 10,
  },
  {
    id: "Renewables",
    label: "Renewables",
    value: 11,
  },
  {
    id: "Oil",
    label: "Oil",
    value: 3,
  },
  {
    id: "Other",
    label: "Other",
    value: 1,
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

class DonutChart extends React.Component {
  render() {
    return (
      <div className="MainChartElectricity MainChartArea">
        <ResponsivePie
          data={dataExample}
          valueFormat={(value) =>
            `${Number(value).toLocaleString("ru-RU", {
              minimumFractionDigits: 0,
            })}%`
          }
          margin={{
            top: 80,
            right: 120,
            bottom: 200,
            left: 120,
          }}
          innerRadius={0.7}
          startAngle={10}
          endAngle={370}
          padAngle={0.8}
          cornerRadius={1}
          activeOuterRadiusOffset={8}
          theme={theme}
          colors={["#79C6E3", "#F05D28", "#FF9833", "#5C7FE6", "#13AAB3"]}
          radialLabelsSkipAngle={10}
          radialLabelsTextXOffset={6}
          radialLabelsTextColor="#333333"
          arcLinkLabelsTextColor="#ccc"
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
        />
      </div>
    );
  }
}

class Electricity extends React.Component {
  render() {
    return (
      <section id={this.props.id}>
        <Header
          HeaderTitle="Electricity"
          PageDescription="27% of 51 billion tons of greenhouse gases are produced from electricity."
        />
        <DonutChart />
      </section>
    );
  }
}

export default Electricity;
