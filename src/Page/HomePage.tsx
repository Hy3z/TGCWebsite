import "../App.css";
import Styles from "./css/HomePage.module.css";
import Video from "../Assests/background-Logo_gradient_1.mp4";
import Carousel from "../Components/Carousel";
import Sponsors from "../Components/Sponsors";

const HomePage = () => {
  return (
    <div className={Styles.homePageContainer}>
      <div className={Styles.topSection}>
        <div className={Styles.text}>
          <div className={Styles.title}>Bienvenu sur le site de TGC</div>
          <div className={Styles.paragraphe}>
            quis fugiat sunt ex ea commodo occaecat ipsum eiusmod!
          </div>
        </div>
        <div className={Styles.videoContainer}>
          <video className={Styles.video} loop autoPlay>
            <source src={Video} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className={Styles.eventPresentation}>
        <div className={Styles.carouselEvent}>
          <Carousel />
        </div>
        <div className={Styles.text}>
          <div className={Styles.title}>Titre du texte</div>
          <div className={Styles.paragraphe}>
            Esse ea ut quis cillum minim quis fugiat sunt ex ea commodo occaecat
            ipsum eiusmod. Magna consectetur sit anim fugiat pariatur sint
            laborum adipisicing. Commodo aute dolore minim in minim do commodo
            cupidatat magna cupidatat adipisicing.
          </div>
        </div>
      </div>
      <div className={Styles.sponsorContainer}>
        <div className={Styles.title}>Un grand merci à nos sponsors :</div>
        <Sponsors/>
      </div>
    </div>
  );
};

export default HomePage;
