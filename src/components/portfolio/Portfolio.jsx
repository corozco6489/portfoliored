import React from "react";
import Topbar from "../topbar/Topbar";
import "./portfolio.scss";
import { Book , Update } from "@material-ui/icons";

function Portfolio() {
  return (
    <div className="projects">
      <Topbar />

      <section className="portfolio">
        <h1 className="heading">
          {" "}
          <span>my</span> work{" "}
        </h1>

        <div className="box-container">
          <div className="box">
            <img loading="lazy" src="assets/images/img-1.jpg" alt="" />
            <div className="content">
              <h3>project 01</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio, praesentium.
              </p>
              <a href="#">read more</a>
            </div>
          </div>

          <div className="box">
            <img loading="lazy" src="assets/images/img-2.jpg" alt="" />
            <div className="content">
              <h3>project 02</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio, praesentium.
              </p>
              <a href="#">read more</a>
            </div>
          </div>

          <div className="box">
            <img loading="lazy" src="assets/images/img-3.jpg" alt="" />
            <div className="content">
              <h3>project 03</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio, praesentium.
              </p>
              <a href="#">read more</a>
            </div>
          </div>

          <div className="box">
            <img loading="lazy" src="assets/images/img-4.jpg" alt="" />
            <div className="content">
              <h3>project 04</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio, praesentium.
              </p>
              <a href="#">read more</a>
            </div>
          </div>

          <div className="box">
            <img loading="lazy" src="assets/images/img-5.jpg" alt="" />
            <div className="content">
              <h3>project 05</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio, praesentium.
              </p>
              <a href="#">read more</a>
            </div>
          </div>

          <div className="box">
            <img loading="lazy" src="assets/images/img-6.jpg" alt="" />
            <div className="content">
              <h3>project 06</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio, praesentium.
              </p>
              <a href="#">read more</a>
            </div>
          </div>
        </div>

        <a href="#" className="btn">
          {" "}
          load more <i className="fas fa-redo"><Update  className="fas fa-user"/></i>{" "}
        </a>
      </section>
    </div>
  );
}

export default Portfolio;
