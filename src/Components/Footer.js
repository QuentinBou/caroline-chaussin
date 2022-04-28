import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeFromLeft, fadeFromRight, simplyFade } from "./animationsVariants";

export default function Footer() {
  return (
    <AnimatePresence>
      <footer>
        <motion.section initial="hidden" whileInView="visible" viewport="view" variants={fadeFromLeft}>
          <h3>Horaires</h3>
          <div className="footer-text">
            <p>
              Sur rendez-vous
            </p>
          </div>
        </motion.section>
        <motion.section initial="hidden" whileInView="visible" viewport="view" variants={simplyFade}>
          <h3>Contact</h3>
          <div className="footer-text">
            <p>Mail : Carlavoyance16@gmail.com</p>
            <p>Tel : 06.09.08.02.74</p>
          </div>
          <div className="social-link">
            <a
              href="https://www.facebook.com/hypnotherapeuteperpignan"
              target="_blank"
              className="face-logo"
              rel="noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.paypal.com/paypalme/hypnocaroline?fbclid=IwAR0vWPA0jHrhnG3hsAt8TOuLNrYMc6KX3Z_1NuYoz0KK_7HpF1N56Lq4LX4"
              target="_blank"
              className="face-logo"
              rel="noreferrer">
              <i className="fab fa-paypal"></i>
            </a>
          </div>
        </motion.section>
        <motion.section initial="hidden" whileInView="visible" viewport="view" variants={fadeFromRight}>
          <h3>Comment prendre Rendez-vous ?</h3>
          <div className="footer-text">
            <p>
              Contact via téléphone ou par adresse mail.
            </p>
          </div>
        </motion.section>
      </footer>
    </AnimatePresence>
  );
}
