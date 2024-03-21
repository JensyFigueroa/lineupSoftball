import { Link, NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'
import logo from '../../assets/Logo.png'
import Login from "../login/Login"

export default function Navbar() {
  return (
    <div className={styles.navBarGrid}>
      
        <Link to='/' className={styles.logo}><img src={logo} alt=""  className={styles.img}/></Link> 

      <div className={styles.gridItemMenu}>
        <NavLink to='/home' className={({ isActive }) => (isActive ? 'activeLink' : 'link')}>Home</NavLink>
        <NavLink to='/players' className={({ isActive }) => (isActive ? 'activeLink' : 'link')}>Players</NavLink>
        {/* <NavLink to='/addplayers' className={({ isActive }) => (isActive ? 'active' : 'link')}>New Players</NavLink> */}
        <NavLink to='/statistics' className={({ isActive }) => (isActive ? 'activeLink' : 'link')}>Statistics</NavLink>
        <NavLink to='/lineup' className={({ isActive }) => (isActive ? 'activeLink' : 'link')}>Lineup</NavLink>
        {/* <NavLink to='/about' className={({ isActive }) => (isActive ? 'active' : 'link')}>About</NavLink> */}
      </div>

      <div className={`${styles.containerLogin}`}><Login/></div> 
    </div>
  )
}
