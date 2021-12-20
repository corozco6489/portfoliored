import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/Index";
import Products from "./components/products/Products";

import About from "./components/about/About";
import Inicio from "./components/inicio/Inicio";
import Portfolio from "./components/portfolio/Portfolio";
import Blogs from "./components/blogs/Blogs";
import Contact from "./components/contact/Contact";
import styled from "styled-components";
import Curriculum from "./components/curriculum/Curriculum";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route  path="/" element={<Inicio />}></Route>
        <Route  path="/about" element={<About />}>
        </Route>
        <Route  path="/portfolio" element={<Portfolio />}>
        </Route>
        <Route  path="/blogs" element={<Blogs />}>
        </Route>
        <Route  path="/products" element={<Products />} >
        </Route>
        <Route  path="/contact" element={<Contact />}>
        </Route>
        <Route  path="/curriculum" element={<Curriculum />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
