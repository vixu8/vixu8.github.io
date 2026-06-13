import "../App.scss";
import "./About.scss";
import React from "react";
import vxu from "../assets/VXu.png";

class About extends React.Component {
  render() {
    return (
      <div className="section">
        <h2 className="title">About</h2>
        <hr />
        <div className="about">
          <div className="about-text">
            <h3 className="big-text">
              I'm Viola Xu, a junior at Carnegie Mellon University. I'm majoring
              in CS, with a concentration in Machine Learning.
            </h3>
            <p className="small-text">
              I'm currently interning at Amazon Stores for Summer 2026. I've
              previously worked for CMU CS Academy and Carnegie Mellon Racing.
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
