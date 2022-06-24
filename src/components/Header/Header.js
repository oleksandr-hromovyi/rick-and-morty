import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <>
    <header className="app__header">
    <h1 className="app__title">
        <a href="#">
            <span>Rick & Morty</span> WIKI
        </a>
    </h1>
    <nav className="app__menu">
        <ul>
            <li><a href="#" data-name="characters">Characters</a></li>
            /
            <li><a href="#"  data-name="locations">Location</a></li>
            /
            <li><a href="#" data-name="episode">Episode</a></li>
        </ul>

    </nav>
</header>
</>
  )
}

export default Header