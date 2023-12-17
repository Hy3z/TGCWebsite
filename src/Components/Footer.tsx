import Socials from "./Socials"
import Styles from "./css/Footer.module.css"

const Footer = () => {
  return (
    <div className={Styles.footerContainer}>
        <div className={Styles.version}>&#169; 2023 Telecom Gaming Club, Inc. </div>
        <div className={Styles.socials}><Socials/></div>
    </div>
  )
}

export default Footer