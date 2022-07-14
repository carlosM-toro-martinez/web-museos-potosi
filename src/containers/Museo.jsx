import React from 'react'
import { Button, Card, ListGroup } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import AppContext from '../context/AppContext';

const description = document.getElementsByClassName('text');
const btn = document.getElementsByClassName('descBtn');
const card = document.getElementsByClassName('card');
const showDesc = (id) =>{
    description[id-1].classList.toggle('show')
    console.log(card[id-1].classList.toggle('card2'));
    if(description[id-1].classList.contains('show')){
        btn[id-1].innerText = 'ocultar descripcion'
    }
    else
        btn[id-1].innerText = 'mostrar descripcion'


}

function Museo (props){
    const { setLocation, setPositionMuseo } = React.useContext(AppContext);
    const myLocation = (number)=>{
    setLocation(true)
    setPositionMuseo(number);
  }
    const { museo, id }= props;

    return (
        <Card className='card1' variant="primary" >
            <Card.Img variant="top" src={museo.image.data.attributes.url} alt={museo.image.data.attributes.name} />
            <Card.Body>
            <Card.Title>{museo.name}</Card.Title>
            <Card.Text className='text'>{museo.description}</Card.Text>

            </Card.Body>
            <Card.Body>
            <ListGroup className="list-group-flush">
            <ListGroup.Item><Button className='descBtn' onClick={()=>showDesc(id)}>Mostrar Descripcion</Button></ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
            </Card.Body>
            <Link to="/map" onClick={()=>myLocation(id)}  ><Button className="link">Como llegar</Button></Link>
        </Card>
        
    )
}

export default Museo;