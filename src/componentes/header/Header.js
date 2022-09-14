import React from "react"
import './Header.css'
import prueba from '../../img/prueba.jpg'
import {FiAlignJustify} from "react-icons/fi";

function Header (){
     return(
        <div className="header">
            <p>Hola</p>
            <div className="header">  
            <img src={prueba}  />
            </div>
            <FiAlignJustify/>
        </div>
     )
}
export default Header;
