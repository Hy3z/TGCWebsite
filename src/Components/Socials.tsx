import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faTwitter,
  faInstagram,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import Styles from "./css/Socials.module.css";

const Socials = () => {
  return (
    <div className={Styles.socialsContainer}>
      <a href="#" className={Styles.youtube + " " + Styles.socials}>
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a href="#" className={Styles.twitter + " " + Styles.socials}>
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="#" className={Styles.discord + " " + Styles.socials}>
        <FontAwesomeIcon icon={faDiscord} size="2x" />
      </a>
      <a href="#" className={Styles.instagram + " " + Styles.socials}>
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>
  );
};

export default Socials;
