import React from "react";
import Hero from "../components/hero/hero";
import Sidenav from "../components/sidenav/sidenav";
import Projects from "../components/projects/projects";
import Invest from "../components/invest/invest";
import Involved from "../components/involved/involved";
// import Vendors from "../components/vendors/vendors";

export default function Home() {
  return (
    <>
      <Hero />
      <Sidenav />
      <Invest />
      <Projects />
      <Involved />
      {/* <Vendors /> */}
    </>
  );
}
