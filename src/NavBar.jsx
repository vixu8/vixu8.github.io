import React from "react";
import darkFancy from "../public/darkFancy.png";
// import darkFancy from '../public/darkFancy.png'
// import darkFancy from '../public/darkFancy.png'
// import darkFancy from '../public/darkFancy.png'

class NavBar extends React.Component {
  render() {
    return (
      <nav
        style={{
          background: "#000",
          color: "#fff",
          height: "60px",
          borderBottom: "1px solid white",
        }}
      >
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            margin: 0,
            marginLeft: "50px",
            padding: 0,
            height: "inherit",
          }}
        >
          <li style={{ flex: "0" }}>
            <a href="/">
              <img
                src={darkFancy}
                alt={"logo"}
                style={{ height: "100%", width: "auto" }}
              />
            </a>
          </li>
          <li style={{ flex: "1" }}>
            <a
              href="https://github.com/vixu8"
              style={{ color: "#fff", lineHeight: "60px" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              PROJECTS
            </a>
          </li>
          {/* <li style={{ flex: '1'  }}>
                <a href="/play" style={{ color: '#fff', lineHeight: '60px'}}>PLAY</a>
                </li> */}
          <li style={{ flex: "1" }}>
            <a href="/about" style={{ color: "#fff", lineHeight: "60px" }}>
              ABOUT
            </a>
          </li>
          <li style={{ flex: "1" }}>
            <a
              href="https://drive.google.com/file/d/10Ub5LRSzZo7aDcFn4P6atpLbbKQgCRXy/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#fff",
                textDecoration: "underline",
                lineHeight: "60px",
              }}
            >
              RESUME
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
