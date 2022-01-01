import * as React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

import BookThumbnail from "../Assets/BookThumbnail.jpg";

import "./Disclaimer.scss";



function Disclaimer(props) {
  return (
    <section id={props.id}>
      <div className="disclaimerContainer">
      All data displayed on this website is referenced from <a href="https://www.penguinrandomhouse.com/books/633968/how-to-avoid-a-climate-disaster-by-bill-gates/">"How to avoid a climate disaster - Bill Gates"</a>.
      </div>
      <div><a href="https://www.penguinrandomhouse.com/books/633968/how-to-avoid-a-climate-disaster-by-bill-gates/"><img src={BookThumbnail} alt="Book thumbnail" /></a></div>
    </section>
  );
}

export default Disclaimer;
