import styles from "./Footer.module.css";
import signJF from "../../assets/signJF.png"

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>&copy; Designed and developed by</p>
      <p><img src={signJF}/> Jensy Figueroa</p>
    </div>
  );
};

export default Footer;
