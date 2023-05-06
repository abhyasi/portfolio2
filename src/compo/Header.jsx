import React from "react";
import "./header.css";
import Cta from "./Cta";
import ME from "../assets/assets/me.png";

export const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Namaste! i'm</h5>
        <h1>Abhishek Abhyasi</h1>
        <h5 className="text-light">Developer</h5>

        <Cta />
        

        <div className="me">
          <img src={ME} alt="me" />
          <a href="#contact" className="scrool_down">
            Scrool Down
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
