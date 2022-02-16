// this is where users add their own list using a form
import React, {useState, useEffect} from "react";
import MovieCard from "./MovieCard";


function TopMovieList() {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
  const [moviesList, setMoviesList] = useState([])

  const topMovieListStyle = {
    textAlign: "center",
  }
  

  useEffect(() => {
    fetch("http://localhost:3000/topList")
      .then((r) => r.json())
      .then((newMovieArray) => {
      setMoviesList(newMovieArray)
    })
  }, [])

  function handleAddMovie(newMovie) {
    const updatedMovieArray = [...moviesList, newMovie]
    setMoviesList(updatedMovieArray)
  }
  
  
  function handleNewMovie(e) {
      e.preventDefault()
        fetch("http://localhost:3000/topList", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json", 
            },
            body: JSON.stringify({
                name:name,
                image:image
            })
        }).then((resp) => resp.json())
        
        .then((newMovie) => handleAddMovie(newMovie))

    }

    return (
      <div style={topMovieListStyle}>
        <h1>Add Movie</h1>
        <form onSubmit={handleNewMovie}>
          <div>
            <input type="text" name="movie name" placeholder="Movie Name" value={name} onChange={(e)=> setName (e.target.value)} />
          </div>
          <div>
            <input type="text" name="image" placeholder="Image" value={image} onChange={(e)=> setImage (e.target.value)} />
          </div>
          <input type="submit" value="Submit" />
        </form>
          {
            moviesList.map((movie) => {
              return <MovieCard movie={movie}/>
            })
          }
            
        
      </div>
    );
  }

export default TopMovieList

