import React from "react";
import "./Home.css";

import SideBar from "../ReviewSectionPages/ReviewBar";
import ReviewBar from "../SideSectionPages/SideBar";
import CenterPageBar from "../CenterPages/CenterSection";

function Home() {
  return (
    <main className="App  text-white container  ">
      <div className="d-flex ">
        <section className="container Side-Bar-Page w-25">
          <ReviewBar />
        </section>

        <section className=" container  w-100">
          <CenterPageBar />
        </section>

        <section className="container Review-Bar-Page w-50 ">
          <SideBar />
        </section>
      </div>
    </main>
  );
}

export default Home;
