import React from 'react'

import CardMovie from './CardMovie'
import './MoviesList.css'


function MoviesList({moviesList,nameSearch,ratingSearch}) {
    
   

    return (
        <div className="movies-list">
           {moviesList.filter(movie=>movie.name.toLowerCase().includes(nameSearch.toLowerCase().trim()) && movie.rating>=ratingSearch).map((movie,i)=> <CardMovie movie={movie} key={i} />)} 
        </div>
    )
}

export default MoviesList
