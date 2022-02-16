import React from "react";

function MovieCard({ movie }) {

  const movieStyle = {
    textAlign: "center",
    padding: "30px"
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
