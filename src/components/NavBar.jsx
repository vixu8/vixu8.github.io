import React from "react";
import darkFancy from "../../public/darkFancy.png";
import { Link } from "react-router-dom";
import "./NavBar.scss";
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
              <svg
                className="resume-popout-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.3891 8.11096L8.61091 15.8891"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.3891 8.11096L16.7426 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.3891 8.11096L12.5 7.75741"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
