import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Header from "../Components/Header";
import "./CovidClimate.scss";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function CovidClimateGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Item>
            <div className="compItem">
              <h3>COVID-19</h3>
              <div>14 deaths per 100,000 people</div>
            </div>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <div className="compItem">
              <h3>Climate change</h3>
              <div>It will cause 75 deaths per 100,000 people</div>
            </div>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

function CovidClimate(props) {
  return (
    <section id={props.id}>
      <Header
        HeaderTitle="Death rate between COVID-19 and climate change"
        PageDescription="Climate change could be five time worse than COVID-19 by the end of 2100. "
      />
      <div className="gridContainer">
        <CovidClimateGrid />
      </div>
    </section>
  );
}

export default CovidClimate;
