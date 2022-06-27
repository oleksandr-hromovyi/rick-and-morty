import React from 'react';
import ReactPaginate from 'react-paginate';
import  './Pagination.css'

const Pagination = ({setPageNumber, info}) => {

  return (
      <ReactPaginate 
      className='pagination justify-content-center'
      previousLabel="Prev"
      nextLabel="Next"
      nextLinkClassName='btn btn-primary'
      previousClassName='btn btn-primary'
      pageClassName = 'page-item'
      pageLinkClassName='page-link'
      pageCount={ info?.pages}
      onPageChange={(data)=>{
        setPageNumber(data.selected +1)
      }}/>
    )
    }
export default Pagination;