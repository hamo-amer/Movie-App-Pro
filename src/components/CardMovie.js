import React from 'react'
import Rating from './Rating'
import {Card} from 'react-bootstrap'

function CardMovie({movie:{name,description,date,rating,image}}) {
    return (
     
            <Card style={{ width: '18rem',backgroundColor:'rgb(196, 218, 238)',color:"black" }}>
  <Card.Img variant="top" src={image} style={{width:"286px",height:"286px"}}/>
  <Card.Body>
    <Card.Title><span style={{color:"blue"}}>{name}</span></Card.Title>
    <Card.Text>
      <span style={{color:"red"}}>Description</span>:{description}
    </Card.Text>
    <Card.Text>
        <span style={{color:"red"}}>Date</span>:{date}
    </Card.Text>
    <Card.Text>
      <Rating rating={rating} />
    </Card.Text>
  </Card.Body>
</Card>
        
    )
}

export default CardMovie
