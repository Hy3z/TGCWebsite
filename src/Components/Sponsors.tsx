import SponsorJson from "../data/Sponsor.json";
import ImageArray from "../data/CardImageArray.ts";
import Card from "./Card";
import Styles from "./css/Sponsors.module.css";
import SponsorIcon from "./SponsorIcon.tsx";

const Sponsors = () => {
  return (
    <div className={Styles.grid}>
      {SponsorJson.title.map((title, index) => (
        <div className={Styles.item}>
          <SponsorIcon
            title={title}
            image={ImageArray[index]}
            description={SponsorJson.description[index]}
            link={SponsorJson.link[index]}
            buttonName={SponsorJson.buttonName[index]}
          />
        </div>
      ))}
    </div>
  );
};

export default Sponsors;
