import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';

export default () => {
    return(
        <ul className='nav nav-tabs mt-3'>
            <li className="nav-item">
                <NavLink exact activeClassName="active selected" className="nav-link" to='/'>Welcome</NavLink>
            </li>
            <li className="nav-item">
                <NavLink activeClassName="active selected" className="nav-link" to='/our_macarons'>our_macarons</NavLink>
            </li>
            <li className="nav-item">
                <NavLink activeClassName="active selected" className="nav-link" to='/gifts_parties'>gifts_parties</NavLink>
            </li>
            <li className="nav-item">
                <NavLink activeClassName="active selected" className="nav-link" to='/contact'>contact info</NavLink>
            </li>
        </ul>
    )
}