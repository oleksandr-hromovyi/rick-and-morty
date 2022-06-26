import React from 'react';
import {NavLink} from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav className="app__menu">
    <ul>
        <li><NavLink to="/" data-name="characters"  className="nav-link">Characters</NavLink></li>
        <li><NavLink to="/location" data-name="locations" className="nav-link">Location</NavLink></li>
        <li><NavLink to="/episodes" data-name="episode" className="nav-link">Episode</NavLink></li>
    </ul>

</nav>
  )
}

export default NavigationBar;