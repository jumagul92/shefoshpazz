import React from 'react'
import { NavLink } from 'react-router-dom';


function Nav() {
  return (<>
  
   <div className="container">
    <ul className="nav__list">
        <li><NavLink to={'/'} className="nav__link">Asosiy</NavLink></li>
        <li><NavLink to={'/products'} className="nav__link">Tovarlar</NavLink></li>
        <li><NavLink to={'/about'} className="nav__link">Biz haqimizda</NavLink></li>
        <li><NavLink to={'/faq'} className="nav__link">FAQ</NavLink></li>
        <li><NavLink to={'/contact'} className="nav__link">Aloqa</NavLink></li>
    </ul>
   </div>
   
   </>
  )
}

export default Nav