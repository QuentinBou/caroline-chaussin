import React from "react";
import "../Assets/styles/navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../Assets/img/logo_2.png";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BackgroundChanger from "./backgroundChanger";

export default function NavBar() {
  const [showLinks, setShowLinks] = useState(false);

  const nav = document.querySelector(".navbar");

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  const closeNav = () => {
    if (showLinks) {
      nav.classList.remove("show-nav");
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  };

  const navVariant = {
    hidden: {
      y: -50,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1,
        bounce: .25,
        staggerChildren: .25
      }
    }
  }

  return (
    <AnimatePresence>
      <motion.nav initial="hidden" whileInView="visible" variants={navVariant} className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
        <img src={logo} alt="logo du site" className="navbar-logo" />
        <ul className="navbar-links">
          <li className="navbar-item slideAnime-1" onClick={closeNav}>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-link" : "navbar-link"
              }
              to="/caroline-chaussin/">
              Accueil
            </NavLink>
          </li>

          <li className="navbar-item slideAnime-2" onClick={closeNav}>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-link" : "navbar-link"
              }
              to="/caroline-chaussin/hypno">
              Hypnothérapie
            </NavLink>
          </li>

          <li className="navbar-item slideAnime-3" onClick={closeNav}>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-link" : "navbar-link"
              }
              to="/caroline-chaussin/atelier">
              Les Ateliers
            </NavLink>
          </li>

          <li className="navbar-item slideAnime-4" onClick={closeNav}>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-link" : "navbar-link"
              }
              to="/caroline-chaussin/ethique">
              Mon Ethique
            </NavLink>
          </li>
          <BackgroundChanger target="nav" name="navigation" initialBg="#F7C67D" />
          <BackgroundChanger target="body" name="arrière-plan" initialBg="#FFE5BD" />
          <BackgroundChanger target="footer" name="pied de page" initialBg="#F7C67D" />
        </ul>
        <button className="navbar-burger" onClick={handleShowLinks}>
          <span className="burger-bar"></span>
        </button>
      </motion.nav>
    </AnimatePresence>
  );
}
