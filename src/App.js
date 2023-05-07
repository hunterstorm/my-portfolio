import React, { useState, useEffect } from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from "./components/Header";
import Loading from "./components/Loading";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import TraderRecipes from "./components/TraderRecipes";
import RepoLab from "./components/RepoLab";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

const App = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <>
      
      {isLoading ? (
        <div className="loading-screen">
          <Loading />
        </div>
      ) : (
        <div className = "app">
          <BrowserRouter>
            <Header />
            
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/traderrecipes"element={<TraderRecipes/>}/>
              <Route path="/RepoLab"element={<RepoLab/>}/>
            </Routes>
            <Footer/>

          </BrowserRouter>
        </div>
      )}
    </>
  );
};

export default App;