import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Card, Badge} from 'react-bootstrap';
import { Spinner } from 'react-bootstrap'
import './Cards.css'

export const CardInfo = () => {
    let { id } = useParams();
    let _api = `https://rickandmortyapi.com/api/character/${id}`;
    let [fetchData, setfetchData] = useState("")
    let [loading, setLoading] = useState(true);

    
    let statusArr = {
      'Alive': 'success',
      'Dead': 'danger',
      'unknown': 'secondary',
    }
    
    let {name, status, location, species, image, gender, origin } = fetchData;   
    
    useEffect(()=>{
      (async function(){
        let response = await fetch(_api)
        .then(res=>res.json())
        .catch(err=> console.log(err));
        setfetchData(response)
        setLoading(loading => false)
      })()
      }, [_api])
    
    const spinner = loading ? <Spinner animation="border" style={{'height':'248px', 'width': '248px', 'marginTop': '30vh'}}/> : null;
    const View = () => {
      return(
        <>
          <Card style={{"marginTop":"30vh"}}>
            <Card.Img variant="top" src={image} className='fw-bold pb-2'/>
            <Card.Title style={{textAlign:"center"}}><span className='fw-bold'>{name}</span></Card.Title>
            <Card.Text><span className='fw-bold'>Gender:</span> {gender}</Card.Text>
            <Card.Text><span className='fw-bold'>Species:</span> {species}</Card.Text>
            <Badge pill bg={statusArr[status]}>{status}</Badge> 
            <Card.Text><span className='fw-bold'>Last location:</span> {location?.name}</Card.Text>
            <Card.Text><span className='fw-bold'>Origin:</span> {origin?.name}</Card.Text>
          </Card>
        </>
      )
    }
    const content = !(spinner) ? <View/> : null;
  
  return (
    <div className='d-flex justify-content-center'>
      {spinner}
      {content}
    </div>
  )
}
