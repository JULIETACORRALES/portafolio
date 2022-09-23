import React from "react"
import './Header.css'

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
            <button> Sobre_mi</button>
             <button>contactame</button>
        </div>

        
     )
}
export default Header;
