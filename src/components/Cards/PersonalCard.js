import React, {useEffect, useState} from 'react';
import {status} from '../Utils/data';

import {useParams} from 'react-router-dom';
import {Card, Badge} from 'react-bootstrap';
import { Spinner } from 'react-bootstrap';

import './Cards.css';

export const PersonalCard = () => {
    let { id } = useParams();
    let _api = `https://rickandmortyapi.com/api/character/${id}`;
    let [fetchData, setfetchData] = useState("")
    let [loading, setLoading] = useState(true);
    let [error, setError] = useState(false);

    let {name, status:statusFD, location, species, image, gender, origin } = fetchData;   
    
    useEffect(()=>{
      (async function(){
        let response = await fetch(_api)
        .then(res=>res.json())
        .catch(err=> setError(true));
        response && setfetchData(response);
        setLoading(loading => false)
      })()
      }, [_api])
    
    const spinner = loading ? <Spinner animation="border" style={{'height':'248px', 'width': '248px', 'marginTop': '20vh'}}/> : null;
    const View = () => {
      return(  
 
     
       
          <Card style={{"marginTop":"10vh"}}>
            <Card.Img variant="top" src={image} className='fw-bold pb-2'/>
            <Card.Title style={{textAlign:"center"}}><span className='fw-bold'>{name}</span></Card.Title>
            <Card.Text><span className='fw-bold'>Gender:</span> {gender}</Card.Text>
            <Card.Text><span className='fw-bold'>Species:</span> {species}</Card.Text>
            <Badge pill bg={status[statusFD]}>{statusFD}</Badge> 
            <Card.Text><span className='fw-bold'>Last location:</span> {location?.name}</Card.Text>
            <Card.Text><span className='fw-bold'>Origin:</span> {origin?.name}</Card.Text>
          </Card>

      )
    }
    const content = !(spinner) && !error ? <View/> : null;
    const errMessage = error &&  <h1>Server Error</h1> 
  
  return (
    <div className='box'>
     
      {spinner}
      {content}
      {errMessage}
    </div>
  )
}