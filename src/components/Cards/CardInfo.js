import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Card, Badge} from 'react-bootstrap';

export const CardInfo = () => {
    let { id } = useParams();
    let _api = `https://rickandmortyapi.com/api/character/${id}`;
    let [fetchData, setfetchData] = useState("")
    let statusArr = {
      'Alive': 'success',
      'Dead': 'danger',
      'unknown': 'secondary',
    }
    
    let {name, status, location, species, image, gender, origin } = fetchData;   
  
  useEffect(()=>{
    (async function(){
      let response = await fetch(_api).then(res=>res.json());
      setfetchData(response)
    })()
    }, [_api])
    
  
  return (
    <div className='d-flex justify-content-center'>
    <Card>
      <Card.Img variant="top" src={image} className='fw-bold pb-2'/>
      <Card.Title style={{textAlign:"center"}}><span className='fw-bold'>{name}</span></Card.Title>
      <Card.Text><span className='fw-bold'>Gender:</span> {gender}</Card.Text>
      <Card.Text><span className='fw-bold'>Species:</span> {species}</Card.Text>
      <Badge pill bg={statusArr[status]}>{status}</Badge> 
      <Card.Text><span className='fw-bold'>Last location:</span> {location?.name}</Card.Text>
      <Card.Text><span className='fw-bold'>Origin:</span> {origin?.name}</Card.Text>
    </Card>
    </div>
  )
}
