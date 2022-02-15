// this is where users add their own list using a form
import React, {useState, useEffect} from "react";


function TopMovieList() {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    // const [new, setNew] = useState("")
    function handleAddMovie(newMovie) {
        fetch("http://localhost:3000/topList", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json", 
            },
            body: JSON.stringify({
                name:name,
                image:image
            })
        }) .then((resp) => resp.json())
            .then((newMovie) => console.log(newMovie))

    }

    return (
      <div>
        <h1>Add Movie</h1>
        <form onSubmit={handleAddMovie}>
          <div>
            <input type="text" name="movie name" placeholder="Movie Name" value={name} onChange={(e)=> setName (e.target.value)} />
          </div>
          <div>
            <input type="text" name="image" placeholder="Image" value={image} onChange={(e)=> setImage (e.target.value)} />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }

export default TopMovieList

