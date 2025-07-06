import "./App.scss";
import "./Home.scss";

import React from "react";
import GlobeMover from "./GlobeMover";
import popoutArrow from "./assets/arrow.svg";
import rhythmMaker from "./assets/rhythmMakerDemo.png";
import stopdot from "./assets/stopdotDemo.png";

class Home extends React.Component {
  renderRecentProject(date, projectName, description, image, link = null) {
    return (
      <div className="project-container">
        <div className="project-info">
          <div className="project-header">
            <p className="date">{date}</p>
            <p className="title">{projectName}</p>
          </div>
          <hr />
          <div className="project-description">{description}</div>
        </div>

        <div className="project-image-container">
          <img
            src={image ? image : "/darkFancy.png"}
            alt={projectName}
            className="image"
          />
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="popout-link"
            >
              <img src={popoutArrow} alt={"View Project Page"} />
            </a>
          )}
        </div>
      </div>
    );
  }

  recentProjects = (
    <div className="section recent-projects-section">
      <h1 className="section-title">RECENT PROJECTS</h1>
      <hr />

      {this.renderRecentProject(
        "11/2024",
        "15-112 Term Project: Rhythm Maker",
        "Create, save, and play your own beatmaps for a collection of songs in Rhythm Maker!",
        rhythmMaker,
        "https://github.com/vixu8/112-term-project"
      )}

      <hr />

      {this.renderRecentProject(
        "12/2024",
        "Hack112 F24: Stopdot",
        "A simple platformer game engine, made in 24 hours.",
        stopdot,
        "https://github.com/vixu8/hack112"
      )}

      <hr />

      <div className="recent-projects-footer">
        <a
          href="https://github.com/vixu8"
          target="_blank"
          rel="noopener noreferrer"
          className="recent-projects-footer-link"
        >
          See all projects
        </a>
      </div>
    </div>
  );

  render() {
    return (
      <div>
        <GlobeMover />
        {this.recentProjects}
        {/* <Footer /> */}
      </div>
    );
  }
}

export default Home;
