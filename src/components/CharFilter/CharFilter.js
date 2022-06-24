import React, {useRef} from 'react';
import {Accordion , Form, ThemeProvider} from 'react-bootstrap';
import './CharFilter.css'


const CharFilter = ({setSearch, setPageNumber}) => {
  const ref = useRef(null);
let clear = () => {
  setSearch("");
  ref.current.value = '';
}
  return (
    <div className="char__filters">
        <span className='filters__span text-primary text-decoration-underline text-center'><b>Filters</b></span><br/> 
 
            
    <Form.Control 
      type="text" 
      placeholder="Search" 
      onChange={(e) => {
        setPageNumber(1);
        setSearch(e.target.value)}}
        ref={ref}>
          
           
      </Form.Control>
        <Accordion>
            <Accordion.Item eventKey="0">
            <Accordion.Header>Gender</Accordion.Header>
            <Accordion.Body>
              1 2 3
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
            <Accordion.Header>Status</Accordion.Header>
            <Accordion.Body>
             1 2 3
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
            <Accordion.Header>Species</Accordion.Header>
            <Accordion.Body>
            1 2 3
            </Accordion.Body>
            </Accordion.Item>
            </Accordion>

            <button    
    className="btn btn-primary"
    
    onClick={clear}  
    type="reset"  >
      Clear all filters</button>
    </div>
  )
}

export default CharFilter