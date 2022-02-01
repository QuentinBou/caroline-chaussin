import React from 'react';
import '../Static/CSS/home.css'

export default function Home() {
  return (
    <div className='component-container home-container'>
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
          <p>Chaque être est unique, chaque problème a sa solution unique en fonction de qui vous êtes. L’hypnothérapie offre les outils les plus complets, Aujourd’hui, après plusieurs années de pratique, je sais combien nous pouvons passer à côté de nous-mêmes. Tant d’idées préconçues bloquent notre évolution. Des douleurs enfouies, des traumatismes non reconnus, des états dont nous ne sommes même pas conscients souvent...</p>
          <br/>
          <p>Après quelques séances d’hypnose, le regard change, les perspectives s’ouvrent... <br/>Et les possibles grandissent...</p>
        </div>
        <div className="citation">
          <p>Mieux se connaître pour mieux s’aimer <br/>
            Mieux s’aimer pour mieux aimer <br/>
            Mieux aimer pour mieux vivre <br/>
            Avec soi et les autres <br/>
          </p>
        </div>
      </section>
      <section>
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
      <section>
        <div className="domaines">
          <h2>Domaines d’intervention:</h2>
          <h3>Adultes, enfants, adolescents</h3>
        </div>
        <div className="citation">
          <p>« Ce à quoi tu résistes persiste»</p>
          <span>proverbe Maori</span>
        </div>
        <div className="domaine-liste">
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
        </div>
      </section>
      <section>
        <div className="pratique">
          <div className="citation">
            <p>« Vous serez ce que vous croyez »</p>
            <span>Jésus Christ</span>
          </div>
          <div className="citation">
            <p>«Un temps de partage et d’échanges bienveillants»</p>
          </div>
          <div className="paragraphe">
            <p>La première séance, d’une durée d’environ 1h30, permet de se connaître. La confiance étant l’élément indispensable aux résultats, vous devez pouvoir choisir de donner suite ou non. De mon côté, je vous questionne sur votre problématique afin de trouver le meilleur chemin pour vous guider.</p> <br/>
            <p>Une première induction, légère ouvrira les portes de votre cheminement intérieur. Vous trouverez le calme et l’énergie pour avancer.</p> <br/>
            <p>Nous définissons ensemble la suite.</p><br/>
            <p>Les séances suivantes seront alors planifiées.</p>
            <br/>
            <br/>
            <p>Chacune de mes consultations est unique, adaptée à vous seul. La confidentialité est totale. (voir charte éthique).</p>
          </div>
        </div>
      </section>
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
      <section className="consultation">
        <h2>Consultations:</h2>
        <p>Cabinet: <span>7 rue Étienne de Lacepéde 66000 Perpignan</span></p>
        <p>Visio: <span>Messenger ou Skype</span></p>
        <p>Domicile: <span>Frais supplémentaires selon distance</span></p>
      </section>
    </div>
  );
}