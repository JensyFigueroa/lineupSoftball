import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";
import logo from '../../assets/Logo.png'

export default function LandingPage() {
  return (
    <div className={styles.boxLanding}>
      <div className={styles.main}>

        <img src={logo} alt="" style={{width:400, height:400}}/>
        <h1>Welcome to the official page of Bebedores</h1>
        {/* <h4>Where you can create your Cards with your favorite video game</h4> */}
        <Link to="/home" className={styles.btn}>
          Visit now
        </Link>
      </div>
    </div>
  );
}
