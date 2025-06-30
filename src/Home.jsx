import './App.css'
import React from 'react'
import GlobeMover from './GlobeMover'
import popoutArrow from './assets/arrow.svg'
import rhythmMaker from './assets/rhythmMakerDemo.png'
import stopdot from './assets/stopdotDemo.png'


class Home extends React.Component {
  renderRecentProject (date, projectName, description, link=null, image) {
    return (
      <div style={{display: 'flex', marginBottom: '24px', marginTop: '24px', width:'100%', justifyContent: 'space-between', alignItems: 'flex-start'}}>
        <div style={{flex: 1, display:'flex', flexFlow: 'column', justifyContent: 'flex-start'}}>
          <div style={{display: 'flex', flexFlow: 'row', alignItems: 'flex-start'}}>
            <p style={{color: '#888', fontSize: '14px', marginTop: '0px', marginBottom: '0px', flex: '1', textAlign: 'left', }}>{date}</p>
            <p style={{fontSize: '18px', marginTop: '0px', marginBottom: '0px', textAlign: 'right'}}>{projectName}</p>
          </div>
          <hr />
          <div style={{textAlign: 'left', marginTop: '20px', marginBottom: '6px'}}>{description}</div>
        </div>

        <div style={{marginLeft: '20px', display: 'flex', justifyContent: 'flex-end', flexShrink: 0}}>
          <img src={image ? image : "/darkFancy.png"} alt={projectName} style={{height: '45vh', width: '40vw', objectFit: 'contain',borderRadius: '8px'}} />
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" style={{color: '#007bff', position: 'absolute', padding: '10px'}}><img src={popoutArrow} alt={'View Project Page'}/></a>
          )}
        </div>
      </div>
    )
  }

  recentProjects = (<div style={{backgroundImage: 'linear-gradient(rgb(16,16,16), black)'}}>
    <div style={{display: 'flex', flexFlow: 'column', paddingLeft: '100px', paddingRight: '100px', paddingTop: '30px'}}>
      <h1 style={{textAlign:'left', marginBottom:"10px"}}>RECENT PROJECTS</h1>
      <hr />

      {this.renderRecentProject("11/2024","15-112 Term Project: Rhythm Maker",
      "Create, save, and play your own beatmaps for a collection of songs in Rhythm Maker!", 
      "https://github.com/vixu8/112-term-project", 
      rhythmMaker)}

      <hr />
      
      {this.renderRecentProject("12/2024","Hack112 F24: Stopdot",
      "A simple platformer game engine, made in 24 hours.", 
      'https://github.com/vixu8/hack112', 
      stopdot)}

      <hr />

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
        See all projects
      </a>
    </div>
    </div>
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
