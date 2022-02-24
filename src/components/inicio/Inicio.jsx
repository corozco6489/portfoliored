import React from "react";
import "./inicio.scss";
import About from "../about/About";
import { Person } from "@material-ui/icons";
import { useRef } from "react";
import { useEffect } from "react";
import { init } from "ityped";
import { Link, Switch, Route } from "react-router-dom";
import {
  Facebook,
  Instagram,
  LinkedIn,
  YouTube,
  Email,
  Phone,
  LocationOn,
  Language,
  WhatsApp,
  GitHub
} from "@material-ui/icons";

function Inicio() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Developer", "Freelance"],
    });
  }, []);

  return (
    <div>
      {/* <Topbar/> */}
      <section className="home">
        <div className="image">
          <img loading="lazy" src="assets/images/user1.png" alt="" />
        </div>

        <div className="content">
          <h3>Hi, I am Carlos Orozco</h3>
          <span>
          Engineer & Front-End <span ref={textRef}></span>
          </span>

          <p>
            I am an engineering student in Electronics and Communications, eager
            and motivated to learn new things in the workplace. I consider
            myself a humble person with a high capacity for rapid learning in
            any task in a self-taught way.
          </p>

          {/* <Link to="/about">
            <a className="btn">
              {" "}
              About me <Person className="fas fa-user" />{" "}
            </a>
          </Link> */}
          <div className="share">
          <a
              href="https://www.linkedin.com/in/carlos-orozco-64892021/"
              target="_blank"
            >
              <LinkedIn className="fas fa-user" />{" "}
            </a>
            <a
              href="https://www.youtube.com/channel/UCgR2CZLCClCdTeo_l5W53eQ"
              target="_blank"
            >
              <YouTube className="fas fa-user" />{" "}
            </a>
            <a
              href="https://github.com/corozco6489"
              target="_blank"
            >
              <GitHub className="fas fa-user" />{" "}
            </a>
           
            <a href="http://electrodev.cf/" target="_blank">
              <Language className="fas fa-user" />{" "}
            </a>
            <a href="https://wa.me/5930983592690" target="_blank">
              <WhatsApp className="fas fa-user" />{" "}
            </a>
          </div>

          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </section>
    </div>
  );
}

export default Inicio;
