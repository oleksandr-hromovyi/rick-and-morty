import React from 'react';
import ReactPaginate from 'react-paginate';
import  './Pagination.css'
import { animateScroll as scroll } from "react-scroll";
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
      pageCount={ info?.pages ? info.pages : 0}
      onPageChange={(data)=>{
        setPageNumber(data.selected +1)
      }}
      onClick={()=> scroll.scrollToTop()}
      />
    )
    }
export default Pagination;