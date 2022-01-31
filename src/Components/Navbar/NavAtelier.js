import React from 'react';
import { Link } from 'react-router-dom';

export default function NavAtelier() {
  return (
      <nav>
          <Link to="/caroline-chaussin/atelier/tao">Jeu du Tao</Link>
          <Link to="/caroline-chaussin/atelier/maux">Raconte moi tes maux</Link>
      </nav>
  );
}
