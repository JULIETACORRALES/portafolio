import React from "react"
import './Header.css'
import { FiPhoneCall } from "react-icons/fi";
import {Link} from 'react-router-dom';

function Header (){
     return(

        <div className="header">
         
            <nav>
                <ul>
                    <li><Link to="/inicio"className="header">inicio</Link></li>
                    <li><Link to="/sobre_mi"className="header">sobre mi</Link></li>
                    <li><Link to="/proyectos"className="Proyectos">proyectos</Link></li>
                    <li><Link to="/contactame"className="contactame">contactame</Link></li>
                    
                </ul>
            
            </nav>
            <button> Sobre_mi<FiPhoneCall/></button>
             <button>contactame <FiPhoneCall/></button>
        </div>

        
     )
}
export default Header;
