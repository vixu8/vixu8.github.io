import "./App.scss";
import "./Home.scss";

import React from "react";
import { Link } from "react-router-dom";
import GlobeMover from "./GlobeMover";
import popoutArrow from "./assets/arrow.svg";
// import rhythmMaker from "./assets/rhythmMakerDemo.png";
// import stopdot from "./assets/stopdotDemo.png";

import projects from "./constants/projects.jsx";

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
            {project.url && (
              <a
                href={project.url}
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

  projectsIDsToRender = [0, 2];

  recentProjects = (
    <div className="section recent-projects-section">
      <h1 className="section-title">RECENT PROJECTS</h1>
      <hr />
      {projects.toReversed().map((project) => {
        return this.projectsIDsToRender.includes(project.id)
          ? this.renderRecentProject(project)
          : undefined;
      })}

      <div className="recent-projects-footer">
        <Link to="/projects" className="recent-projects-footer-link">
          See all projects
        </Link>
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
      </div>
    );
  }
}

export default Home;
