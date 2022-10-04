import React from "react"
import Form from 'react-bootstrap/Form';
import { FiInstagram} from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";

import Button from 'react-bootstrap/Button';

function Contactame() {
  return (
    <> 
    >
      <div className="formulario">
      <h1 className="contacto">Contactame</h1>
      <Form.Group className="mb-3">
    
        <br></br>
        <div className="texto_fp">
       
        <h2 className="electronico">Correo Electronico</h2>
      
        <Form.Label>katherin041290@gmail.com</Form.Label>
        <br></br>
        <Form.Control className="control" placeholder="katherin041290@gmail.com" disabled />
        <h2 >Numero De Contacto</h2>
        <Form.Label>+573124600550</Form.Label>
        <br></br>
        <Form.Control className="control" placeholder="+57312460055"disabled />
        <div className="bot">
     <Button className="boton">HV</Button>
     </div>
        <br></br>
     
  <div className="iconos">
     < FiInstagram/><br></br><FiGithub/><br></br><FiPhoneCall/>
   </div>

      <br></br>
     
      </div>
      </Form.Group>
     
     </div>
     
     
    
     
 
     
     
    </>
  );
}

export default Contactame;



