import Button from 'react-bootstrap/Button';

import imagen from '../../img/imagen.png';
import Card from 'react-bootstrap/Card';

import 'bootstrap/dist/css/bootstrap.min.css';


function Sobre_mi(){

    return (
        <div> 
    <Card style={{ width: '18rem' }}>
      <Card.img  variant="top" src={imagen} />
      <Card.Body>
      <h1>Sobre Katherin Julieta Rodriguez Corales</h1>
             <p>Programadora en formacion en la tecnologia front-end, con estudios referentes en el area. </p>
             <p>Tecnica en operacion de sofware y redes de computo, y marketig digital. con manejo en herramientas de diseño web, como photoshop , illustrator ,figma, html, y css
                 soy apasionada por la tecnologia y curiosa por el campo lo cual hace que me documente constantemente</p>
        <Card.Text>
          
        </Card.Text>
        <Button variant="primary">PORTAFOLIO</Button>
        
      </Card.Body>
    </Card>
   
    </div> 
       
    
        );
  
   
     
}
export default Sobre_mi;
    