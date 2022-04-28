import React from "react";
import { Link } from "react-router-dom";
import "../Assets/styles/hypno.css";
import PBureau from "../Assets/img/PBUREAUM.jpg";
import EvBureau from "../Assets/img/EVBURO.jpg";
import { AnimatePresence, motion } from "framer-motion";
import { fadeFromTop, fadeFromBottomImg, fadeFromRight } from "../Components/animationsVariants";

export default function Home() {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div className="component-container hypno-container">
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeFromTop} className="index-prio">
          <div className="citation head-citation">
            <p>
              « La vie, c’est comme le vélo, Pour garder l’équilibre tu dois
              continuer d’avancer »
            </p>
            <span>Albert Einstein</span>

            <div className="who">
              <h2>Qui suis-je ?</h2>
              <motion.img initial="hidden" animate="visible" viewport={{ once: true }} variants={fadeFromBottomImg} src={PBureau} alt="caroline à son bureau" />
            </div>
          </div>
          <div className="paragraphe">
            <p>
              Juste une femme qui a déjà vécue plusieurs vies en une seule.
              Comédienne, puis journaliste, je me suis toujours sentie
              chercheuse...
            </p>
            <br />
            <p>
              Comprendre l’être humain, la vie, toutes ces émotions, ces coups
              du sorts qui nous malmènent ou nous exaltent. Qui nous entraînent
              ou nous empêchent. Tous ces questionnements m’ont menée sur bien
              des chemins et, finalement vers l’hypnose, qui, après m’avoir
              accompagnée dans une période difficile, m’a offert une solide
              formation et nouvelle trajectoire.
            </p>
            <br />
            <p>
              La pratique de la relation d’aide me nourrit et m’enrichit chaque
              jour.
            </p>
          </div>
        </motion.section>

        {/* <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeFromRight}>
          <div className="pratique">
            <div className="citation citation-seule">
              <h2>Ma pratique:</h2>
              <p>«Un temps de partage et d’échanges bienveillants»</p>
            </div>

            <img src={EvBureau} className="hypno-img" alt="patient en séance" />

            <div className="citation citation-seule">
              <p>« Vous serez ce que vous croyez »</p>
              <span>Jésus Christ</span>
            </div>

            <div className="paragraphe seance-paragraphe">
              <p>
                La première séance, d’une durée d’environ 1h30, permet de se
                connaître. La confiance étant l’élément indispensable aux
                résultats, vous devez pouvoir choisir de donner suite ou non. De
                mon côté, je vous questionne sur votre problématique afin de
                trouver le meilleur chemin pour vous guider.
              </p>
              <p>
                Une première induction, légère ouvrira les portes de votre
                cheminement intérieur. Vous trouverez le calme et l’énergie pour
                avancer.
              </p>
              <p>Nous définissons ensemble la suite.</p>
              <p>Les séances suivantes seront alors planifiées.</p>
              <p>
                Chacune de mes consultations est unique, adaptée à vous seul. La
                confidentialité est totale. (
                <Link to="/caroline-chaussin/ethique">Voir Charte Ethique</Link>
                ).
              </p>
            </div>
          </div>
        </motion.section> */}
      </motion.div>
    </AnimatePresence>
  );
}
