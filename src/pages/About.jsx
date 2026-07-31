import "../App.scss";
import "./About.scss";
import React from "react";
import vxu from "../assets/vxu.jpg";
import { email, linkedin } from "../constants/links";

class About extends React.Component {
  render() {
    return (
      <div className="section">
        <h2 className="title">About</h2>
        <hr />
        <div className="about">
          <div className="about-text">
            <h3 className="big-text">
              Helo! I'm Viola Xu, a junior at Carnegie Mellon University. I'm
              majoring in CS, with a concentration in Machine Learning.
            </h3>
            <p className="small-text">
              I'm currently interning at Amazon Payments for Summer 2026. I've
              previously worked for CMU CS Academy and Carnegie Mellon Racing.
            </p>
            <p className="small-text">
              I'm passionate about human-centered AI, gaming, and making
              software that has an impact. Feel free to connect with me by
              <a href={email} target="_blank" rel="noopener noreferrer">
                email
              </a>
              or
              <a href={linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              !
              {/* In my free time, I crochet and play guitar. Check out some of my work <a link="https://youtube.com">here</a>! */}
            </p>
          </div>
          <div className="image-div">
            <img src={vxu} alt="me!" className="image" />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
