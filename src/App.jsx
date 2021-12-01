import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from "./components/about/About";
import Inicio from "./components/inicio/Inicio";
import Portfolio from "./components/portfolio/Portfolio";
import Blogs from "./components/blogs/Blogs";
import Contact from "./components/contact/Contact";


function App() {
  return (
    <Router>
     
      <Routes>
        <Route exact path="/" element={<Inicio/>}></Route>
        <Route exact path="/about" element={<About/>}></Route>
        <Route exact path="/portfolio" element={<Portfolio/>}></Route>
        <Route exact path="/blogs" element={<Blogs/>}></Route>
        <Route exact path="/contact" element={<Contact/>}></Route>

      </Routes>

    
  </Router>
  );
}

export default App;
