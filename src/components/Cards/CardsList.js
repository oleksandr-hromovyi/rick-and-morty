import React from 'react';
import {status} from '../Utils/data';

import {Card, Badge} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import './Cards.css';

const Cards = ({characters, page, loading}) => {
  let display;

  if(characters) {
     
    display = characters.map(item => {
      let {id} = item

      return (
           <Link
            to={`${page}${id}`}
            key={item.id}
            className="cards"
             >
          <Card >
              <Badge pill bg={status[item.status]}>{item.status}</Badge> 
              <Card.Img variant="top" src={item.image} alt={item.name} width="248px" height="248px"/> 
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>Last location: {item.location.name}</Card.Text>
              </Card.Body>
          </Card>
        </Link>
          )
        })
         
  } if (!characters?.length){
        display = <h2 >Sorry, there is no information</h2>;
  } if (!characters && !loading) {
    display = <h2>Sorry, we didn't find matches</h2>
  } if (!characters && loading) {
    display = <h1>Loading...</h1>
  }
  return (
    <div className="char__list">{display}</div>
  )
}

export default Cards;