import React from "react";
import Coming from "./components/Coming";
import Eligible from "./components/Eligible";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Waiting from "./components/Waiting";
import Works from "./components/Works";

const Layout = () => {
  return (
    <div className="layout-wrapper">
      <Nav/>
      <Hero/>
      <Works />
      <Eligible/>
      <Coming/>
      <Waiting/>
      <Footer/>
    </div>
  );
};

export default Layout;
