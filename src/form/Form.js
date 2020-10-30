import React, { useEffect, useState } from 'react'
import './Form.css'

import { appKey, appID } from '../API'
import ListSchools from '../listSchools/ListSchools'
import Pagination from '../pagination/Pagination'

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
      fetch(`https://api.schooldigger.com/v1.2/schools?st=${valueStates}&q=${valueSchools}&appID=${appID}&appKey=${appKey}`)
      .then(res => res.json())
      .then(
        (result) => {
          // console.log(result)
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
      fetch(`https://api.schooldigger.com/v1.2/schools?st=${valueStates}&q=${valueSchools}&page=${pageNumber}&appID=${appID}&appKey=${appKey}`)
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
        <ListSchools
          results={results}
          schools={schools}
        />
        {results.numberOfSchools > 10 ? <Pagination pages={results.numberOfPages} nextPage={nextPage} currentPage={currentPage} /> : '' }
      </div>
    );
  };

export default Form
