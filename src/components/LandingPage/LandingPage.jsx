import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";
import logo from '../../assets/Logo.png'

export default function LandingPage() {
  return (
      <div className={styles.main}>
        <img src={logo} alt="" />
        <h1>Welcome to the official page of Bebedores</h1>
        <Link to="/home" className={styles.btn}>
          Visit now
        </Link>
      </div>
  
  );
}
