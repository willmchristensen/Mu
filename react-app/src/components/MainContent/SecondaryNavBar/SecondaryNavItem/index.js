import './SecondaryNavItem.css'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const SecondaryNavItem = ({url, text}) => {

    return(
        <div className="secondary-nav-item-container">
            <NavLink
                className="secondary-nav-item"
                to={url}
            >
                {text}
            </NavLink>
        </div>
    )

}

export default SecondaryNavItem
