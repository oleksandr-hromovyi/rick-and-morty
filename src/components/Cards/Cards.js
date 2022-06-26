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
            key={item.id}>
          <Card>
              <Badge pill bg={status[item.status]}>{item.status}</Badge> 
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>Last location: {item.location.name}</Card.Text>
              </Card.Body>
          </Card>
        </Link>

      )
    })
    
  } else {
        display = <span>Sorry, there is no results for your request</span>;
      }
  return (
    <div className="char__list">{display}</div>
  )
}

export default Cards;