import React from 'react'
import Rating from './Rating'

function Search({setNameSearch,setRatingSearch,ratingSearch}) {
    
 
    return (
        <div className="search">
            <form >
                <input type="text" name="name" onChange={(e)=>setNameSearch(e.target.value)} />
               <Rating starIndex={setRatingSearch} rating={ratingSearch} />
    
            </form>
        </div>
    )
}

export default Search
