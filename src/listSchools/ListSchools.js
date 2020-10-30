import React from 'react';

import './ListSchools.css';

function ListSchools({schools, results }) {

    console.log(results, 'mes props')
    return (
        <div>
        <div className="result">Result(s) : {results.numberOfSchools}</div>
            <div className="list">

            {  //   <div className="card">
              //   <div className="card-image"></div>
              //   <div className="card-text">
              //     <span className="date">State</span>
              //     <h5>SchoolName</h5>
              //     <p>Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor</p>
              //   </div>
              //   <div className="card-stats">
              //     <div className="stat">
              //       <div className="value">N/A</div>
              //       <div className="type">Year</div>
              //     </div>
              //     <div className="stat border">
              //       <div className="value">N/A</div>
              //       <div className="type">Students</div>
              //     </div>
              //     <div className="stat">
              //       <div className="icon"></div>
              //     </div>
              //   </div>
              // </div>
            }

                {schools.map((school) => (
                    <div className="card" key={school.schoolid}>
                        <div className="card-image"></div>
                        <div className="card-text">
                            <span className="date">{school.address.stateFull}</span>
                            <h5>{school.schoolName}</h5>
                            <p>{school.address.street} {school.address.city}</p>
                            <p>phone: {school.phone}</p>
                        </div>
                    <div className="card-stats">
                  <div className="stat">
                    <div className="value">{school.schoolYearlyDetails[0].year }</div>
                    <div className="type">Year</div>
                  </div>
                  <div className="stat">
                    <div className="value">{school.schoolYearlyDetails[0].numberOfStudents }</div>
                    <div className="type">Students</div>
                  </div>
                  <div className="stat border">
                    <a href={school.url} target="_blank"><div className="value icon"></div></a>
                  </div>
                </div>
              </div>
                 ))}
            </div>
        </div>
    )
}

export default ListSchools

    
    
    
    
    