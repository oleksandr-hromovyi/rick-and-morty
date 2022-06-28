import React, { useEffect, useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';
import Pagination from './components/Pagination/Pagination';
import CharFilter from './components/CharFilter/CharFilter';
import Episodes from './components/Pages/Episodes';
import Location from './components/Pages/Location';
import {CardInfo}  from './components/Cards/CardInfo';
import Register from './components/Register/Register';

export default function App() {
  return (
/*     <BrowserRouter>
      <div className="app">
        <Header/>
      </div>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/:id" element={<CardInfo />}/>
      <Route path="/episodes" element={<Episodes />}/>
      <Route path="episodes/:id" element={<CardInfo />}/>
      <Route path="/location" element={<Location />}/>
      <Route path="location/:id" element={<CardInfo />}/>
     </Routes>
    </BrowserRouter> */
     <Register/>
  )
}

const Home = () => {
  
  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [gender, setGender] = useState("");
  let [status, setStatus] = useState("");
  let [species, setSpecies] = useState("");
 

  let _api = `https://rickandmortyapi.com/api/character?page=${pageNumber}&name=${search}&gender=${gender}&status=${status}&species=${species}`;

  let [fetchData, setfetchData] = useState([]);
  let {results, info} = fetchData;
  console.log(fetchData)
  useEffect(()=>{
    (async function(){
      let response = await fetch(_api).then(res=>res.json())
      setfetchData(response)
      })()
    }, [_api])

  return (
  <>
 
    {/* <main>
      <div className="char__content">
        <CharFilter 
          setSearch={setSearch} 
          setPageNumber={setPageNumber}
          setGender={setGender}
          setStatus={setStatus}
          setSpecies={setSpecies}/>
        <Cards page="/" results={results} />
      </div>              
    </main>  
    <Pagination
      info={info}
      setPageNumber={setPageNumber}
      pageNumber={pageNumber}/> */}
  </> )
}

