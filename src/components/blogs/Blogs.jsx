import "./blogs.scss";
import Topbar from "../topbar/Topbar";
import { Link, CalendarToday, Person } from "@material-ui/icons";
import { certificaciones } from "../../cursos";

import { useState, useEffect } from "react";

function Blogs() {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    setBlog(certificaciones);
  }, [true]);

  return (
    <div className="blog">
      <section className="blogs">
        <h1 className="heading">
          {" "}
          <span>my</span> Courses{" "}
        </h1>

        <div className="box-container">
          {blog.map((d) => (
            <div className="box">
              <div className="image">
                <img loading="lazy" src={d.img} alt="" />
              </div>
              <div className="content">
                <div className="icons">
                  <a href="#" target="_blank">
                    <i className="fas fa-calendar">
                      <CalendarToday className="fas fa-user" />
                    </i>{" "}
                    {d.date}{" "}
                  </a>
                  <a href="#" target="_blank">
                    <i className="fas fa-user">
                      <Person className="fas fa-user" />
                    </i>{" "}
                    by {d.by}{" "}
                  </a>
                </div>
                <h3>{d.title}</h3>
                <p>
                 
{d.description}

                </p>
                <a href=  {d.link} className="btn" target="_blank">Read More
                
                  <i className="fas fa-link">
                    <Link className="fas fa-user" />{" "}
                  </i>{" "}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Blogs;
