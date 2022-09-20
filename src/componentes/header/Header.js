import React from "react"
import './Header.css'
import imagen from '../../img/imagen.png'
import {FiAlignJustify} from "react-icons/fi";

function Header (){
     return(
        <div className="header">
            <p>Hola</p>
            <div className="header">  
            <img src={imagen}  />
            </div>
            <FiAlignJustify/>
        </div>
     )
}
export default Header;
