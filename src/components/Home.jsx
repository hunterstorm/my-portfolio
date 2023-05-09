import React, { useRef, useEffect } from 'react'
import lightning from '../assets/lightning.svg';

import gsap from 'gsap';

import Greeting from './Greeting';

function Home() {
  const boldStyle = { fontWeight: 'bold' };



  return (
    <div className="parentDiv">
        <div className="headerDiv">
            <h1>HUNTER</h1>
            <img className="lightning" src={lightning} />
            <h1 className="bold-storm" style={boldStyle}>STORM</h1>
            </div>
            <div className= "greeting">
              <Greeting/>
              <p className='short-bio'>My name is Hunter! I am a backend-focused full-stack developer.
                <br>
                </br>
                <br>
                </br>I love to build tangible, scaleable and cohesive digital experiences. </p>
            </div>

    </div>
  );
}

export default Home;