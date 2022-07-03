import React, { useEffect, useState } from 'react'

import '../../App.css';

import Header from '../Header/Header';
import Cards from '../Cards/Cards';
import Pagination from '../Pagination/Pagination';
import CharFilter from '../CharFilter/CharFilter';

const Characters = () => {


  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [gender, setGender] = useState("");
  let [status, setStatus] = useState("");
  let [species, setSpecies] = useState("");
  let [error, setError] = useState(false);
 

  let _api = `https://rickandmortyapi.com/api/character?page=${pageNumber}&name=${search}&gender=${gender}&status=${status}&species=${species}`;

  let [fetchData, setfetchData] = useState([]);
  let {results, info} = fetchData;

  useEffect(()=>{
    (async function(){
      let response = await fetch(_api)
      .then(res=>res.json())
      .then(res => setfetchData(res))
      .catch(err=>setError(true))
      
      })()
    }, [_api])

  return (
  <>
  
     <div className="app">
        <Header/>
      </div>
   
   <main> 
      <div className="char__content">
       
       
        <CharFilter 
          setSearch={setSearch} 
          setPageNumber={setPageNumber}
          setGender={setGender}
          setStatus={setStatus}
          setSpecies={setSpecies}/>
       { error  ? <h1 className='text-center mb-4' style={{color: "#9F0013"}}>Server Error</h1> : <Cards page="/" results={results} />  }
      </div>              
    </main>  
    <Pagination
      info={info}
      setPageNumber={setPageNumber}
      pageNumber={pageNumber}/> 
  </> )
}
 
export default Characters;