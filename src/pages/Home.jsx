import "../App.scss";
import "./Home.scss";

import React from "react";
import { Link } from "react-router-dom";
import GlobeMover from "../components/GlobeMover.jsx";
import vxu from "../assets/VXu.png";
import { experience } from "../constants/experience.js";
import { projects } from "../constants/projects.js";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expandedExperience: null,
      selectedProject: null,
    };
  }

  toggleExperience = (index) => {
    this.setState((prevState) => ({
      expandedExperience: prevState.expandedExperience === index ? null : index,
    }));
  };

  renderAboutSection() {
    return (
      <div className="section about-section">
        <h2 className="title about-title">About</h2>
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
      <div className="section experience-section">
        <h2 className="titleexperience-title">Experience</h2>
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
              <div
                className={`experience-content ${
                  expandedExperience === index ? "expanded" : ""
                }`}
              >
                <p className="experience-description">{exp.description}</p>
                <div className="tags">
                  {exp.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  openProjectModal = (project) => {
    this.setState({ selectedProject: project });
  };

  closeProjectModal = () => {
    this.setState({ selectedProject: null });
  };

  renderProjectsSection() {
    const displayedProjects = projects.slice(0, 4);

    return (
      <div className="section projects-section">
        <h2 className="title projects-title">Projects</h2>
        <hr />
        <div className="projects-grid">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => this.openProjectModal(project)}
            >
              {project.image && (
                <div className="project-card-image">
                  <img src={project.image} alt={project.title} />
                </div>
              )}
              <div className="project-card-content">
                <h3 className="project-card-title">{project.title}</h3>
                <span className="project-card-date">
                  {project.startDate}
                  {project.endDate && ` - ${project.endDate}`}
                </span>
                {project.tags && project.tags.length > 0 && (
                  <div className="project-card-tags">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        {projects.length > 4 && (
          <div className="projects-see-more">
            <Link to="/projects" className="projects-see-more-link">
              See more projects →
            </Link>
          </div>
        )}
        {this.state.selectedProject && (
          <div
            className="project-modal-overlay"
            onClick={this.closeProjectModal}
          >
            <div className="project-modal" onClick={(e) => e.stopPropagation()}>
              <button
                className="project-modal-close"
                onClick={this.closeProjectModal}
              >
                ×
              </button>
              {this.state.selectedProject.image && (
                <div className="project-modal-image">
                  <img
                    src={this.state.selectedProject.image}
                    alt={this.state.selectedProject.title}
                  />
                </div>
              )}
              <div className="project-modal-content">
                <h2 className="project-modal-title">
                  {this.state.selectedProject.title}
                </h2>
                <span className="project-modal-date">
                  {this.state.selectedProject.startDate}
                  {this.state.selectedProject.endDate &&
                    ` - ${this.state.selectedProject.endDate}`}
                </span>
                <p className="project-modal-description">
                  {this.state.selectedProject.fullDescription ||
                    this.state.selectedProject.shortDescription}
                </p>
                {this.state.selectedProject.tags &&
                  this.state.selectedProject.tags.length > 0 && (
                    <div className="project-modal-tags">
                      {this.state.selectedProject.tags.map((tag, index) => (
                        <span key={index} className="project-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                {this.state.selectedProject.url && (
                  <a
                    href={this.state.selectedProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-modal-link"
                  >
                    View on GitHub →
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  render() {
    return (
      <div>
        <GlobeMover />
        {this.renderAboutSection()}
        {this.renderExperienceSection()}
        {this.renderProjectsSection()}
      </div>
    );
  }
}

export default Home;
