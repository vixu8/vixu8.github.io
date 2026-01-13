import "../App.scss";
import "./Home.scss";

import React from "react";
import GlobeMover from "../components/GlobeMover.jsx";
import vxu from "../assets/VXu.png";
import { experience } from "../constants/experience.js";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expandedExperience: null,
    };
  }

  toggleExperience = (index) => {
    this.setState((prevState) => ({
      expandedExperience: prevState.expandedExperience === index ? null : index,
    }));
  };

  renderAboutSection() {
    return (
      <div className="about-section">
        <h2 className="about-title">About</h2>
        <hr />
        <div className="about-content">
          <div className="about-image-container">
            <img src={vxu} alt="Viola Xu" className="about-image" />
          </div>
          <div className="about-text">{/* Text content goes here */}</div>
        </div>
      </div>
    );
  }

  renderExperienceSection() {
    const { expandedExperience } = this.state;

    return (
      <div className="experience-section">
        <h2 className="about-title">Experience</h2>
        <hr />
        <div className="experience-list">
          {experience.map((exp, index) => (
            <div key={index} className="experience-item">
              <div
                className={`experience-header ${
                  expandedExperience === index ? "expanded" : ""
                }`}
                onClick={() => this.toggleExperience(index)}
              >
                <svg
                  className="experience-arrow"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 2L8 6L4 10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="experience-title-info">
                  <div className="experience-title">{exp.title}</div>
                  <div className="experience-company">{exp.company}</div>
                </div>
                <span className="experience-date">{exp.date}</span>
              </div>
              {expandedExperience === index && (
                <div className="experience-content">
                  <p className="experience-description">{exp.description}</p>
                  <div className="tags">
                    {exp.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <GlobeMover />
        {this.renderAboutSection()}
        {this.renderExperienceSection()}
      </div>
    );
  }
}

export default Home;
