import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FiGithub } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";

function Contactame() {
  return (
    <div className="formulario">
    <Form>
        <h1>CONTACTAME</h1>
      <fieldset disabled>
        <Form.Group className="mb-3">
            <h2>Correo Electronico</h2>
          <Form.Label htmlFor="disabledTextInput">katherin041290@gmail.com</Form.Label>
          <Form.Control id="disabledTextInput" placeholder="Correo Electronico" />
        </Form.Group>
        <Form.Group className="mb-3">
            <h2>Numero de contacto</h2>
          <Form.Label htmlFor="disabledSelect">+573124600550</Form.Label>
          <Form.Select id="disabledSelect" placeholder="Numero de contacto" />    
        
        </Form.Group>
        <Button type="CONTACTAME"></Button>
        <div caja>
          <h2>
            DEJAME TU MENSAJE
          </h2>
        </div>
      </fieldset>
    </Form>
          <FiGithub/>
          <FiInstagram/>
          <FiMail/>
          <FiPhoneCall/>
    </div>


  
      

   
  );
}

export default Contactame;