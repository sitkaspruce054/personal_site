import React from 'react';
import logo from './logo.svg';
import './css/App.css'
import { NavBar } from './components/NavBar';
import { home } from './pages/home';
import { useState, useEffect} from 'react';
import { Welcome } from './components/Welcome';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import { keepTheme } from './components/LightDarkComp';
import Toggle from './components/Toggle';
import { PageRenderer } from './components/PageRenderer';


function App() {

  useEffect(() => {
    keepTheme();
  })

  const [page, setPage] = useState("")
  
  return (
    
    <div className="App">
      <div className="toggleWrapper">
        <Toggle />
      </div>
      
      <div className="welcomeWrapper">
        
        <Welcome />
        
      </div>

      <NavBar selectPageCallback = {setPage}/>
      <div className= "renderWrapper">
        <PageRenderer page = {page} />
      </div>
      

      
    </div>
  );
}

export default App;
