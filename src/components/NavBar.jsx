import React from "react";
import darkFancy from "../../public/darkFancy.png";
import { Link } from "react-router-dom";
import "./NavBar.scss";
import popoutArrow from "../assets/arrow.svg";
import resume from "../constants/links.jsx";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
    };
  }

  toggleMenu = () => {
    this.setState((prevState) => ({
      isMenuOpen: !prevState.isMenuOpen,
    }));
  };

  closeMenu = () => {
    this.setState({ isMenuOpen: false });
  };

  render() {
    const { isMenuOpen } = this.state;

    return (
      <nav className="navbackground">
        <a href="/" className="logo">
          <img src={darkFancy} alt={"logo"} />
        </a>

        <div
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={this.toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`navbar ${isMenuOpen ? "active" : ""}`}>
          <li className="navitem">
            <Link to="/projects" onClick={this.closeMenu}>
              PROJECTS
            </Link>
          </li>
          <li className="navitem">
            <Link to="/about" onClick={this.closeMenu}>
              ABOUT
            </Link>
          </li>
          <li className="navitem">
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="resume"
              onClick={this.closeMenu}
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
