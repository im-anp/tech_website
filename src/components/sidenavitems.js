import React from 'react';
import sty from './sidenav.css';
import {Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
const SidenavItems = () => {
    const items = [
        {
            type:sty.option,
            icon:'home',
            text:'Home',
            link:'/'
        },
        {
            type:sty.option,
            icon:'file-text-o',
            text:'News',
            link:'/news'
        },
        {
            type:sty.option,
            icon:'play',
            text:'Videos',
            link:'/video'
        },
        {
            type:sty.option,
            icon:'sign-in',
            text:'Sign In',
            link:'/sign-in'
        },
        {
            type:sty.option,
            icon:'sign-out',
            text:'Sign Out',
            link:'/sign-out'
        },
    ]
    const showItems =() =>{
        return(
            items.map((item,i) => {
                return(
                    <div key={i} className={item.type}>
                        <Link to={item.link}>
                            <FontAwesome name={item.icon} />
                            {item.text}
                        </Link>
                    </div>
                )
            })
        )
    }
    return(
        <div>
            {showItems()}
        </div>
    )
}

export default SidenavItems;