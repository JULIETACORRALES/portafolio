import React from "react"
import foto from "../../img/foto.png"
import css from "../../img/css.png"
import git from "../../img/git.png"
import html from "../../img/html.png"
import java from "../../img/java.png"






function SobreMi () {
  return (
    <div  className="SobreMi">
      <br></br>
      <h1 className="titulo">Sore Katherin Rodriguez Corrales</h1>   
      <div className="texto_Sobre"> 
     
<p className="parrafo">Programadora en formacion en la tecnologia front-end, con estudios referentes en el area. 
Tecnica en operacion de sofware y redes de computo, y marketig digital. con manejo en herramientas de diseño web, 
como photoshop , illustrator ,figma, html, y css soy apasionada por la tecnologia y curiosa por el campo lo cual 
hace que me documente constantemente </p>
<img className="foto" src={foto} />
</div>






<h1 className="Skills">Skills</h1>
<div className="tecnologia">
  <h1 className="tecno">HTML </h1>

   <h1 className="tecno">CSS</h1>
  
  <h1 className="tecno" >GIT HUB</h1>
  <h1 className="tecno" >JAVA SCRIPT</h1>
 </div>

 <div className="tc">
<img className="tcn" src={html} />
 <img className="tcn" src={css} />
 <img className="tcn" src={git} />
 <img className="tcn" src={java} />
 </div>

 </div>
  
  );
  
}

export default SobreMi;





