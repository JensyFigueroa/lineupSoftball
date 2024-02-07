import { Link, NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'
import img from '../../assets/Logo.png'

export default function Navbar() {
  return (
    <div className={styles.navBarGrid}>
      
        <Link to='/'><img src={img} alt=""  className={styles.img}/></Link> 

      <div className={styles.gridItemMenu}>
        <NavLink to='/home' className={({ isActive }) => (isActive ? 'active' : 'link')}>Home</NavLink>
        <NavLink to='/Players' className={({ isActive }) => (isActive ? 'active' : 'link')}>Players</NavLink>
        {/* <NavLink to='/Players' className={({ isActive }) => (isActive ? 'active' : 'link')}>Lineup</NavLink> */}
        <NavLink to='/about' className={({ isActive }) => (isActive ? 'active' : 'link')}>About</NavLink>
      </div>
    </div>
  )
}
