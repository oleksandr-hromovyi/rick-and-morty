import React from 'react';
import './Header.css';
import NavigationBar from '../NavigationBar/NavigationBar'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
    <header className="app__header">
    <Link to="/" className="app__title">
        
            <span>Rick & Morty</span> WIKI
        
    </Link>

    <NavigationBar/>
 
</header>
</>
  )
}

export default Header