import React from 'react'
import lightning from '../assets/lightning.svg';
import Card from "react-bootstrap/Card";
import git from "../assets/git.svg";
import powershell from "../assets/powershell.svg";
import bash from "../assets/bash.svg";
import css from "../assets/css.svg";
import html from "../assets/html.svg";
import javascript from "../assets/javascript.svg";
import react from "../assets/react.svg";
import node from "../assets/node.svg";
import redux from "../assets/redux.svg";
import express from "../assets/express.svg";
import sequelize from "../assets/sequelize.svg";
import postgres from "../assets/postgres.svg";
import aws from "../assets/aws.svg";
import ec2 from "../assets/ec2.svg";
import rds from "../assets/rds.svg";
import s3 from "../assets/s3.svg";
import materialUi from "../assets/material-ui.svg";
import hunterportrait from "../assets/hunterPortrait.jpg";

function About() {
    const boldStyle = { fontWeight: 'bold' }
  return (
    <div className="parentDiv">
        <div className="headerDiv">
            <h1>ABOUT</h1>
            <img className="lightning" src={lightning} />
            <h1 className="bold-storm" style={boldStyle}>ME</h1>

        </div>

        <Card style={{ backgroundColor: 'black'}} className="about-pic">
          <Card.Body>
            <h2> The Developer</h2>
            <a style={{ backgroundColor:'white', borderRadius:360,             
                                                 maxHeight: '20vw'}} title="LinkedIn" href="https://www.linkedin.com/in/hunter-reese-985299235/">
            <img style={{ backgroundColor:'white', borderRadius:360,             
                                                 maxHeight: '20vw', 
                                                  width: 'auto', 
                                                  height: 'auto', 
                                                  objectFit: 'cover'}} src={hunterportrait}></img>
                                                  </a>
          </Card.Body>
        
        </Card>
        
        <Card style={{ backgroundColor: 'black'}} className="about-bio">
          <Card.Body style={{}}>
            <h2> Experience and Expertise </h2>
            <Card.Text >As a recent graduate with a strong background in both front-end and back-end development, I am passionate about creating web applications that are both user-friendly and scalable. While I have experience in both areas, my true passion lies in designing and implementing secure and efficient backend systems.

            </Card.Text>
            <Card.Text>During my studies, I excelled in building custom RESTful APIs, integrating third-party services, optimizing database performance, and setting up cloud-based server infrastructure. With a keen understanding of data structures and algorithms, I am confident in my ability to create performant and reliable systems that can handle heavy traffic and high loads.

            </Card.Text>
          
          </Card.Body>
          </Card>
          <Card style={{ backgroundColor: 'black'}} className="cmdLines">
          <Card.Body style={{}}>
            <h2> Toolkit </h2>
            <h3>Command Lines</h3>
            <img className="toolkit" title="Powershell" src={powershell}/>
            <img className="toolkit" title="Bash" src={bash}/>
            <img className="toolkit" title="Git" src={git}/>
            <h3> Progamming Languages</h3>
            <img className="toolkit" title="Javascript" src={javascript}/>
            <img className="toolkit" title="HTML" src={html}/>
            <img className="toolkit" title="CSS" src={css}/>
            <h3>Libraries</h3>

            <img className="toolkit" title= "Node.js" src={node}/>
            <img className="toolkit" title= "Express.js" src={express}/>
            <img className="toolkit" title= "Sequelize.js" src={sequelize}/>
            <img className="toolkit" title= "React.js" src={react}/>
            <img className="toolkit" title= "React-Redux/Redux Toolkit" src={redux}/>
            <img className="toolkit" title= "Material UI" src={materialUi}/>
    

            <h3>Databases</h3>
            <img className="toolkit" title="PostgreSQL"src={postgres}/>

            <h3><img className="aws" src={aws}/>Cloud Services</h3>
            <img className="toolkit" title= "Amazon Relational Database Service (RDS)" src={rds}/>
            <img className="toolkit" title="Amazon Elastic Compute Cloud (EC2)"src={ec2}/>
            <img className="toolkit" title="Amazon Simple Storage Service (S3)"src={s3}/>
            


          </Card.Body>
          </Card>
          
            
    </div>
  )
}

export default About


