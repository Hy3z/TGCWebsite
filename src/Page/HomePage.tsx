import "../App.css";
import Styles from "./css/HomePage.module.css";
import Video from "../Assests/background-Logo_gradient_1.mp4";
import Carousel from "../Components/Carousel";

const HomePage = () => {
  return (
    <>
    <div className={Styles.videoContainer}>
      <video className={Styles.video} loop autoPlay>
        <source src={Video} type="video/mp4" />
      </video>
    </div>
    <Carousel/>
    </>
  );
};

export default HomePage;
