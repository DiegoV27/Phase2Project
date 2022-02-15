import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard"
import SearchBar from "./SearchBar";

// this is where we map through the json to get every movie

function MovieList({search, onSearch}) {


  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then((r) => r.json())
      .then(MovieArray => {
        setMovies(MovieArray)
      })
  }, [])



  const filteredMovies = movies.filter((movie) => {
    return movie.name.toLowerCase().includes(search.toLowerCase())
  })
  
  

  return (
    <main>
      <ul className="cards">
      <SearchBar onSearch={onSearch}/>
        {filteredMovies.map((movie) => {
          return (<MovieCard key={movie.id} movie={movie} />)
        })}
      </ul>
    </main>
  );
}

export default MovieList