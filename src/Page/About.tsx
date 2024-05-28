import Styles from "./css/About.module.css";
import Carousel from "../Components/Carousel";
import CarouselData from "../data/CarouselHomePageData";
import TelecomLogo from "../Assests/TelecomParis.svg.png";

const About = () => {
  return (
    <div>
      <div className={Styles.eventPresentation}>
        <div className={Styles.carouselEvent}>
          <Carousel
            imgs={CarouselData.imgs}
            headers={CarouselData.headers}
            descriptions={CarouselData.descriptions}
          />
        </div>
        <div className={Styles.text}>
          <div className={Styles.title}>Telecom Gaming Club :</div>
          <div className={Styles.paragraphe}>
            Telecom Gaming Club est une association étudiante de Telecom Paris.
            Notre objectif est de promouvoir le jeu vidéo et les compétitions
            e-sportives au sein de l'école. Nous organisons régulièrement des
            tournois internes et externes, des LANs, des conférences et des
            événements autour du jeu vidéo. <br />
            <br />
            Notre association est ouverte à tous les étudiants de Telecom Paris,
            peu importe leur niveau de jeu. Nous accueillons aussi bien les
            joueurs occasionnels que les compétiteurs aguerris. N'hésitez pas à
            nous rejoindre pour partager votre passion du jeu vidéo!
          </div>
        </div>
      </div>
      <div className={Styles.telecomParisDescription}>
        <div className={Styles.text}>
          <div className={Styles.title}>Telecom Paris :</div>
          <div className={Styles.paragraphe}>
            Télécom Paris est la première grande école française d'ingénieurs
            généralistes du numérique. Ses diplômés intègrent tous les secteurs
            d'activité. Avec des enseignements et une recherche d'excellence,
            Télécom Paris est au cœur d'un écosystème d'innovation unique fondé
            sur la transversalité de sa formation, son centre de recherche et
            son incubateur d'entreprises. <br />
            <br />
            Membre fondateur de l’Institut Polytechnique de Paris, école de
            l’IMT (Institut Mines-Télécom), Télécom Paris se positionne comme le
            collège de l’innovation par le numérique du plateau de Saclay.
          </div>
        </div>
        <div className={Styles.telecomLogoContainer}>
          <img
            src={TelecomLogo}
            className={Styles.telecomLogo}
            alt="telecom-paris-logo"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
