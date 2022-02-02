import React from 'react';
import '../../Static/CSS/navbar.css'
import { Link, NavLink } from 'react-router-dom';
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
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }

  return (
    <nav className={`navbar ${showLinks ? 'show-nav' : 'hide-nav'}`}>
      <img src={logo} alt="logo du site" className='navbar-logo' />
      <ul className='navbar-links'>
        <li className='navbar-item slideAnime-1' onClick={closeNav}>
          <NavLink className={({ isActive }) => 
              isActive ? 'active-link' : 'navbar-link'} to="/caroline-chaussin/">Accueil</NavLink>
        </li>
        <li className='navbar-item slideAnime-2' onClick={closeNav}>
          <NavLink className={({ isActive }) => 
              isActive ? 'active-link' : 'navbar-link'} to="/caroline-chaussin/hypno">Hypnothérapie</NavLink>
        </li>
        <li className='navbar-item slideAnime-3' onClick={closeNav}>
          <NavLink className={({ isActive }) => 
              isActive ? 'active-link' : 'navbar-link'} to="/caroline-chaussin/carto">Cartomencie</NavLink>
        </li>
        <li className='navbar-item slideAnime-4' onClick={closeNav}>
          <NavLink className={({ isActive }) => 
              isActive ? 'active-link' : 'navbar-link'} to="/caroline-chaussin/atelier">Les Ateliers</NavLink>
        </li>
        <li className='navbar-item slideAnime-5' onClick={closeNav}>
          <NavLink className={({ isActive }) => 
              isActive ? 'active-link' : 'navbar-link'} to="/caroline-chaussin/ethique">Mon Ethique</NavLink>
        </li>
      </ul>
      <button className='navbar-burger' onClick={handleShowLinks}>
        <span className='burger-bar'></span>
      </button>
    </nav>
  );
}
