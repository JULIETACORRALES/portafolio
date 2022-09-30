import React from "react"
import Form from 'react-bootstrap/Form';
import { FiInstagram} from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";

import Button from 'react-bootstrap/Button';

function Contactame() {
  return (
    <> 

      <div className="formulario">
      
      <Form.Group className="mb-3">
    
        <br></br>
        <div className="texto_fp">
       
        <h2  >Correo Electronico</h2>
      
        <Form.Label>katherin041290@gmail.com</Form.Label>
        <br></br>
        <Form.Control className="control" placeholder="katherin041290@gmail.com" disabled />
        <h2 >Correo Electronico</h2>
        <Form.Label>katherin041290@gmail.com</Form.Label>
        <br></br>
        <Form.Control className="control" placeholder="katherin041290@gmail.com" disabled />
        <div className="bot">
     <Button className="boton">HV</Button>
     </div>
        <br></br>
        <FiInstagram/>
      <FiGithub/>
      <FiPhoneCall/>

      <br></br>
     
      </div>
      </Form.Group>
     
     </div>
     
     
    
     
 
     
     
    </>
  );
}

export default Contactame;



