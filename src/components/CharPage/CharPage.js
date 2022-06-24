import React, { Component } from 'react'
import {Card, Badge} from 'react-bootstrap';
import Services from '../Services/Services';

export default class CharPage extends Component {
  state = {
    char: {}
  }
 
      services = new Services();

      componentDidMount (){
        this.updateChar();
    }

    componentDidUpdate(prevProps){
        if (this.props.charId !== prevProps.charId) {
            this.updateChar();
        }
    }

      updateChar = () => {
        const {charId} = this.props;
if(!charId){
    return
}

        this.services
            .getCharacter(charId)
            .then(this.onCharLoaded)
            
      }

   

      onCharLoaded = (char) => {
        this.setState({
          char,
        })
      }
      
  render() {
    const {char :{name, location, image, episode}} = this.state
 
    return (
      <div>
        <Card  >
  
        <Card.Img variant="top" src={image} alt="image"/>

        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Last location: {location}
            Episodes: {episode}
           

          </Card.Text>
        
        </Card.Body>
      </Card>

      </div>
    )
  }
}
