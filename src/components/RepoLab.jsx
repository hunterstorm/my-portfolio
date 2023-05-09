import React, { useState } from 'react'
import { Card, Carousel } from 'react-bootstrap'
import RepoForm  from '../assets/repoLab/repolab-form.png'
import RepoRepositories from '../assets/repoLab/repolab-repositories.png'
import TraderSearchIngredient from '../assets/traderRecipes/trader-search-ingredient.png'
import TraderLoginModal from '../assets/traderRecipes/trader-login-modal.png'
import TraderSignInModal from '../assets/traderRecipes/trader-sign-up-form.png'
import TraderDashboard from '../assets/traderRecipes/trader-dashboard.png'
import TraderPostRecipe from '../assets/traderRecipes/trader-post-recipe.png'
import TraderUpdated from '../assets/traderRecipes/trader-updated-dashboard.png'
import RepoLink from '../assets/repolink.svg'
import CodeIcon from '@mui/icons-material/Code';
import lightning from '../assets/lightning.svg'

function RepoLab() {
const [imageIndex, setImageIndex] = useState(0)

const handleImgChange = (selectedImgIndex, e) => {
    setImageIndex(selectedImgIndex);
}
const boldStyle = { fontWeight: 'bold' }

  return (
    
    <div className="parentDiv">
        <div style={{display:'flex', justifyContent:'center'}} className="headerDiv">
                <h1>REPO</h1>
                    <img className="lightning" src={lightning} />
            <h1 className="bold-storm" style={boldStyle}>LAB</h1>
            </div>
        <Card  style={{width:'85%',
                      
                      color:'white', 
                      borderWidth:3,
                      borderColor:'#999999',
                      backgroundColor:'black', 
                      fontSize:'115%',
                      display:'flex', 
                      textAlign:'center', 
                      justifyContent:'center' }}>
            <Card.Body>
                <Card.Title>
                    <h2>
                        Synopsis
                    </h2>
                </Card.Title>
                <Card.Text>
                
                        repoLab is a React.js project that retrieves public Github repositories by username.
                        <br></br>
                        <br></br>
                          With its simple UI and functionality, the goal was to create a developer tool that handled an input, a state change, an API request with a variable dependancy and response data mapping.
                        <br></br>
                        <br></br>
                         As small of a project as it is, repoLab was a cornerstone in my learning experience. I was able to impliment the techniques I learned into nearly every feature I have programmed, since.              </Card.Text>

                <div style={{display:'flex',
                           
                         
                            borderRadius:10,
                            margin:'5%',
                            flexDirection:'row', 
                            justifyContent:'center'
                       }}>
                    <div>
                        <a target="_blank" 
                           className="projectLink" 
                           style={{display:'flex', 
                                   flexDirection:'column',
                                   color:'black',
                                   textDecoration:'none'
                                }} 
                            href='https://github.com/hunterstorm/repo-app'>
                            
                            <img className="toolkit" src={RepoLink}>
                            </img>    
                        </a>
                        Front End
                    </div>
                </div>
            </Card.Body>
        </Card>
        <Card style={{width:'85%', display:'flex', textAlign:'center',justifyContent:'center',alignContent:'center'}}>
            <Card.Title style={{padding:15}}>
                <h2>
            Features
                </h2></Card.Title>
            <Card.Body >
                <Carousel className="project-carousel" style={{ color:'rgb(0, 191, 255)', paddingBottom: 55}}
                            activeIndex={imageIndex}
                            onSelect={handleImgChange}
                >
                    <Carousel.Item key={0}>
                        <h3>
                            Github Username Search Form
                        </h3>
                        <img style={{
                                    height:'500px',
                                    width:'100%',
                                    objectFit:'scale-down'}}src={RepoForm}></img>
                    </Carousel.Item>
                    <Carousel.Item key={1}>
                    <h3>
                            Form Response: All User Repositories
                        </h3>
                        <img style={{width:'100%',
                                    borderRadius:'15px',
                                    height:'500px',
                                    objectFit:'scale-down'}} 
                              src ={RepoRepositories}></img>
                    </Carousel.Item>
                </Carousel>
            </Card.Body>
        </Card>
        
    </div>
  )
}

export default RepoLab