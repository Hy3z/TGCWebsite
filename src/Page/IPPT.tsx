import Styles from "./css/IPPT.module.css";
import CarouselData from "../data/CarouselIPPTData";
import Carousel from "../Components/Carousel";
import TopSectionImage from "../Assests/IPPT/IPPT_Photo9.jpg";
import LolLogo from "../Assests/game/lol.png";
import SsbuLogo from "../Assests/game/ssbublanc.png";
import IPPTlogo from "../Assests/events/logo_version_blanche.png";

const IPPT = () => {
  return (
    <div className={Styles.pageContainer}>
      <div className={Styles.topSection}>
        <img src={TopSectionImage} alt="...." className={Styles.image} />
        <div className={Styles.topSectionContent}>
          <div className={Styles.text}>
            <div className={Styles.title}>
              IPP Tournament
              <p />
              10ème édition
              <p />
              6-7 avril 2024
            </div>
            <div className={Styles.imagecontainer}>
              <img src={LolLogo} alt="...." />
              <img src={SsbuLogo} alt="...." />
            </div>
          </div>
          <div className={Styles.logoSection}><img src={IPPTlogo} alt="..." /></div>
        </div>
      </div>

      <div className={Styles.eventDescriptionSection}>
        <div className={Styles.carrouselContainer}>
          <Carousel
            imgs={CarouselData.imgs}
            descriptions={CarouselData.descriptions}
            headers={CarouselData.headers}
          />
        </div>
        <div className={Styles.description}>
          <div className={Styles.title}>L'IP Paris e-sport Tournament</div>
          <div className={Styles.text}>
            Le tournoi e-sport organisé par le Telecom Gaming Club est le plus
            gros tournoi du plateau de Saclay. Ce dernier permet aux joueurs des
            écoles de l’Institut Polytechnique de Paris et des écoles du plateau
            de s’affronter sur tout un week-end sur les jeux League of Legends
            et Smash Bros Ultimate. Chaque année passée, le tournoi se déroule
            dans l’enceinte de l’école Télécom Paris.
          </div>
        </div>
      </div>

      <div className={Styles.statSection}>
        <div className={Styles.statBubble}>
          <p>
            <strong>100</strong> participants des écoles d'ingénieurs du plateau
          </p>
        </div>

        <div className={Styles.statBubble}>
          <p>
            <strong>2</strong> jours de compétitions
          </p>
        </div>

        <div className={Styles.statBubble}>
          <p>
            <strong>2</strong> jeux
          </p>
        </div>

        <div className={Styles.statBubble}>
          <p>
            <strong>15 000</strong> minutes visionnées sur Twitch
          </p>
        </div>

        <div className={Styles.statBubble}>
          <p>
            <strong>400</strong> spectateurs uniques sur Twitch
          </p>
        </div>
      </div>

      <div className={Styles.rulesSections}></div>

      <div className={Styles.inscriptionForm}></div>

      <div className={Styles.contactSection}></div>
    </div>
  );
};

export default IPPT;
