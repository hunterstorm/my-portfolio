import React from 'react'
import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg'

function Footer() {
  return (
    <div className="foot">

        <div className="linkContainer">
            <a target="_blank" href="https://github.com/hunterstorm"><img className="out-links" src={github}/></a>
            <a target="_blank" href="https://www.linkedin.com/in/hunter-reese-985299235/"><img className="out-links" src={linkedin}/></a>
        </div>
        <br>
        </br>
        <div style={{ color:'#999999',display:'flex',flexDirection:'column',fontSize:'105%'}}>
          <p>Hunter Storm Reese</p>
          <p>huntersreese@gmail.com</p>
          <p>Denver, CO</p>
        </div>
  </div>

  )
}

export default Footer