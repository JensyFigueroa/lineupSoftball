import { Link, NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'
import logo from '../../assets/Logo.png'

export default function Navbar() {
  return (
    <div className={styles.navBarGrid}>
      
        <Link to='/'><img src={logo} alt=""  className={styles.img}/></Link> 

      <div className={styles.gridItemMenu}>
        <NavLink to='/home' className={({ isActive }) => (isActive ? 'active' : 'link')}>Home</NavLink>
        <NavLink to='/players' className={({ isActive }) => (isActive ? 'active' : 'link')}>Players</NavLink>
        <NavLink to='/lineup' className={({ isActive }) => (isActive ? 'active' : 'link')}>Lineup</NavLink>
        <NavLink to='/about' className={({ isActive }) => (isActive ? 'active' : 'link')}>About</NavLink>
      </div>
    </div>
  )
}
