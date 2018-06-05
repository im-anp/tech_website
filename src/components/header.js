import React, {Component} from 'react';
import sty from './header.css';
import {Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import Sidenav from './sidenav';

const Header =(props) => {

    const logo = () => {
        return (
            <Link to="/" className={sty.logo}>
                <img alt ="logo" src="/images/nba_logo.png" />
            </Link>
        )
    }
    const navBars = () =>{
        return(
            <div className={sty.bars}>
                <FontAwesome name="bars" style={{color:'#fff',cursor:'pointer',padding:'10px'}} 
                onClick={props.onShowNav}/>
            </div>
        )
    }
    return(
        <header className={sty.header}>
            <Sidenav {...props}
            />
            <div className={sty.headerOpt}>
                {navBars()}
                {logo()}
            </div>
        </header>
    )
}

export default Header;