import React, { useState } from 'react';
import {Link} from "react-router-dom";
import { MenuItem } from "./MenuItem";
import  "./header.css";


function Header() {
   const [clicked, setClicked] = useState(false);
   const  handleClick = ()=>{
      setClicked(!clicked);
   }
  return (
    <nav className="navBarItem">
      <h2 className="header__left">
            <span>C</span>mad
        </h2>
    <div className="menu-icons" onClick ={ handleClick}>
      <i className={clicked ? "fas fa-times": "fas fa-bars"} ></i>
    </div>
     <ul className={clicked ? "nav-menu active": "nav-menu" }>
        {MenuItem.map((item, index)=>{
         return(
            <li key={index}>
                <Link className={item.cname} to={item.url}>
                   {item.title}
                </Link>
            </li>
         )
        })}
       
     </ul>
    </nav>
  )
}

export default Header;
