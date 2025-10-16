import React from "react";
import popoutArrow from "./assets/arrow.svg";
import "./App.scss";
import "./Projects.scss";

import projects from "./constants/projects.jsx";

class Projects extends React.Component {
  renderProject(project) {
    return (
      <div className="project-container">
        <div className="project-info">
          <div className="project-header">
            <p className="date">{project.startDate}</p>
            <p className="title">{project.title}</p>
          </div>
          <hr />

          <div className="tags">
            {project.tags.map((tag) => {
              return (
                <div className="tag">
                  <span className="tag-label">{tag}</span>
                </div>
              );
            })}
          </div>

          <div className="project-description">{project.shortDescription}</div>
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
    );
  }

  render() {
    return (
      <div className="section full-page">
        <h1 className="section-title">PROJECTS</h1>

        <hr />
        <ul style={{ listStyle: "none", padding: 0 }}>
          {projects.toReversed().map((project) => this.renderProject(project))}
        </ul>
      </div>
    );
  }
}

export default Projects;
