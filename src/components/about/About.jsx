import React from "react";
import Topbar from "../topbar/Topbar";
import "./about.scss";
import { Book, School ,InsertLink } from "@material-ui/icons";
import { Link } from "react-router-dom";


function About() {
  return (
    <div className="acerca">
      <section className="about">
        <h1 className="heading">
          {" "}
          about <span>me</span>{" "}
        </h1>

        <div className="row">
          <div className="info-container">
            <h1>personal info</h1>

            <div className="box-container">
              <div className="box">
                <h3>
                  {" "}
                  <span>name : </span> Carlos Orozco{" "}
                </h3>
                <h3>
                  {" "}
                  <span>age : </span> 25{" "}
                </h3>
                <h3>
                  {" "}
                  <span>email : </span> corozco6489@gmail.com
                </h3>
                <h3>
                  {" "}
                  <span>address : </span> Ecuador, Ambato - Tungurahua{" "}
                </h3>
              </div>

              <div className="box">
                <h3>
                  {" "}
                  <span>freelance : </span> available{" "}
                </h3>
                <h3>
                  {" "}
                  <span>skill : </span> front-end{" "}
                </h3>
                <h3>
                  {" "}
                  <span>experience : </span> 1 years{" "}
                </h3>
                <h3>
                  {" "}
                  <span>language : </span> Spanish, English(basic){" "}
                </h3>
              </div>
            </div>

            <a
              a
              href="/assets/doc/CarlosOrozco.pdf"
              download="CarlosOrozco.pdf"
              className="btn"
            >
              {" "}
              Download CV <Book className="fas fa-user" />{" "}
            </a>
          <Link to="/curriculum">
          <a
              a
              href="/assets/doc/CarlosOrozco.pdf"
            
              className="btn"
            >
              {" "}
              View CV <InsertLink className="fas fa-user" />{" "}
            </a></Link>
          </div>

          <div className="count-container">
            <div className="box">
              <h3>1+</h3>
              <p>years of experience</p>
            </div>

            <div className="box">
              <h3>4+</h3>
              <p>happy clients</p>
            </div>

            <div className="box">
              <h3>10+</h3>
              <p>project completed</p>
            </div>

            <div className="box">
              <h3>1+</h3>
              <p>awards won</p>
            </div>
          </div>
        </div>
      </section>

      <section class="skills">
        <h1 class="heading">
          {" "}
          <span>my</span> skills{" "}
        </h1>

        <div class="box-container">
          <div class="box">
            <img loading="lazy" src="assets/images/icon-1.png" />
            <h3>html</h3>
          </div>
          <div class="box">
            <img loading="lazy" src="assets/images/icon-2.png" />
            <h3>css</h3>
          </div>
          <div class="box">
            <img loading="lazy" src="assets/images/icon-3.png" />
            <h3>javascript</h3>
          </div>
          <div class="box">
            <img loading="lazy" src="assets/images/icon-4.png" />
            <h3>sass</h3>
          </div>
          <div class="box">
            <img loading="lazy" src="assets/images/icon-5.png" />
            <h3>jquery</h3>
          </div>
          <div class="box">
            <img loading="lazy" src="assets/images/icon-6.png" />
            <h3>react.js</h3>
          </div>
        </div>
      </section>

      <section class="education">
        <h1 class="heading">
          {" "}
          <span>my</span> education{" "}
        </h1>

        <div class="box-container">
          <div class="box">
            <i class="fas fa-graduation-cap">
              {" "}
              <School />
            </i>
            <span>2003 - 2009</span>
            <h3>PRIMARY</h3>
            <p>José Joaquín de Olmedo School, Ambato, Ecuador</p>
          </div>

          <div class="box">
            <i class="fas fa-graduation-cap">
              <School />
            </i>
            <span>2010 - 2016</span>
            <h3>HIGH SCHOOL</h3>
            <p>
              Higher Technological Teaching Institute "Guayaquil", Ambato,
              Ecuador
            </p>
            <p>Technical Baccalaureate in Consumer Electronics.</p>
          </div>

          <div class="box">
            <i class="fas fa-graduation-cap">
              <School />
            </i>
            <span>2017 - 2021</span>
            <h3>Technical University of Ambato, Ambato, Ecuador</h3>
            <p>
              Degree in Electronics and Communications Engineer awarded by the
              Technical University of Ambato.
            </p>
          </div>

          <div class="box">
            <i class="fas fa-graduation-cap">
              <School />
            </i>
            <span>2016-2021</span>
            <h3>Professional experience</h3>
            <p>ELECTRICAL TECHNICIAN Ambato, Ecuador</p>
            <p>Installation of electric light meters</p>
            <p>Residential and business electrical installations</p>
            <p>Installation of electrical appliances</p>
          </div>

          <div class="box">
            <i class="fas fa-graduation-cap">
              <School />
            </i>
            <span>2021</span>
            <h3>Professional experience</h3>
            <p>Maintenance and Assembly of computers (software and hardware)</p>
          </div>

          <div class="box">
            <i class="fas fa-graduation-cap">
              <School />
            </i>
            <span>2021</span>
            <h3>Professional experience</h3>
            <p>Installing operating systems</p>
            <p> Hardware and software troubleshooting</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
