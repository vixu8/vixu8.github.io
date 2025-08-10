import "./App.scss";
import "./Home.scss";

import React from "react";
import GlobeMover from "./GlobeMover";
import popoutArrow from "./assets/arrow.svg";
// import rhythmMaker from "./assets/rhythmMakerDemo.png";
// import stopdot from "./assets/stopdotDemo.png";

import projects from "./constants/projects";

class Home extends React.Component {
  renderRecentProject(project) {
    return (
      <>
        <div key={project.id} className="project-container">
          <div className="project-info">
            <div className="project-header">
              <p className="date">{project.startDate}</p>
              <p className="title">{project.title}</p>
            </div>
            <hr />
            <div className="project-description">
              {project.shortDescription}
            </div>
          </div>

          <div className="project-image-container">
            <img
              src={project.image ? project.image : "/darkFancy.png"}
              alt={project.title}
              className="image"
            />
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="popout-link"
              >
                <img src={popoutArrow} alt={"View Project Page"} />
              </a>
            )}
          </div>
        </div>

        <hr />
      </>
    );
  }

  about = (
    <div className="section home-about-section">
      {/* <h2 className="big-text">
        I'm Viola, a sophomore studying Computer Science at Carnegie Mellon with
        a Machine Learning concentration.
      </h2> */}
      <h2 className="medium-text">
        Programmer passionate about solving real-world problems through
        scalable, efficient code.
      </h2>
    </div>
  );

  timeline = (<></>);

  recentProjects = (
    <div className="section recent-projects-section">
      <h1 className="section-title">RECENT PROJECTS</h1>
      <hr />
      {projects.map((project) => {
        return this.renderRecentProject(project);
      })}

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
        {this.about}
        {this.timeline}
        {this.recentProjects}
        {/* <Footer /> */}
      </div>
    );
  }
}

export default Home;
