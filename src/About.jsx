import './App.scss'
import React from 'react'
import asia from './assets/asia2.png'


class About extends React.Component {
  render () { 
    return  <div style={{padding: '100px'}}>
        <h1 style={{textAlign: 'left'}}>ABOUT</h1>
        <hr />
        <div style={{ display: 'flex', alignItems: 'flex-start', marginTop: '2rem' }}>
            <div style={{ flex: 1, paddingRight: '2rem' }}>
                <p>
                    blahblahblah, blehblehbleh, blublublu                
                </p>
            </div>
            <div style={{ flex: '0 0 200px' }}>
                <img
                    src={asia}
                    alt="About me"
                    style={{ width: '200px', borderRadius: '8px' }}
                />
            </div>
        </div>

    {/* <Footer /> */}
  </div>
  }
}

export default About
