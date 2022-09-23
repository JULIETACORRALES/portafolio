import React from "react";
import Inicio from "../../componentes/inicio/Inicio";
import Sobre_mi  from "../../componentes/sobre_mi/Sobre_mi";
import Proyectos from '../../componentes/proyectos/Proyectos';
import Contactame from '../../componentes/contactame/Contactame'



function Home (){
    return(
        <>
        <p>hola</p>
        <Inicio />
        <Sobre_mi />
        <Proyectos />
        <Contactame />
        </>
        
    )
}

export default Home;