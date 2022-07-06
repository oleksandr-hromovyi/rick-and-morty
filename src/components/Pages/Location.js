import React  from 'react'
import './Pages.css'
const Location = ({name, dimension, type}) => {
 
  return (
     <>
        <h2 className='text-center mb-4'>Location: <span style={{color: "#9F0013"}}> {!name ? "Unknown" : name}</span></h2>
        <h2 className='text-center mb-4'>Dimension: {!dimension ? "unknown" : dimension}</h2>
        <h4 className='text-center'>Type: {!type ? "unknown" : type}</h4>
     </>
  )
}

export default Location;