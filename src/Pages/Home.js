import React from 'react';
import '../Static/CSS/home.css'
import HomeAnimations from '../Components/Animations/HomeAnimations';

export default function Home() {
  return (
    <div className='component-container home-container'>
      
      <HomeAnimations />
      
      <section className="consultation">
        <h2>Consultations:</h2>
        <p>Cabinet: <span>7 rue Étienne de Lacepéde 66000 Perpignan</span></p>
        <p>Visio: <span>Messenger ou Skype</span></p>
        <p>Domicile: <span>Frais supplémentaires selon distance</span></p>
      </section>
    </div>
  );
}
