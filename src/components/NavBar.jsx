import React from "react";
import darkFancy from "../../public/darkFancy.png";
import lightFancy from "../../public/lightFancy.png";
import { Link } from "react-router-dom";
import "./NavBar.scss";
import resume from "../constants/links.js";

const THEME_STORAGE_KEY = "theme";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    const storedTheme =
      typeof window !== "undefined"
        ? window.localStorage.getItem(THEME_STORAGE_KEY)
        : null;
    const theme = storedTheme === "light" ? "light" : "dark";

    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", theme);
    }

    this.state = {
      isMenuOpen: false,
      theme,
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

  toggleTheme = () => {
    this.setState((prevState) => {
      const theme = prevState.theme === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", theme);
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
      return { theme };
    });
  };

  render() {
    const { isMenuOpen, theme } = this.state;
    const isLight = theme === "light";

    return (
      <nav className="navbackground">
        <a href="/" className="logo">
          <img src={isLight ? lightFancy : darkFancy} alt={"logo"} />
        </a>

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

        <div className="nav-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={this.toggleTheme}
            aria-label={
              isLight ? "Switch to dark mode" : "Switch to light mode"
            }
            title={isLight ? "Switch to dark mode" : "Switch to light mode"}
          >
            {isLight ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="4"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>

          <div
            className={`hamburger ${isMenuOpen ? "active" : ""}`}
            onClick={this.toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
