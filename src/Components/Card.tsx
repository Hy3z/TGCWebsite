interface Props {
  image: string;
  title: string;
  description: string;
  buttonName: string;
  link: string;
}

const Card = ({ image, title, description, buttonName, link }: Props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={link} className="btn btn-primary">
          {buttonName}
        </a>
      </div>
    </div>
  );
};

export default Card;
