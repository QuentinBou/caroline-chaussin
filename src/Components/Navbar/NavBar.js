import React from 'react';
import '../../Static/CSS/navbar.css'
import { Link } from 'react-router-dom';
import logo from '../../Static/img/logo_2.png'
import { useState } from 'react';

export default function NavBar() {
  
  const [showLinks, setShowLinks] = useState(false)

  const nav = document.querySelector('.navbar')

  const handleShowLinks = () => {
    setShowLinks(!showLinks)
  }

  const closeNav = () => {
    if (showLinks){
      nav.classList.remove('show-nav')
    }
  }

  return (
    <nav className={`navbar ${showLinks ? 'show-nav' : 'hide-nav'}`}>
      <img src={logo} alt="logo du site" className='navbar-logo' />
      <ul className='navbar-links'>
        <li className='navbar-item slideAnime-1' onClick={closeNav}>
          <Link className='navbar-link' to="/caroline-chaussin/">Accueil</Link>
        </li>
        <li className='navbar-item slideAnime-2' onClick={closeNav}>
          <Link className='navbar-link' to="/caroline-chaussin/hypno">Hypnothérapie</Link>
        </li>
        <li className='navbar-item slideAnime-3' onClick={closeNav}>
          <Link className='navbar-link' to="/caroline-chaussin/carto">Cartomencie</Link>
        </li>
        <li className='navbar-item slideAnime-4' onClick={closeNav}>
          <Link className='navbar-link' to="/caroline-chaussin/atelier">Les Ateliers</Link>
        </li>
        <li className='navbar-item slideAnime-5' onClick={closeNav}>
          <Link className='navbar-link' to="/caroline-chaussin/ethique">Mon Ethique</Link>
        </li>
      </ul>
      <button className='navbar-burger' onClick={handleShowLinks}>
        <span className='burger-bar'></span>
      </button>
    </nav>
  );
}
