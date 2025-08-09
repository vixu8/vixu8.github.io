import React from "react";
// import { Link } from "react-router-dom";
import popoutArrow from "./assets/arrow.svg";
import "./App.scss";
import "./Projects.scss";

class Projects extends React.Component {
  projects = [
    {
      id: "project1",
      title: "Project One",
      description: "A short description of Project One.",
    },
    {
      id: "project2",
      title: "Project Two",
      description: "A short description of Project Two.",
    },
    {
      id: "project3",
      title: "Project Three",
      description: "A short description of Project Three.",
    },
    // Add more projects as needed
  ];

  renderProject(project) {
    return (
      <div className="project-container">
        <div className="project-info">
          <div className="project-header">
            <p className="date">{project.date}</p>
            <p className="title">{project.title}</p>
          </div>
          <hr />
          <div className="project-description">{project.description}</div>
        </div>

        <div className="project-image-container">
          <img
            src={project.image ? project.image : "/darkFancy.png"}
            alt={project.name}
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
    );
  }

  render() {
    return (
      <div className="section full-page">
        <h1 className="section-title">PROJECTS</h1>

        <hr />
        <ul style={{ listStyle: "none", padding: 0 }}>
          {this.projects.map((project) => this.renderProject(project))}
        </ul>
      </div>
    );
  }
}

export default Projects;
