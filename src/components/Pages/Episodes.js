import React, { useEffect, useState } from 'react'
import { Form} from 'react-bootstrap';
import Cards from '../Cards/Cards';
import Pagination from '../Pagination/Pagination';
import CharPage from '../CharPage/CharPage';
const Episodes = () => {
  let [episode, setEpisode] = useState(1)
  let _api = `https://rickandmortyapi.com/api/episode/${episode}`;
  let [results, setResults] = useState("")
  let [fetchData, setfetchData] = useState([]);
  let { air_date:airDate, name}= fetchData;
console.log(results)

  useEffect(()=>{
    (async function () {
      let data = await fetch(_api).then((res) => res.json());
      setfetchData(data);

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
          
       <div> <Form.Select>
    <option>Default select</option>
    <option>Default select</option>
    <option>Default select</option>
    <option>Default select</option>

    <option>Default select</option>
  </Form.Select>
</div>

          <Cards results={results}/>
        </div>              
      </main>  
      <Pagination />
    
      </>
  
  )
}

export default Episodes