import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import Cards from '../Cards/Cards';
import Pagination from '../Pagination/Pagination';
import Header from '../Header/Header';

const Episodes = () => {
  let [episode, setEpisode] = useState(1)
  let _api = `https://rickandmortyapi.com/api/episode/${episode}`;
  let [results, setResults] = useState("")
  let [fetchData, setfetchData] = useState([]);
  let [error, setError] = useState(false)
  
  let [episodesAmount, setEpisodesAmount] = useState("");

  useEffect(()=>{
    (async function () {
        let data = await fetch(_api).then((res) => res.json())
        .catch((err)=> setError(true));
        setfetchData(data);
      
        let episodes = await fetch(`https://rickandmortyapi.com/api/episode`)
              .then((res) => res.json())
              .then((data)=> data.info.count)
              .catch((err)=> setError(true))
        setEpisodesAmount(episodes);

        let characterArr = await Promise.all(
        data.characters.map((char) => {
          return fetch(char).then((res) => res.json()).catch((err)=> setError(true)); //get single character
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
            <h2 className='text-center mb-4'>Episode: <span style={{color: "#9F0013"}}> { fetchData?.name ? fetchData?.name : "Unknown"}</span></h2>
            <h5 className='text-center'>Air date: {fetchData?.air_date ?  fetchData?.air_date: "unknown" }</h5>
            <div className="char__content">

            <div className='filterBox'>
               <h5 className='filters__span text-primary text-decoration-underline text-center mb-2'><b>Filter by episodes</b></h5>
                <div> 
                    <Form.Select 
                        style={{width: `200px`}}
                        onChange={(e)=>setEpisode(e.target.value)}>
                            <option>Choose episode...</option>
                            {[...new Array(episodesAmount).keys()].map(index =>{
                                return (
                                    <option value={index+1} key={index}>Episode: {index+1}</option>
                                )
                            })} 
                      </Form.Select>
                </div></div>
                <Cards page ="/episodes/" results={results} />
            </div>              
        </main>  
        <Pagination /></>) : (<h1 className='text-center mb-4' style={{color: "#9F0013"}}>Server Error</h1>)}      </>
    )
}

export default Episodes;