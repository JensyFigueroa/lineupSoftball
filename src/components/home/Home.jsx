import React from 'react'
import styles from './Home.module.css'
import photoChampions from '../../assets/fotos/Champions.png'
const Home = () => {
  return (
    <div className={styles.home}>
        <h1>🏆We are the champions🏆</h1>
      <img src={photoChampions} alt=""  />
    </div>
  )
}

export default Home
