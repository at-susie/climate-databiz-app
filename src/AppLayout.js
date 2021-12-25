import React, { useState } from "react";
import { Sidebar, SidebarItem } from "react-responsive-sidebar";
import MainContainer from "./Components/MainContainer";
//import Header from "./components/Header";
//import Content from "./components/Content";
import "./AppLayout.scss"
import SideNav from "./Components/SideNav";


export default function AppLayout() {
  return (
    <>
     
        {/* <Sidebar
          className="sidebar"
          breakPoint="960"
          background="#ccc"
          color="#000"
          hoverHighlight="#00cc55"
          content={[
            <SidebarItem>Home</SidebarItem>,
            <SidebarItem>Content</SidebarItem>
          ]}
        ></Sidebar> */}
        <SideNav />

      <MainContainer />
    </>
  );
}