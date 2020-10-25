import React, { useState } from 'react'
import './Form.css'

import { appKey, appID } from '../API'
import ListSchools from '../listSchools/ListSchools'

function Form() {
    
    const [valueStates, setValueStates] = useState('');
    const [valueSchools, setValueSchools] = useState('');
    const [results, setResults] = useState([])
    const [schools, setSchools] = useState([]);
  
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
  
  
  
    return (
      <div className="form-page">
        <form className="form-search" onSubmit={handleSubmit}>
          <input
            className="input"
            value={valueStates}
            onChange={handleChangeStates}
            type="text"
            placeholder="Search State"
          />
          <input
            className="input"
            value={valueSchools}
            onChange={handleChangeSchools}
            type="text"
            placeholder="Search School"
          />
        <button type="submit">GO</button>
        </form>
        <ListSchools
          results={results}
          schools={schools}
        />

      </div>
    );
  };

export default Form
