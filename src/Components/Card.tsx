import Styles from './css/Card.module.css'

interface Props {
  image: string;
  title: string;
  description: string;
  buttonName: string;
  link: string;
}

const Card = ({ image, title, description, buttonName, link }: Props) => {
  return (
    <div className={`card ${Styles.cardContainer}`} style={{ width: "15rem" }}>
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={link} className={`btn btn-primary ${Styles.button}`}>
          {buttonName}
        </a>
      </div>
    </div>
  );
};

export default Card;
