import Styles from "./css/IPPT.module.css";
import CarouselData from "../data/CarouselIPPTData";
import Carousel from "../Components/Carousel";
import TopSectionImage from "../Assests/IPPT/IPPT_Photo9.jpg";

const IPPT = () => {
  return (
    <div className={Styles.pageContainer}>
      <div className={Styles.topSection}>
        <img src={TopSectionImage} alt="...." className={Styles.image} />
        <div className={Styles.text}>
          <div className="title">IPP Tournament</div>
          <div className="subtitle">10ème édition</div>
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
          <div className={Styles.title}>Description de l'événement</div>
          <div className={Styles.text}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque at
            possimus, repellat qui placeat maiores nam eligendi molestias, natus
            modi aut amet explicabo, blanditiis odit dolor sunt fugit
            consectetur? Earum? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Consequatur quo possimus qui officia nam cumque
            adipisci, alias veniam labore iste molestiae ratione esse, fuga
            quis, ducimus non corrupti? Incidunt, error!
          </div>
        </div>
      </div>

      <div className={Styles.rulesSections}></div>

      <div className={Styles.inscriptionForm}></div>

      <div className={Styles.contactSection}></div>
    </div>
  );
};

export default IPPT;
