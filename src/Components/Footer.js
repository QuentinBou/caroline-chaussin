import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeFromLeft, fadeFromRight, simplyFade } from "./animationsVariants";

export default function Footer() {
  return (
    <AnimatePresence>
      <footer>
        <motion.section initial="hidden" whileInView="visible" viewport="view" variants={fadeFromLeft}>
          <h3>Horraires</h3>
          <div className="footer-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, odio!
            </p>
          </div>
        </motion.section>
        <motion.section initial="hidden" whileInView="visible" viewport="view" variants={simplyFade}>
          <h3>Contact</h3>
          <div className="footer-text">
            <p>Mail : caro@test.com</p>
            <p>Tel : 06.00.00.00.00</p>
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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At sunt
              consectetur est dolorum, voluptatibus vel eveniet soluta ab a
              assumenda! Veniam non iure doloremque placeat adipisci! Eos porro
              tempore magni.
            </p>
          </div>
        </motion.section>
      </footer>
    </AnimatePresence>
  );
}
