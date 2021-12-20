import "./productos.scss";
import Topbar from "../topbar/Topbar";
import { Book , Update } from "@material-ui/icons";
import {  School ,InsertLink } from "@material-ui/icons";
import { Link } from "react-router-dom";

import {
  
  CalendarToday,
  Person,
  LocalGroceryStoreIcon,
} from "@material-ui/icons";
import { useState, useEffect } from "react";
import { productostienda } from "../../products";

export default function Products() {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    setBlog(productostienda);
  }, [true]);
  return (
    <div className="blog">
      <section className="blogs">
        <h1 className="heading">
          {" "}
          <span>my</span> Products{" "}
        </h1>

        <div className="box-container">
          {blog.map((d) => (
            <div className="box">
              <div class="gumroad-product-embed" data-outbound-embed="true">
                <a href={d.link} target="_blank">
                  Cargando...
                </a>
              </div>
            </div>
          ))}
        </div>
        <Link to="/products">
        <a href="#" className="btn">
    
         Update Page (F5)<i className="fas fa-redo"><Update  className="fas fa-user"/></i>{" "}
        </a>
        </Link>
     
      </section>
    </div>
  );
}
