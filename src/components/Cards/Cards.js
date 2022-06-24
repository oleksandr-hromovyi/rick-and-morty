import {Component} from 'react';
import {Card, Badge} from 'react-bootstrap';
import Services from '../Services/Services'
import './Cards.css'

import React from 'react'


{/* 
class Cards extends Component {
  state = {
    cardsList: [],
    page: 0,
  }
 
  services = new Services();
  componentDidMount(){
    this.services.getAllCharacters(this.page)
          .then(this.onCardsListLoaded)
        
  }



  onCardsListLoaded = (cardsList) => {
    this.setState({
      cardsList,
    })
  }

  renderCard(arr) {
    

 
      
    const items = arr.map(item=> {
      let status = {
        'Alive': 'success',
        'Dead': 'danger',
        'unknown': 'secondary',
      }

      
     
       
      
    
      
return (
        
        <Card 
        key={item.id}
        onClick={()=> this.props.onCardSelected(item.id)} >
                  <Badge pill bg={status[item.status]}>
        {item.status}
      </Badge>
        <Card.Img variant="top" src={item.image} />

        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            Last location: {item.location}
          </Card.Text>
        
        </Card.Body>
      </Card>
      
      ) 
    })
    return items;
  }
  render(){
    const {cardsList} = this.state;
    const items = this.renderCard(cardsList);

    
  return (
    <div className="char__list">
    {items}
  </div>
  )
}}

export default Cards;
*/}
const Cards = ({results}) => {
  let display;
  console.log(results)
  if(results) {

    display = results.map(item => {
      let status = {
        'Alive': 'success',
        'Dead': 'danger',
        'unknown': 'secondary',
      }
      return (
      <Card key={item.id}>
               <Badge pill bg={status[item.status]}>
      {item.status}
    </Badge> 
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            Last location: {item.location.name}
          </Card.Text>
        
        </Card.Body>
     
    </Card>

      )
    })
    
      } else {
        display = "Sorry, there is no characters with your name";
      }
  return (
    <div className="char__list">{display}</div>
  )
}

export default Cards