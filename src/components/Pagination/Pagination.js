import {Component} from 'react';
import { Button } from 'react-bootstrap';
import Services from '../Services/Services';
import Cards from '../Cards/Cards';
import ReactPaginate from 'react-paginate';
import React from 'react'
import  './Pagination.css'

{/*
class Pagination extends Component{ 
 
   
  render(){
  
  

  return (
    <div>
      <Button onClick={onPrevPage}>Prev</Button>
      <Button onClick={onNextPage}>Next</Button>
    </div>
  )
}}

export default Pagination */}



const Pagination = ({setPageNumber, pageNumber, info}) => {
return (
  <ReactPaginate 
  className='pagination justify-content-center'
  previousLabel="Prev"
  nextLabel="Next"
  nextLinkClassName='btn btn-primary'
  previousClassName='btn btn-primary'
  pageClassName = 'page-item'
  pageLinkClassName='page-link'
  pageCount={info?.pages} 
  onPageChange={(data)=>{
    setPageNumber(data.selected +1)
  }}/>
)

 {/* let onPrevPage = () => {
    if (pageNumber === 1) return
    setPageNumber((page) => page-1)
    console.log("prev")}
  let onNextPage = () => {
    if (pageNumber === 42) return
    setPageNumber((page) => page+1)
    console.log("next")
  }
  return (
    <div className='paginator'>
      <Button onClick={onPrevPage}>Prev</Button>
      <Button onClick={onNextPage}>Next</Button>
    </div>
  )*/}
}

export default Pagination