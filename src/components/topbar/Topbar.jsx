import React from "react";
import "./topbar.scss";
import "../../global.scss";

import { Home ,Person ,BusinessCenter,Book,Contacts} from "@material-ui/icons";

function Topbar() {
  return (
  

          <nav className="navbar">
      <a href="/">
        {" "}
        <Home className="icons"/><span>Home</span>{" "}
      </a> 
      <a href="/about">
        {" "}
        <Person className="icons" /> <span>About</span>{" "}
      </a>
      <a href="/portfolio">
        {" "}
         <BusinessCenter className="icons"/> <span>portfolio</span>{" "}
      </a>
      <a href="/blogs">
        {" "}
         <Book className="icons"/> <span>blogs</span>{" "}
      </a>
      <a href="/contact">
        {" "}
        <Contacts className="icons"/>   <span>contact</span>{" "}
      </a>
    </nav>






    





  );
}

export default Topbar;
