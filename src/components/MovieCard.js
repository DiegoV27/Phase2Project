import React from "react";

function MovieCard({ movie }) {
  

  const {image, name } = movie;


  return (
    <li className="card">
      <div className="image">
        <img src={image} />
      </div>
      <div className="details">
        <strong>{name}</strong>
      </div> 
    </li>
  );
}

export default MovieCard;
