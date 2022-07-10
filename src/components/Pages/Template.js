import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import CardsList from '../Cards/CardsList';
import Location from './Location'
import Episodes from './Episodes';
import ServerError from '../ServerError/ServerError';


const Page = ({category,arrPath}) => {

  let categoryLink = category.toLowerCase();
  let [pageData, setPageData] = useState('1')
 
  let _api = `https://rickandmortyapi.com/api/${categoryLink}/${pageData}`;
  let [characters, setCharacters] = useState("")
  let [fetchData, setfetchData] = useState([]);
  let {name, dimension, type, air_date} = fetchData;
  let [error, setError] = useState(false)
  let [pageItemAmount, setpageItemAmount] = useState("");
  let [loading, setLoading] = useState(true);
  
  useEffect(()=>{
    setpageItemAmount("");
    setPageData('1');
  }, [categoryLink, category])


  useEffect(()=>{

    (async function () {
      
        let data = await fetch(_api).then((res) => res.json())
        .catch((err)=> setError(true));
        setfetchData(data);
        
        let items = await fetch(`https://rickandmortyapi.com/api/${categoryLink}`)
              .then((res) => res.json())
              .then((data)=> data.info.count)
              .catch((err)=> setError(true))
        setpageItemAmount(items);
        
        let characterArr = await Promise.all(
              data[arrPath].map(async (char) => {
                
                    try {
                    const res = await fetch(char);
                    return await res.json(); //get single character
                  } catch (err) {
                    return setError(true);
                  } 
                 
             } ))
   
    setCharacters(characterArr);
    setLoading(false);
    

  })()

  }, [_api]);

 return (
      <>
        { !error ? ( 
        <>
        <main>

         {category === "Location" && <Location name={name} dimension={dimension} type={type}/> }
         {category === "Episode" && <Episodes name={name} air_date={air_date} /> }
            <div className="char__content">
            <div className='filterBox'>
               <h5 className='filters__span text-primary text-decoration-underline text-center mb-2'><b>Filter by {category}</b></h5>
                <div> 
                    <Form.Select 
                        style={{width: `200px`}}
                        onChange={(e)=>setPageData(e.target.value)}>
                            <option>Choose {category}...</option>
                            {[...new Array(pageItemAmount).keys()].map(index =>{
                                return (
                                    <option value={index+1} key={index}>{category}: {index+1}</option>
                                )
                            })} 
                      </Form.Select>
                </div></div>
               <CardsList page ={`/${categoryLink}/`} characters={characters} loading={loading}/> 
            </div>              
        </main>  
       </>) : (<ServerError/>)}
    </>
    )
}

export default Page;