import React from 'react'
import logo from '../assets/retailway.png'
import classes from './NavBar.module.css'


export default function NavBar() {
    return (
        <div className={classes.navStyle}>
            <img src={logo} alt='logo' /> 
        </div>
    )
}
