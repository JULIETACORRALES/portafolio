import React from "react";
import Inicio from '../../pages/inicio/Inicio';
import SobreMi from '../../pages/sobreMi/SobreMi';
import Proyectos from '../../pages/proyectos/Proyectos';
import Contactame from '../../pages/contactame/Contactame';


function Home (){
    return(
        <>
        
        <Inicio />
        <SobreMi />
        <Proyectos />
        <Contactame />
        </>
        
    )
}

export default Home;