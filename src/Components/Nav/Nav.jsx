import React from 'react';
import { NavLink } from "react-router-dom";
import s from './nav.module.css';

const Nav = () => {

    return (
        <nav className={s.navBar}>
            <div>
                <NavLink to="/" className={s.active}>Home</NavLink>
            </div>
            <div>
                <NavLink to="/weather" className={s.active}>Weather</NavLink>
            </div>

            
        </nav>
    );

}

export default Nav;