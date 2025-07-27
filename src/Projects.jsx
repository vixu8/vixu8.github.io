import React from "react";
import { Link } from "react-router-dom";

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

  render() {
    return (
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem" }}>
        <h1>Projects</h1>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {this.projects.map((project) => (
            <li
              key={project.id}
              style={{
                marginBottom: "2rem",
                borderBottom: "1px solid #eee",
                paddingBottom: "1rem",
              }}
            >
              <h2>
                <Link to={`/projects/${project.id}`}>{project.title}</Link>
              </h2>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Projects;
