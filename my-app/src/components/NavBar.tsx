
import "../css/App.css"
import { About } from "../pages/About"
import { useState,useEffect } from "react"

export function NavBar(props: any) {

    


    

    return (

        <div className = "navWrapper">
            
            <div className = "items">
                <button className= "tabs" onClick={() => props.selectPageCallback("projects")}>Projects</button>
                <button className= "tabs" onClick= {() => props.selectPageCallback("about")}>About</button>
                <button className= "tabs" onClick ={() => props.selectPageCallback("resume")}>Resume</button>
            </div>
            <div className = "navLine"></div>
            
        </div>
        
    )
}