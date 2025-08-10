import React from 'react';

import './css/App.css'
import { NavBar } from './components/NavBar';
import {  } from './pages/home';
import { useState, useEffect} from 'react';
import { Welcome } from './components/Welcome';
import {
  
} from "react-router-dom"
import { keepTheme } from './components/LightDarkComp';
import Toggle from './components/Toggle';
import { PageRenderer } from './components/PageRenderer';


function App() {

  useEffect(() => {
    keepTheme();
  })

  const [page, setPage] = useState("about")
  
  useEffect(() =>{
    setPage("about")
  },[])
  return (
    
    <div className="App">
      <div className="toggleWrapper">
        <Toggle />
      </div>
      <div className="myName">Fernando</div>
      
      <div className="welcomeWrapper">
        
        <Welcome />
        
      </div>

      <NavBar selectPageCallback = {setPage} currentPage={page}/>
      <div className= "renderWrapper">
        <PageRenderer page = {page} />
      </div>
      

      
    </div>
  );
}

export default App;
