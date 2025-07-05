import './App.scss'
import './Home.scss'

import React from 'react'
import GlobeMover from './GlobeMover'
import popoutArrow from './assets/arrow.svg'
import rhythmMaker from './assets/rhythmMakerDemo.png'
import stopdot from './assets/stopdotDemo.png'


class Home extends React.Component {
  renderRecentProject(date, projectName, description, link = null, image) {
    return (
      <div className="recent-project-container">
        <div className="recent-project-info">
          <div className="recent-project-header">
            <p className="recent-project-date">{date}</p>
            <p className="recent-project-title">{projectName}</p>
          </div>
          <hr />
          <div className="recent-project-description">{description}</div>
        </div>

        <div className="recent-project-image-container">
          <img
            src={image ? image : "/darkFancy.png"}
            alt={projectName}
            className="recent-project-image"
          />
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="recent-project-link"
            >
              <img src={popoutArrow} alt={'View Project Page'} />
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
        "https://github.com/vixu8/112-term-project",
        rhythmMaker
      )}

      <hr />

      {this.renderRecentProject(
        "12/2024",
        "Hack112 F24: Stopdot",
        "A simple platformer game engine, made in 24 hours.",
        "https://github.com/vixu8/hack112",
        stopdot
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

export default Home
