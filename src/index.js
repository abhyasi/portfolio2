import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Header from "./compo/Header";
import Nav from "./compo/Nav";
import About from "./compo/About";
import Experience from "./compo/Experience";
import Services from "./compo/Services";
import Testimonial from "./compo/Testimonial";
import Portfolio from "./compo/Portfolio";
import Contact from "./compo/Contact";
import Footer from "./compo/Footer";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Header />
    <Nav />
    <About />
    <Experience />
    <Services />
    <Portfolio />
    <Testimonial />
    <Contact />
    <Footer />
  </React.StrictMode>
);
