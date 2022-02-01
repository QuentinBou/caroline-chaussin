import React from 'react';
import '../Static/CSS/atelier.css'
import AtelierAnimation from '../Components/Animations/AtelierAnimation';

export default function Atelier() {
  return (
    <div className='component-container atelier-container'>
      <AtelierAnimation />
      <p className='inscription-info'>Si vous souhaitez vous inscrire aux ateliers merci d’envoyer un mail ou de téléphoner.</p>
    </div>
  );
}
