import React from 'react';
import logo from '../../images/header.jpg';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
            <a href="home">Home</a>
            <a href="addfriend">Add Friend</a>
        </nav>
        </div>
    );
};

export default Header;