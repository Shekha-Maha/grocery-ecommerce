import React from 'react'
import classes from "./TopNav.module.css"
import Drawer from './Asset/drawer.png'
import Logo from './Asset/mainlogo.png'
import User from './Asset/user.png'
import Searchbar from '../SearchBar/Searchbar'
import { Link } from 'react-router-dom'

function TopNav() {
    return (
        <div className={classes.topnav}>
            <button className={classes.drawer_btn}>
                <img  src={Drawer} alt="Drawer"/>
            </button>
            
            <img className={classes.logo} src={Logo} alt="logo"/>
            <div className={classes.search_bar}>
                <Searchbar />
            </div>
            <Link  to='/' className={classes.user_log}>
                <img className={classes.user} src={User} alt="user"/>
                <p>Account</p>
            </Link>  
        </div>
    )
}

export default TopNav
