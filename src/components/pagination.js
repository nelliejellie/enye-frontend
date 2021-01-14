import React from 'react'

const Pagination = ({profilePerPage, totalPages, paginate}) => {
    const pageNumbers = [];

    for (let i=1; i<= Math.ceil(totalPages/profilePerPage); i++){
        pageNumbers.push(i)
    }
    console.log(pageNumbers)
    return (
        <div className='pagination'>
            {
                pageNumbers.map(number=>(
                    <h2 key={number} className='paginatedNumbers'><a href='#' onClick={()=>{paginate(number)}}>{number}</a></h2>
                ))
            }
        </div>
    )
}

export default Pagination;