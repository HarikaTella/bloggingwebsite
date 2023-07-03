import React from 'react';
import logo from './asserts/Component 1.svg'
import { Link } from 'react-router-dom';

import './navbar.css';

const Navbar = () => {
  return (
    <div className='logo'>
        <div className='colle'>
            <Link to="/" >Collections</Link>
        </div>
        <img src={logo}></img>
        <h4>Plankton</h4>
    </div>
  )
}

export default Navbar
