import Styles from "./css/Contact.module.css";

import TopSectionImage from "../Assests/contact/chat.svg";
import MailImage from "../Assests/contact/mail.svg";
import TwitterImage from "../Assests/contact/twitter.svg";
import InstaImage from "../Assests/contact/instagram.svg";

const Contact = () => {
  return (
    <div className={Styles.pageContainer}>
      <div className={Styles.topSection}>
      <img src={TopSectionImage} alt="...." className={Styles.image} />
        <div className={Styles.text}>
          <div className="title">Nous contacter</div>
        </div>
        
      </div>

      <div className={Styles.contactSection}>
        <img src={MailImage} alt="...." className={Styles.image} />
        <div className={Styles.text}>
          <div className="title">Mail : <a href="mailto:contact@example.com">contact@example.com</a>  </div>
        </div>
      </div>

      <div className={Styles.contactSection}>
        <img src={TwitterImage} alt="...." className={Styles.image} />
        <div className={Styles.text}>
          <div className="title">Twitter : <a href="https://x.com/telecomgamingcb" target="_blank" rel="noopener noreferrer">@telecomgamingcb</a></div>
        </div>
      </div>

      <div className={Styles.contactSection}>
        <img src={InstaImage} alt="...." className={Styles.image} />
        <div className={Styles.text}>
          <div className="title">Instagram : <a href="https://www.instagram.com/tgc_telecom_paris">@tgc_telecom_paris</a></div>
        </div>
      </div>
    </div> 
  );
};

export default Contact;
