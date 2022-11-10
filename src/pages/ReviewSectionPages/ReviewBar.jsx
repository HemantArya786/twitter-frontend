import React from "react";
import "./ReviewBar.css";

function ReviewBar() {
  return (
    <main className=" d-flex  ">
      <div>
        <section className="search-bar ">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            placeholder="Search Here"
            className="rounded-pill"
          />
        </section>

        <section className=" h-100">
          <h6>what happening</h6>
        </section>

        <section className=" h-100">
          <h6>who to follow</h6>
        </section>
      </div>
    </main>
  );
}
export default ReviewBar;
