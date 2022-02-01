import React from 'react';
import { Animator, ScrollContainer, ScrollPage, Fade, batch, MoveOut } from 'react-scroll-motion';

export default function AtelierAnimation() {
  return (
      <ScrollContainer>
          <ScrollPage page={0}>
              <Animator animation={batch(Fade(), MoveOut(0, -300))}>
                  <section className='games-section'>
                      <div className='game-head'>
                        <h1>Hypno-Jeux</h1>
                        <h2>Découvrez les ateliers</h2>
                      </div>
                      <a href="#taoSection">
                        <div className="container">
                            <div className="chevron"></div>
                            <div className="chevron"></div>
                            <div className="chevron"></div>
                        </div>
                      </a>
                  </section>
              </Animator>
          </ScrollPage>
          <ScrollPage page={1}>
              <Animator animation={batch(Fade(), MoveOut(0, 300))}>
                <section className='tao-game game' id='taoSection'>
                    <h2>Le jeu du Tao</h2>
                    <div className='paragraphe'>
                    <p>Le jeu du Tao est un jeu légendaire de sagesse et de réflexion qui invite à coopérer à la réalisation des souhaits énoncés par les autres joueurs. Par le questionnement mutuel et la connaissance des lois de l’univers, il nous éclaire sur les stratégies qui permettent la réalisation d’un objectif personnel ou collectif.</p>
                    <br/>
                    <br/>
                    <p>C’est un art de l’échange et du dialogue qui permet à chacun de trouver en soi les qualités à sa disposition pour servir autrui. Aider, c’est gagner ! L’esprit de la règle est de jouer avec, et non contre ses partenaires. L’art du Tao demande à chacun de s’engager à la bienveillance, la clarté, l’écoute et le respect de la liberté de parole.</p>
                    <br/>
                    <p>C’est un moment inoubliable d’ouverture et de dialogue.</p>
                    <br/>
                    <p>Une expérience qui change la vie.</p>
                    </div>
                    <a href="#mauxSection">
                    <div className="container">
                        <div className="chevron"></div>
                        <div className="chevron"></div>
                        <div className="chevron"></div>
                    </div>
                    </a>
                </section>
              </Animator>
          </ScrollPage>
          <ScrollPage page={2}>
              <Animator animation={batch(Fade(), MoveOut(0, 300))}>
                <section className='maux-game game' id='mauxSection'>
                    <h2>Raconte moi tes maux</h2>
                    <div className='paragraphe'>
                    <p>Un jeu de cartes, où chacun raconte une histoire avec les dix mots tirés dans le jeu. «mettre des mots sur les maux».</p>
                    <br/>
                    <p>Ce jeu permet d’ouvrir l’imaginaire et de développer la créativité. C’est en verbalisant les émotions, que l’on peut trouver les solutions qui nous sont propres.</p>
                    </div>
                </section>
              </Animator>
          </ScrollPage>
      </ScrollContainer>
  );
}
