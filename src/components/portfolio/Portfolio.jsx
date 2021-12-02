import React from "react";
import Topbar from "../topbar/Topbar";
import "./portfolio.scss";
import { Book , Update } from "@material-ui/icons";
import PortfolioList from "../portfolioList/PortfolioList";
import {
  GitHub,
  InsertLink,
} from "@material-ui/icons";
import { useState } from "react";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";
import { useEffect } from "react";

function Portfolio() {


  const [selected, setSelected] = useState("featured")
  const [data, setData] = useState([])


  const list = [
    {
      id: "featured",
      title: "All",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "IoT",
    },
    {
      id: "design",
      title: "Arduino",
    },
    {
      id: "content",
      title: "Matlab",
    },
  ];


  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);
  return (
    <div className="projects">
     

      <section className="portfolio">
        <h1 className="heading">
          {" "}
          <span>my</span> work{" "}
        </h1>
        <ul>         
          {list.map(item=>(
            <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id}/>
          ))}
        </ul>

       
        

        <div className="box-container">
        {
          data.map(d=>(

            <div className="box">
            <img loading="lazy" src={d.img} alt="" />
            <div className="content">
              <h3>{d.title}</h3>
              <p>
                {d.description}
              </p>
              <div className="links">
              <a href={d.link} target="_blank"> <GitHub className="fas"/></a>
              <a href={d.site} target="_blank"> <InsertLink className="fas"/></a>
              </div>
           
            </div>
          </div>

          ))
        }

          {/* <div className="box">
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
          </div> */}
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
