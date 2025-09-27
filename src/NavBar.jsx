import React from "react";
import darkFancy from "../public/darkFancy.png";
import { Link } from "react-router-dom";
import "./NavBar.scss";
import popoutArrow from "./assets/arrow.svg";
import resume from "./constants/links.jsx";

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbackground">
        <a href="/" className="logo">
          <img src={darkFancy} alt={"logo"} />
        </a>
        <ul className="navbar">
          {/* <li className="navitem">
            <a
              href="https://github.com/vixu8"
              target="_blank"
              rel="noopener noreferrer"
            >
              PROJECTS
            </a>
          </li> */}
          <li className="navitem">
            <Link to="/projects">PROJECTS</Link>
          </li>
          <li className="navitem">
            <Link to="/about">ABOUT</Link>
          </li>
          <li className="navitem">
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="resume"
            >
              RESUME
              <img className="resume-popout-icon" src={popoutArrow} alt={""} />
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
