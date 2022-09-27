import React from "react"
import Card from 'react-bootstrap/Card';
import imagen from '../../img/imagen.png';


function Proyectos(){
    return(
      <di className="Proyecto">
         <Card.Text>
          <h1>Proyectos Realizados en proceso de formacion</h1>
        </Card.Text>
         <Card style={{ width: '18rem' }}>
      <Card.img  variant="top" src={imagen} />
      <Card.Body>
        
      </Card.Body>
    </Card>

      </di>
    )
}
export default Proyectos; 