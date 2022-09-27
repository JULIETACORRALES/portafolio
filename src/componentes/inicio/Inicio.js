import React from "react";
import Button from 'react-bootstrap/Button';
import imagen from '../../img/imagen.png';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


function Inicio(){
     
        return (
        <div className='Inicio'> 
    <Card style={{ width: '18rem' }}>
      <Card.img  variant="top" src={imagen} />
      <Card.Body>
        
        <Card.Text>
          KATHERIN  JUELIETA RODRIGUEZ CORRALES.
        </Card.Text>
        <Button variant="primary">SOBRE MI</Button>
        <Button variant="primary">CONTACTAME</Button>
      </Card.Body>
    </Card>
  
    </div> 
       
    
        );
  

              
     
}
export default Inicio;