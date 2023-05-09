import React, { useState } from 'react'
import { Card, Carousel } from 'react-bootstrap'
import  TraderHome  from '../assets/traderRecipes/TraderHome.png'
import TraderSearchRecipe from '../assets/traderRecipes/trader-search-recipe-2.png'
import TraderSearchIngredient from '../assets/traderRecipes/trader-search-ingredient.png'
import TraderLoginModal from '../assets/traderRecipes/trader-login-modal.png'
import TraderSignInModal from '../assets/traderRecipes/trader-sign-up-form.png'
import TraderDashboard from '../assets/traderRecipes/trader-dashboard.png'
import TraderPostRecipe from '../assets/traderRecipes/trader-post-recipe.png'
import TraderUpdated from '../assets/traderRecipes/trader-updated-dashboard.png'
import RepoLink from '../assets/repolink.svg'
import CodeIcon from '@mui/icons-material/Code';
import lightning from '../assets/lightning.svg'

function TraderRecipes() {
const [imageIndex, setImageIndex] = useState(0)

const handleImgChange = (selectedImgIndex, e) => {
    setImageIndex(selectedImgIndex);
}
const boldStyle = { fontWeight: 'bold' }

  return (
    
    <div>
        <div style={{display:'flex', justifyContent:'center'}} className="headerDiv">
                <h1>TRADER</h1>
                    <img className="lightning" src={lightning} />
            <h1 className="bold-storm" style={boldStyle}>RECIPES</h1>
            </div>
        <Card  style={{margin:30,
                      
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
                
                        Trader Recipes was my Capstone project for my Software Development Certification.
                        <br></br>
                        <br></br>
                         At a high-level collaborative effort, the goal was to create a complete application framework that enables & sustains user-driven content. 
                        <br></br>
                        <br></br>
                        This recipe-centric social media application is designed for users to view, post and favorite recipes on a fixed inventory list. The design model is specific to Trader Joe's and their niche selection of grocery products.   
                </Card.Text>

                <div style={{display:'flex',
                            borderRadius:10,
                            margin:'5%',
                            flexDirection:'row', 
                            justifyContent:'center',
                            columnGap:'5vw'
                       }}>
                    <div>
                        <a target="_blank" 
                           className="projectLink" 
                           style={{display:'flex', 
                                   flexDirection:'column',
                                   color:'black',
                                   textDecoration:'none'
                                }} 
                            href='https://github.com/haleynrosi/capstone-project'>
                            
                            <img className="toolkit" src={RepoLink}>
                            </img>    
                        </a>
                        Front End
                    </div>
                    <div>
                        <a target="_blank" className="projectLink" style={{display:'flex',flexDirection:'column',color:'black',textDecoration:'none'}} href='https://github.com/hunterstorm/mobile-joe-be'>
                        
                            <img className="toolkit" src={RepoLink}>
                            </img>
                        
                        </a>
                        Back End
                    </div>
                </div>
                <Card.Text style={{fontSize:'75%',paddingBottom:'25px'}}>*Full API documentation in Back End README.txt</Card.Text>
            </Card.Body>
            
        </Card>
        <Card style={{margin:30, display:'flex', textAlign:'center',justifyContent:'center',alignContent:'center'}}>
            <Card.Title style={{padding:15}}><h2>
            Features
                </h2></Card.Title>
            <Card.Body >
                <Carousel className="project-carousel" style={{ color:'rgb(0, 191, 255)',  paddingBottom: 55}}
                            activeIndex={imageIndex}
                            onSelect={handleImgChange}
                >
                    <Carousel.Item  key={0}>
                        <h3>
                            Featured Recipes Home Page
                        </h3>
                        <img style={{
                                    height:'500px',
                                    width:'100%',
                                    objectFit:'scale-down'}}src={TraderHome}></img>
                    </Carousel.Item>
                    <Carousel.Item key={1}>
                    <h3>
                            Dynamic Search Form: Recipe
                        </h3>
                        <img style={{width:'100%',
                                    height:'500px',
                                    objectFit:'scale-down'}} src ={TraderSearchRecipe}></img>
                    </Carousel.Item>
                    <Carousel.Item key={2}>
                    <h3>
                            Dynamic Search Form: Ingredient
                        </h3>
                        <img style={{width:'100%',
                                    height:'500px',
                                    objectFit:'scale-down'}} src ={TraderSearchIngredient}></img>
                    </Carousel.Item>
                    <Carousel.Item key={3}>
                    <h3>
                            User Sign-Up
                        </h3>
                        <img style={{width:'100%',
                                    height:'500px',
                                    objectFit:'scale-down'}} src ={TraderSignInModal}></img>
                    </Carousel.Item>
                    <Carousel.Item key={4}>
                    <h3>
                            User Log-In
                        </h3>
                        <img style={{width:'100%',
                                    height:'500px',
                                    objectFit:'scale-down'}} src ={TraderLoginModal}></img>
                    </Carousel.Item>

                    <Carousel.Item key={5}>
                    <h3>
                            Post Recipe
                        </h3>
                        <img style={{width:'100%',
                                    height:'500px',
                                    objectFit:'scale-down'}} src ={TraderPostRecipe}></img>
                    </Carousel.Item>

                    <Carousel.Item key={6}>
                    <h3>
                            User Dashboard
                        </h3>
                        <img style={{width:'100%',
                                    height:'500px',
                                    objectFit:'scale-down'}} src ={TraderUpdated}></img>
                    </Carousel.Item>

                </Carousel>
            </Card.Body>
        </Card>
        
    </div>
  )
}

export default TraderRecipes