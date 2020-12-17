import React,{useState} from 'react'
import MoviesList from './components/MoviesList'
import AddMovie from './components/AddMovie'
import Search from './components/Search'
import {moviesData} from './const/const'
import './App.css';


function App() {
  const [moviesList, setMoviesList] = useState(moviesData)
  const [nameSearch,setNameSearch]=useState("")
  const [ratingSearch,setRatingSearch]=useState(1)
  const addMovie=(newMovie)=>{
    setMoviesList([...moviesList,newMovie])
}

 
  return (
    <div className="App">
      <Search  setNameSearch={setNameSearch}  setRatingSearch={setRatingSearch} ratingSearch={ratingSearch} />
  <MoviesList moviesList={moviesList}  nameSearch={nameSearch} ratingSearch={ ratingSearch} />
  <AddMovie addMovie={addMovie}  />
    </div>
  );
}

export default App;
