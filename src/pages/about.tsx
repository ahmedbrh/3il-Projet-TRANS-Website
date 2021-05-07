import React from 'react';
import { Helmet } from 'react-helmet';

import { css } from '@emotion/react';

import { Footer } from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import { PostFullContent } from '../components/PostContent';
import { Wrapper } from '../components/Wrapper';
import IndexLayout from '../layouts';
import {
  inner,
  outer,
  SiteArchiveHeader,
  SiteHeader,
  SiteMain,
  SiteNavMain,
} from '../styles/shared';
import { NoImage, PostFull, PostFullHeader, PostFullTitle } from '../templates/post';
import { colors } from '../styles/colors';

const PageTemplate = css`
  .site-main {
    margin-top: 64px;
    padding-bottom: 4vw;
    background: #fff;
  }

  @media (prefers-color-scheme: dark) {
    .site-main {
      /* background: var(--darkmode); */
      background: ${colors.darkmode};
    }
  }
`;

const About: React.FC = () => (
  <IndexLayout>
    <Helmet>
      <title>About</title>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header className="site-archive-header no-image" css={[SiteHeader, SiteArchiveHeader]}>
        <div css={[outer, SiteNavMain]}>
          <div css={inner}>
            <SiteNav isHome={false} />
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <div css={inner}>
          <article className="post page" css={[PostFull, NoImage]}>
            <PostFullHeader className="post-full-header">
              <PostFullTitle className="post-full-title">About</PostFullTitle>
            </PostFullHeader>

            <PostFullContent className="post-full-content">
              <div className="post-content">
                <h5>
                 JUST HEAL <br /> Livraison de médicaments et parapharmacie 7j/7
                </h5>
                <p>
                Livraison de médicaments et parapharmacie 7j/7 dans votre ville avec des pharmaciens à votre écoute.

Notre service est disponible à travers la France entière dans plus de 230 villes comme <strong>  Paris, Marseille, Lyon, Toulouse, Nice, Nantes, Montpellier, Strasbourg, Bordeaux, Lille…</strong>
                </p>
                <h2>LIVRAISON DE MÉDICAMENTS ET
PARAPHARMACIE 7J/7</h2>
                <p>
                Aujourd’hui la livraison de médicaments est croissante et les pharmacies n’ont pas d’autres choix que de s’adapter. Face à un constat alarmant sur les personnes en incapacités de se déplacer pour récupérer leurs traitements, des start-up métropolitaines proposent désormais des livraisons de médicaments sur ordonnance ainsi que de la parapharmacie.

À l’heure actuelle, près de 54 % de la population française (Source : Statista) est potentiellement intéressée par ce service de livraison à domicile. Une aubaine pour l’industrie pharmaceutique !

Zoom sur ce nouvel enjeu des pharmaciens pour répondre à un besoin urgent.
                </p>
               <hr style={{color :"white", width: "100%" ,  border: "1px solid white"  }}/>  
                
            <h2>LA LIVRAISON AVEC LES PHARMACIES :
QU’EST-CE QUE C’EST ?</h2>
                <p>
                Tandis qu’il est tout à fait normal d’être livré à domicile d’une pizza ou d’un plateau de sushi, il est dorénavant possible d’être livré à domicile de ses médicaments avec ou sans ordonnance.

Que ce soit pour un proche ou pour soi, aller chercher ses médicaments n’est pas toujours une chose aisée. Bien souvent, les obligations du quotidien et le temps nous font défaut.

Ceci, sans compter la grippe qui vous prend un dimanche ou au beau milieu de la nuit !
<img src="https://i.ibb.co/4RzmbcZ/pharmao.png" style={{width:"100%" }}></img>
                </p>
                <br/>
                <h3>COMMENT ÇA MARCHE
EXACTEMENT ?</h3>


            
            
<img src="https://www.pharmao.fr/wp-content/uploads/2016/03/IMG_4076_v1-303x380.jpg" alt=""  style={{width:"300px" , margin:"30px",float :"right"}}/> 
<br/>
  <div style={{display:'inline'}}>  Finalement, il n’y a rien de bien compliqué. Il suffit d’envoyer votre ordonnance à la pharmacie de votre choix, généralement via une application mobile, PC ou tablette et d’attendre simplement la livraison de votre colis pharmaceutique.

Ce système fonctionne aussi avec vos produits de parapharmacie. Vous gardez la possibilité de contacter votre pharmacien, en cas de doute, par messagerie instantanée ou par téléphone.

Il s’agit d’un service qui vous met en relation avec le pharmacien le plus proche de chez vous et un livreur. C’est la livraison de médicaments.</div>
  
 
<hr></hr><h2>POURQUOI CHOISIR JUST HEAL  ,
LA LIVRAISON EN LIGNE ?</h2>
<div> 
Commander ses médicaments et produits de parapharmacie en ligne présente des avantages incontestables vis-à-vis de notre rythme de vie actuel. Dans une société où tout va trop vite, vous pouvez dorénavant faire face à n’importe quelle situation.

Just heal , qu’est-ce que c’est ? Il s’agit d’un des acteurs majeurs de la pharmacie en ligne. Riche d’un réseau de pharmacies partenaires, la gamme de choix des officines se développe de jour en jour.

Afin de se démarquer de la concurrence, Just heal , c’est avant tout 2 services en 1.

Dans un premier temps, envoyez votre ordonnance à la pharmacie de votre choix (en la prenant en photo) afin qu’un pharmacien prépare votre commande. À ce moment précis, deux choix s’offrent à vous, soit :
<ul>
<li>Vous allez récupérer, par vous-même, la commande directement en officine,
 vous vous faites livrer directement par notre transporteur.
 Prévoyez tout de même quelques frais de livraison !</li>

</ul>
</div>
</div>
            </PostFullContent>
          </article>
        </div>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
