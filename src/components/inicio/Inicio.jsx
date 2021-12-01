import React from 'react'
import "./inicio.scss";
import Topbar from '../topbar/Topbar';
import { Person } from "@material-ui/icons";
import { useRef } from 'react';
import { useEffect } from 'react';
import { init } from "ityped";



function Inicio() {

    const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Developer"],
    });
  }, []);

    return (
        <div >
           {/* <Topbar/> */}
           <section className="home">

<div className="image">
    <img loading="lazy" src="assets/images/user.png" alt=""/>
</div>

<div className="content">
    <h3>hi, i am Carlos  Orozco</h3>
    <span>Front-End  <span ref={textRef}></span></span>
    
   
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet porro facere expedita ab atque a consectetur odit vel soluta itaque.</p>
    <a href="/about" className="btn"> about me <Person  className="fas fa-user"/> </a>
</div>

</section>
        </div>
    )
}

export default Inicio
