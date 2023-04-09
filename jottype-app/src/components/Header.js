import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Assets/logo.svg';

const Header = () => {
    return ( 
        <div className='Nav'>
            <NavLink to='/' className='NavLogo'>
                <img src={logo} alt='logo' />
            </NavLink>
            <div className='NavItems'>
                <NavLink to='/' className='NavItem'>Home</NavLink>
                <NavLink to='/notes' className='NavItem'>My Notes</NavLink>
                <NavLink to='/account' className='NavItem'>Account</NavLink>
            </div>
        </div>
    );
}
 
export default Header;