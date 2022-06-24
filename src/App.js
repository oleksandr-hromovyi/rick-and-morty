import React, { useEffect, useState } from 'react'


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Component} from 'react';
import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';
import Pagination from './components/Pagination/Pagination';
import CharPage from './components/CharPage/CharPage';
import CharFilter from './components/CharFilter/CharFilter';

{/*class App extends Component {
  state = {
    selectedCard: null,
  }

  onCardSelected = (id) => {
    this.setState({
      selectedCard: id
    })
  }
render(){
  return (
    <div className="app">
    <Header/>
      <main>
        <div className="char__content">
          <Filters/>
          <Cards onCardSelected={this.onCardSelected}/>
        </div>              
      </main>  
      <Pagination/>
      <CharPage charId={this.state.selectedCard}/>

    </div>

  );
}
}

export default App;*/}

const App = () => {
  
  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("");

  let _api = `https://rickandmortyapi.com/api/character?page=${pageNumber}&name=${search}`;
  let [fetchData, setfetchData] = useState([]);
  
  let {results, info} = fetchData;


  useEffect(()=>{
    (async function(){
      let response = await fetch(_api).then(res=>res.json());
            setfetchData(response)
      
   })()
  }, [_api])
  return (
    <div className="app">
    <Header/>
      <main>
        <div className="char__content">
          <CharFilter setSearch={setSearch} setPageNumber={setPageNumber}/>
          <Cards results={results}/>
        </div>              
      </main>  
      <Pagination info={info} setPageNumber={setPageNumber} pageNumber={pageNumber}/>
      <CharPage/>

    </div>
  )
}

export default App



