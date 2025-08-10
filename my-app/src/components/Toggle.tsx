
import React from "react";

import { useEffect, useState } from "react";
import "../css/App.css"
import { setTheme } from "./LightDarkComp";


function Toggle() {
    const [togClass, setTogClass] = useState('dark');

    let theme = localStorage.getItem('theme');
    const handleOnClick = () => {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTheme('theme-light');
            setTogClass('light');
        } else {
            setTheme('theme-dark')
            setTogClass('dark')
        }
    }

    useEffect(() => {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTogClass('dark')
        } else if (localStorage.getItem('item') === 'theme-light') {
            setTogClass('light')
        }
    }, [theme])
    return (
        <div className="container --toggle">
            <button id="toggle" className="toggle--checkbox" onClick={handleOnClick}>
            ☀
            </button>
            
            <label htmlFor="toggle" className="toggle--label">
                <span className="toggle--label-background"></span>
            </label>
        </div>
    )
}
export default Toggle