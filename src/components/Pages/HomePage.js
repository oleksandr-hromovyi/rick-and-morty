import React, { useEffect, useState } from 'react';

import './Pages.css';

import CardsList from '../Cards/CardsList';
import Pagination from '../Pagination/Pagination';
import CharFilter from '../CharFilter/CharFilter';


const Characters = () => {

  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [gender, setGender] = useState("");
  let [status, setStatus] = useState("");
  let [species, setSpecies] = useState("");
  let [error, setError] = useState(false);
  let [loading, setLoading] = useState(true);

  let _api = `https://rickandmortyapi.com/api/character?page=${pageNumber}&name=${search}&gender=${gender}&status=${status}&species=${species}`;

  let [fetchData, setfetchData] = useState([]);
  let {results:characters, info} = fetchData;




  useEffect(()=>{
 
    (async function(){
      
      let response = await fetch(_api)
      .then(res=>res.json())
      .then(res => setfetchData(res))
      .catch(err=>setError(true));
      setLoading(false);
      })()
      
  
     
    }, [_api])

  return (
  <>
   <main> 
      <div className="char__content">
       
       <CharFilter 
          setSearch={setSearch} 
          setPageNumber={setPageNumber}
          setGender={setGender}
          setStatus={setStatus}
          setSpecies={setSpecies}/>
       { error  ? (<h1 className='text-center mb-4' style={{color: "#9F0013"}}>Server Error</h1>) : 
       (<CardsList page="/" characters={characters} loading={loading}/>)  }
      </div>              
    </main>  
    <footer>
    <Pagination
    
      info={info}
      setPageNumber={setPageNumber}
      pageNumber={pageNumber}/> 
    </footer>
  </> )
}
 
export default Characters;
