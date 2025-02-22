import React from 'react';
import './style.css';

import hamburger from './hamburger.png'
import uber from './uber.png'

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>

            <div className='header-top-bar'>
                <div className="header-container">
                    <Link to={'/'}>
                        <img height="60px" src={hamburger} />
                    </Link>
                    <img height="60px" src={uber} />
                </div>
            </div>
        </>
    );
};

export default Header;
