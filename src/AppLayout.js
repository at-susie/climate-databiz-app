import React, { useState } from "react";
import MainContainer from "./Components/MainContainer";
import "./AppLayout.scss"
import SideNav from "./Components/SideNav";
import 'normalize.css';


export default function AppLayout() {
  return (
    <div className="AppLayout">
      <SideNav />
      <MainContainer />
    </div>
  );
}