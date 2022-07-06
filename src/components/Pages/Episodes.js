import React from 'react';

const Episodes = ({name, air_date}) => {
  return (
        <>
            <h2 className='text-center mb-4'>Episode: <span style={{color: "#9F0013"}}> { name ? name : "Unknown"}</span></h2>
            <h5 className='text-center'>Air date: {air_date ?  air_date: "unknown" }</h5>
        </>
  ) 
}

export default Episodes;