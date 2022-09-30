import React from "react"
import './Header.css'

import {Link} from 'react-router-dom';


function Header (){
     return(

        <div className="header">
         
            <nav>
                <ul>
                    <li><Link to="/home"className="home">Home</Link></li>
                    <li><Link to="/sobreMi"className="sobreMi">Sobre Mi</Link></li>
                    <li><Link to="/proyectos"className="Proyectos">Proyectos</Link></li>
                    <li><Link to="/contactame"className="contactame">Contactame</Link></li>
                    
                </ul>
            
            </nav>
            
        </div>

        
     )
}
export default Header;
