import React from 'react';
import SideNav from 'react-simple-sidenav';
import SidenavItems from './sidenavitems';

const Sidenav = (props) => {
    return(
        <div>
            <SideNav showNav = {props.showNav}
                onHideNav={props.onHideNav}
                navStyle={{
                    background:'#242424',
                    maxWidth:'250px'
                }}
            >
                <SidenavItems />
            </SideNav>
        </div>
    )
}

export default Sidenav;