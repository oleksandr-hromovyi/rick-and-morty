import React from 'react';
import {Accordion , Form} from 'react-bootstrap';
import './CharFilter.css'


const CharFilter = ({setSearch, setPageNumber, setGender, setStatus, setSpecies}) => {
  let gender = ["female", "male", "genderless", "unknown"];
  let status = ["alive", "dead", "unknown"];
  let species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];
  
let clear = () => {
  setSearch("");
  setGender("");
  setStatus("");
  setSpecies("");
}

  let renderRadioBtn = (info, name) => {
    return ( info.sort().map((item, index)=>{
      return (<Form.Check
        name={name} 
        key={index}
        type='radio'
        id={`${item}-status-${name}`}
        label={item}
        onClick={()=>{
          setPageNumber(1);
          switch (name) {
            case 'gender': 
              setGender(item);
              break;
            case 'status':
              setStatus(item);
              break;
            case 'species':
              setSpecies(item);
              break;
            default:
              break;
        }
      }}/>)
    }))
  }

return (
    <div className="char__filters">
        <span className='filters__span text-primary text-decoration-underline text-center'><b>Filters</b></span><br/> 
        <Form>   
        <Form.Control 
            type="text"
            placeholder="Search" 
            onChange={(e) => {
                setPageNumber(1);
                setSearch(e.target.value)}}
               >
        </Form.Control>
        
        <Accordion>
            <Accordion.Item eventKey="0">
            <Accordion.Header>Gender</Accordion.Header>
            <Accordion.Body>      
            {renderRadioBtn(gender, "gender")}
            </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
            <Accordion.Header>Status</Accordion.Header>
            <Accordion.Body>
            {renderRadioBtn(status, "status")}
             </Accordion.Body>
            </Accordion.Item>
            
            <Accordion.Item eventKey="2">
            <Accordion.Header>Species</Accordion.Header>
            <Accordion.Body>
            {renderRadioBtn(species, "species")}
            </Accordion.Body>
            </Accordion.Item>
        </Accordion>

        <button
            className="btn btn-primary"
            onClick={clear}  
            type="reset">
                Clear all filters
        </button>
        </Form> 
    </div>
  )
}

export default CharFilter;