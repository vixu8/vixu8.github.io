import React from "react";
import "../App.scss";
import "./Projects.scss";

import projects from "../constants/projects.js";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProject: null,
    };
  }

  openProjectModal = (project) => {
    this.setState({ selectedProject: project });
  };

  closeProjectModal = () => {
    this.setState({ selectedProject: null });
  };

  renderProjectsSection() {
    return (
      <div className="section projects-section">
        <h2 className="title projects-title">Projects</h2>
        <hr />
        <div className="projects-grid">
          {projects.map((project) => (
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
    void projects;

    return <div>{this.renderProjectsSection()}</div>;
  }
}

export default Projects;
