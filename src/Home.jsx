import './App.css'
import React from 'react'
import GlobeMover from './GlobeMover'


class Home extends React.Component {
  renderRecentProject (date, projectName, description, link=null, image) {
    return (
      <div style={{display: 'flex', alignItems: 'center', marginBottom: '24px', marginTop: '24px', width:'100%', justifyContent: 'space-between'}}>
        <div style={{flex: 1, display:'flex', flexFlow: 'column'}}>
          <div style={{fontWeight: 'bold', fontSize: '18px'}}>{projectName}</div>
          <div style={{color: '#888', fontSize: '14px', marginBottom: '6px'}}>{date}</div>
          <div style={{marginBottom: '6px'}}>{description}</div>
          {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" style={{color: '#007bff'}}>View Project</a>
          )}
        </div>
        {image && (
          <div style={{marginLeft: '20px', display: 'flex', justifyContent: 'flex-end', flexShrink: 0}}>
          <img src={image} alt={projectName} style={{height: '45vh', width: '35vw', objectFit:'fill',borderRadius: '8px'}} />
          </div>
        )}
      </div>
    )
  }

  recentProjects = (<>
    <div style={{display: 'flex', flexFlow: 'column', marginLeft: '100px', marginRight: '100px'}}>
      <h1 style={{textAlign:'left', marginBottom:"10px"}}>What I'm Up To</h1>
      <hr />

      {this.renderRecentProject("1/2025","CMU CS Academy: Software Engineering Intern",
      "blahblahblah, blublublu",null, '/africa2.png')}

      <hr />

      {this.renderRecentProject("11/2024","15-112 Term Project: Rhythm Maker",
      "blahblahblah, blublublu",null, '/africa2.png')}

      <hr />

      {this.renderRecentProject("11/2024","Hack112: Stopdot",
      "blahblahblah, blublublu",null, '/africa2.png')}

    </div>

    <div style={{ marginTop: '20px', textAlign: 'center' }}>
      <a
        href="https://github.com/vixu8"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: '#fff',
          fontWeight: 'bold',
          textDecoration: 'underline',
        }}
      >
        See more projects
      </a>
    </div>
    </>
  )

  render () { 
    return  <div >
    <GlobeMover />

    {this.recentProjects}

    {/* <Footer /> */}
  </div>
  }
}

export default Home
