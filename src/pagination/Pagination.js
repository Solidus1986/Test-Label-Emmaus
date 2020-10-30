import React from 'react'
import './Pagination.css'

const Pagination = (props) => {

    const pageLinks = []

    for(let i = 1; i <= props.pages; i++) {
        let active = props.currentPage === i ? 'active' : '';

        pageLinks.push(<li className={`pagination-number ${active}`} key={i} onClick={() => props.nextPage(i)} ><a href={i}>{i}</a></li>)
    }

    return (
        <div>
            <div className="pagination-container">
                <ul className="pagination-list">
                    { pageLinks }
                </ul>
            </div>
        </div>
    )
}


export default Pagination
