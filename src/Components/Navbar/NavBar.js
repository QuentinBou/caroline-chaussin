import React from 'react';
import '../../Static/CSS/navbar.css'
import { Link } from 'react-router-dom';
import logo from '../../Static/img/logo_2.png'
import { useState } from 'react';

export default function NavBar() {
  
  const [showLinks, setShowLinks] = useState(false)

  const handleShowLinks = () => {
    setShowLinks(!showLinks)
  }

  return (
    <nav className='navbar showNav'>
      <img src={logo} alt="logo du site" className='navbar-logo' />
      <ul className='navbar-links'>
        <li className='navbar-item'>
          <Link className='navbar-link' to="/caroline-chaussin/">Accueil</Link>
        </li>
        <li className='navbar-item'>
          <Link className='navbar-link' to="/caroline-chaussin/hypno">Hypnothérapie</Link>
        </li>
        <li className='navbar-item'>
          <Link className='navbar-link' to="/caroline-chaussin/carto">Cartomencie</Link>
        </li>
        <li className='navbar-item'>
          <Link className='navbar-link' to="/caroline-chaussin/atelier">Les Ateliers</Link>
        </li>
        <li className='navbar-item'>
          <Link className='navbar-link' to="/caroline-chaussin/ethique">Mon Ethique</Link>
        </li>
      </ul>
      <button className='navbar-burger' onClick={handleShowLinks}>
        <span className='burger-bar'></span>
      </button>
    </nav>
  );
}
