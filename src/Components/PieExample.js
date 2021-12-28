import * as React from "react";
import { render } from "react-dom";
import { Pie } from "@nivo/pie";
import { ThemeProvider, SvgWrapper } from "@nivo/core";
import { BoxLegendSvg } from "@nivo/legends";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const data = [
  {
    id: "css",
    label: "css (custom)",
    value: 410,
    color: "hsl(19, 70%, 50%)"
  },
  {
    id: "sass",
    label: "sass",
    value: 175,
    color: "hsl(213, 70%, 50%)"
  },
  {
    id: "javascript",
    label: "javascript",
    value: 128,
    color: "hsl(58, 70%, 50%)"
  }
];

const PieExample = () => (
  <div style={styles}>
    <Pie
      width={400}
      height={400}
      data={data}
      margin={{
        top: 40,
        right: 80,
        bottom: 80,
        left: 80
      }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      colorBy="id"
      borderColor="inherit:darker(0.6)"
      radialLabelsSkipAngle={10}
      radialLabelsTextXOffset={6}
      radialLabelsTextColor="#333333"
      radialLabelsLinkOffset={0}
      radialLabelsLinkDiagonalLength={16}
      radialLabelsLinkHorizontalLength={24}
      radialLabelsLinkStrokeWidth={1}
      radialLabelsLinkColor="inherit"
      slicesLabelsSkipAngle={10}
      slicesLabelsTextColor="#333333"
      animate={true}
      motionStiffness={90}
      motionDamping={15}
      theme={{
        tooltip: {
          container: {
            fontSize: "13px"
          }
        },
        labels: {
          text: { color: "#555" }
        }
      }}
    />
  </div>
);

export default PieExample;


