import React from 'react';
import sty from './footer.css';
import {Link} from 'react-router-dom';
const Footer = () => {
    return(
        <div className={sty.footer}>
            <Link to="/" className={sty.logo}>
                <img alt ="logo" src="/images/nba_logo.png" />
            </Link>
            <div className={sty.right}>
                @LOP(learnOplaza) 2018 All Rights Reserved
            </div>
        </div>
    )
}

export default Footer;