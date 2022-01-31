import React from 'react';
import '../../Static/CSS/navbar.css'
import { Link } from 'react-router-dom';
import logo from '../../Static/img/logo_2.png'

export default function NavBar() {
  return (
    <div className='navbar'>
      <nav>
        <img src={logo} alt="logo du site" className='logo' />
        <Link to="/caroline-chaussin/">Accueil</Link>
        <Link to="/caroline-chaussin/hypno">Hypnothérapie</Link>
        <Link to="/caroline-chaussin/carto">Cartomancie</Link>
        <Link to="/caroline-chaussin/atelier">Les Ateliers</Link>
        <Link to="/caroline-chaussin/ethique">Mon Ethique</Link>
      </nav>
    </div>
  );
}
