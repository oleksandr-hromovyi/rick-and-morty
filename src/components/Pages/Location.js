import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap';
import Cards from '../Cards/Cards';
import Pagination from '../Pagination/Pagination';
import Header from '../Header/Header';
import './Pages.css'


const Location = () => {
  let [location, setLocation] = useState(1)
  let _api = `https://rickandmortyapi.com/api/location/${location}`;
  let [results, setResults] = useState("")
  let [fetchData, setfetchData] = useState([]);
  let {name, type, dimension}= fetchData; 
  let [locationsAmount, setLocationsAmount] = useState("");
  let [error, setError] = useState(false)



  useEffect(()=>{
    (async function () {
      let data = await fetch(_api)
      .then((res) => res.json())
      .catch((err)=>setError(true));
      setfetchData(data);
     
      
      let locationsCount = await fetch(`https://rickandmortyapi.com/api/location`)
      .then((res) => res.json())
      .then((data)=>(data.info.count))
      .catch((err)=>setError(true));
      setLocationsAmount(locationsCount);

      let characterArr = await Promise.all(
        data.residents.map((char) => {
          return fetch(char)
            .then((res) => res.json()) //get single character
            .catch((err)=>setError(true))
        })
      );
      setResults(characterArr);
    })();
  }, [_api]);


  return (
     <>
      <div className="app">
        <Header/>
      </div>

          { !error ? (
            <>
                <main>
                  <h2 className='text-center mb-4'>Location: <span style={{color: "#9F0013"}}> {!name ? "Unknown" : name}</span></h2>
                  <h2 className='text-center mb-4'>Dimension: {!dimension ? "unknown" : dimension}</h2>
                  <h4 className='text-center'>Type: {!type ? "unknown" : type}</h4>
                  
                  <div className="char__content">
                  <div className='filterBox'>
                  <h5 className='filters__span text-primary text-decoration-underline text-center mb-2'><b>Filter by locations</b></h5>
                    
                <div> 
                  <Form.Select style={{width: `200px`}}
                onChange={(e)=>setLocation(e.target.value)}
                name="location">
                  <option value="1">Choose location...</option>
                {[...new Array(locationsAmount).keys()].map(index =>{
                  return (
                    <option value={index+1} key={index}>Location: {index+1}</option>
                
                  )
                })} 
                    
                
                    </Form.Select>
                  </div>
                  </div>
               <Cards page ="/location/" results={results}/>
               </div>              
               </main>  
                <Pagination />
                </>) : (<h1 className='text-center mb-4' style={{color: "#9F0013"}}>Server Error</h1>)  
            }
              
              </>
  
  )
}

export default Location