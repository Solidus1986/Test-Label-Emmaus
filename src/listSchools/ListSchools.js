import React from 'react';

import './ListSchools.css';

function ListSchools({schools, results }) {

    console.log(results, 'mes props')
    return (
        <div>
            <div className="list">
                <div>Result(s) : {results.numberOfSchools}</div>

                {/* <div className="school">
                      <h3>l'école</h3>
                      <p>adresse : adresse</p>
                      <p>ville : la ville</p>
                      <p>nombre d'étudiant : 1000000</p>
                     </div>
                     <div className="school">
                      <h3>l'école</h3>
                      <p>adresse : adresse</p>
                      <p>ville : la ville</p>
                      <p>nombre d'étudiant : 1000000</p>
                </div>
    */}
                {schools.map((school) => (
                    <div className="school" key={school.schoolid}>
                     <h3>{school.schoolName}</h3>
                     <p>address : {school.address.street}</p>
                     <p>city : {school.address.city}</p>
                     <p>number of students : {school.schoolYearlyDetails[0].numberOfStudents }</p>
                    </div>
                 ))}
            </div>
        </div>
    )
}

export default ListSchools

    
    
    
    
    