import React from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import imagen1 from "../../img/imagen1.png";


function Home () {
    return (
      <div className="body">
        <br></br>

        <h1 className="texto_home">katherin rodriguez corrales</h1>
        <h2 className="frase">“Si decides hacer solo las cosas que sabes que van a funcionar, dejarás un montón de oportunidades encima de la mesa”</h2>
      <Card style={{ width: '3rem' }}>
       
        <Card.Img className="card" variant="top"  src={imagen1} />
        <div className="botones">
        <Button className="boton_uno" variant="primary">Sobre Mi  <br></br> </Button>
          <Button className="boton_uno" variant="primary">Contactame <br></br> </Button>
          </div>
      </Card>
      </div>
    );
    
  }
  
  export default Home;