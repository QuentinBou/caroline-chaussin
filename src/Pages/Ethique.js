import React from "react";
import "../Assets/styles/ethique.css";
import pdf from "../Assets/ethique.pdf";
import { AnimatePresence, motion } from "framer-motion";

export default function Ethique() {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div key={2} initial={{x: -500, opacity: 0}} animate={{x: 0, opacity: 1, transition: { type: "spring", duration: 1.5, bounce: .15}}} exit={{x: 500, opacity: 0, transition: { duration: 1.25, ease: "easeOut"}}} className="component-container ethique-container" id="ethiqueCont">
        <h1>Charte éthique:</h1>
        <ul>
          <li>
            L’hypnothérapie n’est pas un acte médical. En aucun cas elle ne
            pourrait se substituer à un suivi médical
          </li>
          <li>
            La démarche est une relation d’aide, d’écoute et d’accompagnement
            basée sur la bienveillance et la confiance.
          </li>
          <li>
            Lié par le secret professionnel, tout ce qui sera dit restera
            strictement confidentiel.
          </li>
          <li>
            Malgré l’efficacité indéniable de l’hypnose, le thérapeute n’est pas
            tenu à une obligation de résultat.
          </li>
          <li>
            Le nombre de séances est variable en fonction de chaque individu et
            reste à l’appréciation du thérapeute.
          </li>
          <li>
            Le choix et l’orientation de l’accompagnement revient à la seule
            décision du thérapeute.
          </li>
          <li>La durée de la séance reste à l’appréciation du thérapeute.</li>
          <li>Un rendez-vous manqué ou pas annulé 24h avant sera facturé.</li>
          <li>
            Il vous est demandé d’arriver à l’heure. Tout retard au delà de 15
            minutes peut annuler le rendez-vous.
          </li>
          <li>
            Le paiement s’effectue en espèce ou par CB ou paypal. L’application
            de tarifs réduits reste à l’appréciation du thérapeute.
          </li>
          <li>
            Le client s’engage sur l’honneur à n’être atteint d’aucun trouble
            psychiatrique avéré.
          </li>
        </ul>
        <p className="confirm-ethique">
          Signature (précédée de la mention lu et approuvé):
        </p>

        <a className="button-pdf" href={pdf} download>
          Télecharger le PDF
        </a>
      </motion.div>
    </AnimatePresence>
  );
}
