import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import Cards from '../Cards/Cards';
import Pagination from '../Pagination/Pagination';

const Episodes = () => {
  let [episode, setEpisode] = useState(1)
  let _api = `https://rickandmortyapi.com/api/episode/${episode}`;
  let [results, setResults] = useState("")
  let [fetchData, setfetchData] = useState([]);
  let { air_date:airDate, name}= fetchData;
  let [episodesAmount, setEpisodesAmount] = useState("");

  useEffect(()=>{
    (async function () {
        let data = await fetch(_api).then((res) => res.json());
        setfetchData(data);
      
        let episodes = await fetch(`https://rickandmortyapi.com/api/episode`).then((res) => res.json()).then((data)=> data.info.count);
        setEpisodesAmount(episodes);

        let characterArr = await Promise.all(
        data.characters.map((char) => {
          return fetch(char).then((res) => res.json()); //get single character
        })
      );
      
      setResults(characterArr);

    })();
  }, [_api]);

  return (
      <>
        <main>
            <h2 className='text-center mb-4'>Episode: <span style={{color: "#9F0013"}}> {!name ? "Unknown" : name}</span></h2>
            <h5 className='text-center'>Air date: {!airDate ? "unknown" : airDate}</h5>
            <div className="char__content">
               <h4>Filter by episodes</h4>
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
                </div>
                <Cards  page ="/episodes/" results={results}/>
            </div>              
        </main>  
        <Pagination />
      </>
    )
}

export default Episodes;