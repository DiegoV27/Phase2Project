import React from "react";

function MovieCard({ movie }) {

  const movieStyle = {
    textAlign: "center",
    padding: "30px",
    listStyle: "none",
    margin: "1rem",
    marginTop: "0.5rem",
    
    
    //backgroundImage: `url("https://cdn.wallpapersafari.com/25/35/08QE74.jpg")`,
    

  }
  

  const {image, name } = movie;


  return (
    <ul  style={movieStyle}
    className="card">
      <div className="image">
        <img src={image} />
      </div>
      <div className="details">
        <strong>{name}</strong>
      </div> 
    </ul>
  );
}

export default MovieCard;
