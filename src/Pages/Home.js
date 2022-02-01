import React from 'react';
import '../Static/CSS/home.css'
import HomeAnimations from '../Components/Animations/HomeAnimations';

export default function Home() {
  return (
    <div className='component-container home-container'>
      
      <HomeAnimations />
      
      <h2 className='consult'>Consultations:</h2>
      <section className="consultation">
        <p>Cabinet: <span>7 rue Étienne de Lacepéde 66000 Perpignan</span></p>
        <p>Visio: <span>Messenger ou Skype</span></p>
        <p>Domicile: <span>Frais supplémentaires selon distance</span></p>
      </section>
    </div>
  );
}
