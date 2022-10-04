import React from "react"
import Captura from "../../img/Captura.PNG";



function Proyecto() {
    return (
      <>
     
       <div className="proyecto">
              <div className="texto_proyecto">
              <h1 className="contexto">A continuaion podran observar una muestra del prier proyecto que realice con las tecnologias
              html, css, y boostrap, es una pagina llamada animalandia con un login de inicio, un formulario de registro
              y las paginas de las secciones que tenia el proyecto</h1>
                <img  className="imagen_p"src={Captura} />
              </div>
              
       </div>
       

      
       
        
        
      </>
    );
  }
  
  export default Proyecto;