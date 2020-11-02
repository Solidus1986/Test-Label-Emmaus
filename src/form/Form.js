import React, { useState , useEffect } from 'react'
import './Form.css'

import ListSchools from '../listSchools/ListSchools'
import Pagination from '../pagination/Pagination'
import { WrappedMap } from '../map/Map'

function Form() {
    
    const [valueStates, setValueStates] = useState('');
    const [valueSchools, setValueSchools] = useState('');
    const [results, setResults] = useState([])
    const [schools, setSchools] = useState([]);
    const [currentPage, setCurrentPage] = useState (1)
  
    const handleChangeStates = (event) => {
      setValueStates(event.currentTarget.value);
    };

    const handleChangeSchools = (event) => {
      setValueSchools(event.currentTarget.value);
    };
  
 
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(process.env.REACT_APP_ID, "app id")
      fetch(`https://api.schooldigger.com/v1.2/schools?st=${valueStates}&q=${valueSchools}&appID=${process.env.REACT_APP_ID}&appKey=${process.env.REACT_APP_KEY}`)
      .then(res => res.json())
      .then(
        (result) => {
          
          
          localStorage.setItem('result', JSON.stringify(result))
          setResults(result);
          const schoolList = result.schoolList;
          setSchools(schoolList)
          

        },
        (error) => {
          console.log(error);
          
        }
      )
      setValueStates('')
      setValueSchools('')
  
    };

  

    const nextPage = (pageNumber) => {
      fetch(`https://api.schooldigger.com/v1.2/schools?st=${valueStates}&q=${valueSchools}&page=${pageNumber}&appID=${process.env.REACT_APP_ID}&appKey=${process.env.REACT_APP_KEY}`)
      .then(res => res.json())
      .then(
        (result) => {
          // console.log(result)
          setResults(result);
          setCurrentPage(pageNumber)
          const schoolList = result.schoolList;
          setSchools(schoolList)
          

        })
    }
    
  
  
    return (
      <div className="form-page">
        {console.log(results, "localstorage")}
        <form className="form-search" onSubmit={handleSubmit}>
        <label className="field">
          <input
            value={valueStates}
            onChange={handleChangeStates}
            type="text"
            required
          />
          <span className="placeholder">Enter State</span>
          </label>
          <label className="field">
          <input
            value={valueSchools}
            onChange={handleChangeSchools}
            type="text"
            required
          />
          <span className="placeholder">Enter School</span>
          </label>
        <button type="submit">SEARCH</button>
        </form>
        <WrappedMap
          isMarkerShown 
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_KEY}&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          schools={schools}
          />
        <ListSchools
          results={results}
          schools={schools}
        />

        {results.numberOfSchools > 10 ? <Pagination pages={results.numberOfPages} nextPage={nextPage} currentPage={currentPage} /> : '' }
      </div>
    );
  };

export default Form
