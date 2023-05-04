import React from "react";
import Hero from "../components/hero/hero";
import Sidenav from "../components/sidenav/sidenav";
import Projects from "../components/projects/projects";
import Invest from "../components/invest/invest";
import Involved from "../components/involved/involved";
// import Vendors from "../components/vendors/vendors";

// NOTE: When you get new vendors, you can press `CMD + ?` to the green code lines to uncomment out `<Vendors  />` when necessary. Also, uncomment out the above `import`

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
