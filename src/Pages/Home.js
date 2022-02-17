import React from "react";
import "../Assets/styles/home.css";
import { motion, AnimatePresence } from "framer-motion";
import M2 from "../Assets/img/M2.jpg";
import Oiseau from "../Assets/img/oiseau.jpg";
import { fadeFromBottom, fadeFromLeft, fadeFromRight, scaleIn, simplyFade } from "../Components/animationsVariants";

export default function Home() {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div className="component-container home-container">
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeFromLeft}>
          <div className="name-job">
            <h1>Caroline Chaussin</h1>
            <h2>Hypnothérapeute</h2>
          </div>
          <div className="citation">
            <p>
              «C’est le patient qui fait la thérapie. Le thérapeute fournit
              seulement l’atmosphère. Le patient doit faire tout le travail.»
            </p>
            <span>Milton Erickson</span>
          </div>
          <div className="paragraphe">
            <p>
              Chaque être est unique, chaque problème a sa solution unique en
              fonction de qui vous êtes. L’hypnothérapie offre les outils les
              plus complets. Aujourd’hui, après plusieurs années de pratique, je
              sais combien nous pouvons passer à côté de nous-mêmes. Tant
              d’idées préconçues bloquent notre évolution. Des douleurs
              enfouies, des traumatismes non reconnus, des états dont nous ne
              sommes même pas conscients souvent...
            </p>
            <p>
              Après quelques séances d’hypnose, le regard change, les
              perspectives s’ouvrent... <br />
              Et les possibles grandissent...
            </p>
          </div>
          <div className="image-and-text">
            <img src={Oiseau} alt="Oiseaux qui s'envolent" />
            <div className="citation-perso">
              <p>
                Mieux se connaître pour mieux s’aimer <br />
                Mieux s’aimer pour mieux aimer <br />
                Mieux aimer pour mieux vivre <br />
                Avec soi et les autres <br />
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={simplyFade} className="domaines-section">
          <div className="citation citation-seule">
            <p>« Ce à quoi tu résistes persiste»</p>
            <span>proverbe Maori</span>
          </div>
        </motion.section>

        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeFromRight} className="domaine-liste">
          <img src={M2} className="profil-pic" alt="profil" />
          <div className="domaines">
            <h2>Domaines d’intervention:</h2>
            <h3>Adultes, enfants, adolescents</h3>
          </div>
          <ul>
            <li>Dépression, deuil, burn out, confiance en soi</li>
            <li>Troubles alimentaires et gestion du poids</li>
            <li>Troubles post-traumatiques</li>
            <li>Troubles du comportement</li>
            <li>Douleurs physiques</li>
            <li>Peurs et phobies</li>
            <li>Allergies</li>
            <li>Développement personnel</li>
            <li>Accidents de la vie</li>
            <li>Addictions et dépendances</li>
          </ul>
          <p>
            Les bénéfices de l’hypnose interviennent dans tous les domaines de
            la vie.
          </p>
          <p className="avertissement">
            Quelque soit la problématique, l’hypnose ne se substitue en aucun
            cas à un avis médical ni à un traitement médicamenteux.
          </p>
        </motion.section>

        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeFromBottom} className="tarif">
          <div className="tarif-card">
            <p className="prize">60€</p>
            <hr />
            <p className="what">Une séance d'hypnothérapie</p>
          </div>
          <div className="coaching-card">
            <p className="coaching-title">Coaching</p>
            <hr />
            <p className="coaching-detail">
              Tout coaching fera l’objet d’un devis personnalisé.
            </p>
          </div>
          <p className="tarif-warning">
            Tarifs réduits pour les étudiants, chômeurs, personnes en
            difficultés. (sur justificatif)
          </p>
        </motion.section>
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={simplyFade} className="consult">Consultations:</motion.h2>
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn} className="consultation">
          <p>
            Cabinet: <span>7 rue Étienne de Lacepéde 66000 Perpignan</span>
          </p>
          <p>
            Visio: <span>Messenger ou Skype</span>
          </p>
          <p>
            Domicile: <span>Frais supplémentaires selon distance</span>
          </p>
        </motion.section>
      </motion.div>
    </AnimatePresence>
  );
}
