import "../App.scss";
import "./About.scss";
import React from "react";
import vxu from "../assets/VXu.png";

class About extends React.Component {
  render() {
    return (
      <div className="section full-page">
        <h1 className="section-title">ABOUT</h1>

        <hr />

        <div className="about-section">
          <div className="text">
            <h2 className="big-text">
              I'm Viola Xu, a sophomore at Carnegie Mellon University. I'm
              majoring in CS, with a concentration in Machine Learning.
            </h2>
            <p className="small-text">
              I currently work for{" "}
              <a href="https://academy.cs.cmu.edu/about">CMU CS Academy</a> as a{" "}
              <b>software development intern</b>, bringing free, high-quality
              computer science education to over 500k teachers and students
              around the world. My academic interests, besides ML and EdTech,
              include computational biology and robotics.
              {/* In my free time, I crochet and play guitar. Check out some of my work <a link="https://youtube.com">here</a>! */}
            </p>
          </div>
          <div className="image-div">
            <img src={vxu} alt="me!" className="image" />
          </div>
        </div>

        {/* <Footer /> */}
      </div>
    );
  }
}

export default About;
