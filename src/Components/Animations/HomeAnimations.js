import React from 'react';
import { Link } from 'react-router-dom';
import {Animator, ScrollContainer, ScrollPage, batch, Fade, MoveOut, MoveIn, FadeIn} from 'react-scroll-motion'

export default function HomeAnimations() {
  return (
      <ScrollContainer>
          <ScrollPage page={0}>
              <Animator animation={batch(FadeIn(), MoveOut())}>
                <section>
                    <div className='name-job'>
                    <h1>Caroline Chaussin</h1>
                    <h2>Hypnothérapeute</h2>
                    </div>
                    <div className="citation">
                    <p>«C’est le patient qui fait la thérapie. Le thérapeute fournit seulement l’atmosphère. Le patient doit faire tout le travail.»</p>
                    <span>Milton Erickson</span>
                    </div>
                    <div className="paragraphe">
                    <p>Chaque être est unique, chaque problème a sa solution unique en fonction de qui vous êtes. L’hypnothérapie offre les outils les plus complets. Aujourd’hui, après plusieurs années de pratique, je sais combien nous pouvons passer à côté de nous-mêmes. Tant d’idées préconçues bloquent notre évolution. Des douleurs enfouies, des traumatismes non reconnus, des états dont nous ne sommes même pas conscients souvent...</p>
                    <p>Après quelques séances d’hypnose, le regard change, les perspectives s’ouvrent... <br/>Et les possibles grandissent...</p>
                    </div>
                    <div className="citation-perso">
                    <p>Mieux se connaître pour mieux s’aimer <br/>
                        Mieux s’aimer pour mieux aimer <br/>
                        Mieux aimer pour mieux vivre <br/>
                        Avec soi et les autres <br/>
                    </p>
                    </div>
                </section>
              </Animator>
          </ScrollPage>

          <ScrollPage page={1}>
              <Animator animation={batch(Fade(), MoveOut())}>
                <section className='index-prio'>
                    <div className="who">
                    <h2>Qui suis-je ?</h2>
                    </div>
                    <div className="citation">
                    <p>« La vie, c’est comme le vélo, Pour garder l’équilibre tu dois continuer d’avancer »</p>
                    <span>Albert Einstein</span>
                    </div>
                    <div className="paragraphe">
                    <p>Juste une femme qui a déjà vécue plusieurs vies en une seule. Comédienne, puis journaliste, je me suis toujours sentie chercheuse...</p>
                    <br/>
                    <p>Comprendre l’être humain, la vie, toutes ces émotions, ces coups du sorts qui nous malmènent ou nous exaltent. Qui nous entraînent ou nous empêchent. Tous ces questionnements m’ont menée sur bien des chemins et, finalement vers l’hypnose, qui, après m’avoir accompagnée dans une période difficile, m’a offert une solide formation et nouvelle trajectoire.</p>
                    <br/>
                    <p>La pratique de la relation d’aide me nourrit et m’enrichit chaque jour.</p>
                    </div>
                </section>
              </Animator>
          </ScrollPage>

          <ScrollPage page={2}>
              <Animator animation={batch(Fade(), MoveOut(0, 300))}>
                <section className='domaines-section'>
                    <div className="citation citation-seule">
                    <p>« Ce à quoi tu résistes persiste»</p>
                    <span>proverbe Maori</span>
                    </div>
                </section>
              </Animator>
          </ScrollPage>
          <ScrollPage page={3}>
              <Animator animation={batch(FadeIn(), MoveOut(0, -300))}>
                <section className='domaine-liste'>
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
                    <p>Les bénéfices de l’hypnose interviennent dans tous les domaines de la vie.</p>
                    <p className="avertissement">Quelque soit la problématique, l’hypnose ne se substitue en aucun cas à un avis médical ni à un traitement médicamenteux.</p>
                </section>
              </Animator>
          </ScrollPage>
          <ScrollPage page={4}>
              <Animator animation={batch(Fade(), MoveIn(300, 0),MoveOut(-600, 400))}>
                <section>
                <div className="citation citation-seule">
                    <p>« Vous serez ce que vous croyez »</p>
                    <span>Jésus Christ</span>
                </div>
                </section>
              </Animator>
          </ScrollPage>
          <ScrollPage page={5}>
              <Animator>
                <section>
                    <div className="pratique">
                        <div className="citation citation-seule">
                            <p>«Un temps de partage et d’échanges bienveillants»</p>
                        </div>
                    
                    <div className="paragraphe seance-paragraphe">
                        <p>La première séance, d’une durée d’environ 1h30, permet de se connaître. La confiance étant l’élément indispensable aux résultats, vous devez pouvoir choisir de donner suite ou non. De mon côté, je vous questionne sur votre problématique afin de trouver le meilleur chemin pour vous guider.</p>
                        <p>Une première induction, légère ouvrira les portes de votre cheminement intérieur. Vous trouverez le calme et l’énergie pour avancer.</p>
                        <p>Nous définissons ensemble la suite.</p>
                        <p>Les séances suivantes seront alors planifiées.</p>
                        <p>Chacune de mes consultations est unique, adaptée à vous seul. La confidentialité est totale. (<Link to="/caroline-chaussin/ethique">Voir Charte Ethique</Link>).</p>
                    </div>
                    </div>
                </section>
              </Animator>
          </ScrollPage>
          <ScrollPage page={6}>
              <Animator animation={batch(Fade(),MoveOut(0, 200))}>
                <section className="tarif">
                    <div className="tarif-card">
                        <p className="prize">60€</p>
                        <hr/>
                        <p className="what">Une séance d'hypnothérapie</p>
                    </div>
                    <div className="coaching-card">
                        <p className="coaching-title">Coaching</p>
                        <hr/>
                        <p className="coaching-detail">Tout coaching fera l’objet d’un devis personnalisé.</p>
                    </div>
                    <p className="tarif-warning">Tarifs réduits pour les étudiants, chômeurs, personnes en difficultés. (sur justificatif)</p>
                </section>
              </Animator>
          </ScrollPage>

      </ScrollContainer>
  );
}