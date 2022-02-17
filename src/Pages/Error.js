import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Assets/styles/error.css";
import NotFound from "../Components/notFound";
import { motion, AnimatePresence } from "framer-motion";

const Error = () => {
  useEffect(() => {
    const container = document.querySelector(".App");
    container.removeChild(document.querySelector("nav"));
    container.removeChild(document.querySelector("footer"));
  }, []);

  return (
    <AnimatePresence>
      <div className="error-page">
        <NotFound />
        <motion.div 
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0, transition: { type: "spring", duration: 2, bounce: .4 }}}
        className="error-page-text">
          <h2>Oooopss...</h2>
          <p>
            Cette page n'existe pas. Tu peux cliquer{" "}
            <Link to="/caroline-chaussin/" className="error-page-link">
              ici
            </Link>{" "}
            pour retourner a l'accueil.
          </p>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default Error;
