import { useEffect } from 'react'
import styles from './Home.module.css'
import photoChampions from '../../assets/fotos/Champions.png'
import { useDispatch } from 'react-redux'
import { getPlayers } from '../../redux/actions'

const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPlayers());
  }, [dispatch])
  return (
    <div className={styles.home}>
        <h1>🏆We are the champions🏆</h1>
      <img src={photoChampions} alt=""  />
    </div>
  )
}

export default Home
