import React from 'react'

import {Card, Badge} from 'react-bootstrap';
import {Link} from 'react-router-dom'

import './Cards.css'

const Cards = ({results, page}) => {
  let display;

  if(results) {
 
    display = results.map(item => {
      let {id} = item
      let status = {
        'Alive': 'success',
        'Dead': 'danger',
        'unknown': 'secondary',
      }
    
      return (
           <Link
            to={`${page}${id}`}
            key={item.id}
            className="cards"
           >
          <Card >
              <Badge pill bg={status[item.status]}>{item.status}</Badge> 
              <Card.Img variant="top" src={item.image} width="248px" height="248px"/> 
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>Last location: {item.location.name}</Card.Text>
              </Card.Body>
          </Card>
        </Link>

      )
    })
    
  } if (!results?.length){
        display = <span>Sorry, there is no information</span>;
  } if (!results) {
    display = <span>Sorry, we didn't find matches</span> 
  }
  return (
    <div className="char__list">{display}</div>
  )
}

export default Cards;