import style from './Nav.module.css'
import { NavLink, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faRightFromBracket, faCircleUser } from '@fortawesome/free-solid-svg-icons'

 const Nav = ({ logout }) => {

   const location = useLocation();

  // Si la ruta actual es '/', no mostramos la barra de navegación
  if (location.pathname === "/") {
    return null;
  }

   return (
     <nav className={style.nav}>
         <div className={style.logo}><img src='logo.png' alt=''/></div>
            <div className={style.items}>
               <NavLink clasName={style.navLink} to='/home'>
                  <div className={style.itemsDiv}><h2><FontAwesomeIcon icon={faHouse}/>  Home</h2></div>
               </NavLink> 
               <NavLink clasName={style.navLink} to='/about'>
                  <div className={style.itemsDiv}><h2><FontAwesomeIcon icon={faCircleUser} />  About Me</h2></div>
               </NavLink>


               <div onClick={logout} className={style.itemsDiv}><h2><FontAwesomeIcon icon={faRightFromBracket} />  Log Out</h2></div>
         </div>  
      </nav>
   );
}

export default Nav;