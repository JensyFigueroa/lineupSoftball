import { useEffect } from "react";
import styles from "./Home.module.css";
import fieldWhisper from "../../assets/fotos/WhisperLake.jpeg";
import uniform from "../../assets/fotos/Portada.jpeg";
import photoChampions from "../../assets/fotos/Champions.png";
import { useDispatch } from "react-redux";
import { getPlayers } from "../../redux/actions";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPlayers());
  }, [dispatch]);
  return (
    <div className={styles.home}>

      <div id="carouselExampleDark" className="carousel carousel-dark slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={fieldWhisper} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h2>Where it all began</h2>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={uniform} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h2>Debuting in uniform</h2>
            </div>
          </div>
          <div className="carousel-item">
            <img src={photoChampions} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h3>🏆We are the champions🏆</h3>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
