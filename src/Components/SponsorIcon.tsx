import Styles from "./css/SponsorIcon.module.css";

interface Props {
  image: string;
  title: string;
  description: string;
  buttonName: string;
  link: string;
}

const SponsorIcon = ({
  image,
  /*title,
  description,
  buttonName,*/
  link,
}: Props) => {
  return (
    <div className={Styles.cardBody}>
      <div className={Styles.imgContainer}>
        <a href={link}>
          <img src={image} alt="..." className={Styles.sponsorImage} />
        </a>
      </div>
    </div>
  );
};

export default SponsorIcon;
