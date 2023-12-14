import Card from "../Components/Card";
import Image from "../Assests/tgc_logo_orange_png.png";

const Contact = () => {
  const buttonName = "Go here";
  const description =
    "Veniam sunt qui anim sint. Voluptate ea voluptate quis in consequat laboris aliqua esse. Quis ullamco exercitation dolor ex minim minim fugiat amet velit tempor id mollit. Velit Lorem velit do et excepteur. Adipisicing est commodo ipsum veniam irure deserunt ea ea do pariatur sint. Dolor irure irure et do velit.";
  const title =
    "Occaecat labore adipisicing anim eiusmod cillum aliquip in id id Lorem occaecat sunt.";
  const link = "https://www.youtube.com";
  return (
    <>
      <div>Contact</div>
      <Card
        title={title}
        buttonName={buttonName}
        image={Image}
        description={description}
        link={link}
      />
    </>
  );
};

export default Contact;
