import React from 'react'
import classes from "./WithoutSearch.module.css"
import Logo from "../../../Asset/mainlogo.png"
import Drawer from "../../../Asset/drawer.png"
import User from '../../../Asset/user.png'
import { Link } from 'react-router-dom'


function TopNavWithoutSearch() {
    return (
        <div className={classes.topnav}>
            <div className="container custom-container">
                <div className="row ">
                    <div className= {classes.navbar+ " col-12 d-flex align-items-center justify-content-between"}>
                        <button className={classes.drawer_btn}>
                            <img className='img-fluid' src={Drawer} alt="Drawer"/>
                        </button>   
                        <Link  to='/'>
                            <img className={classes.logo+ ' img-fluid'} src={Logo} alt="logo"/>
                        </Link>      
                        <div >
                            <Link  to='/' className={classes.user_log}>
                                <img className={classes.user+ ' img-fuid'} src={User} alt="user"/>
                                <p>Account</p>
                            </Link>
                        </div>         
                    </div> 
                </div>    
            </div>   
        </div>
    )
}

export default TopNavWithoutSearch
