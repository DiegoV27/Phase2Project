// this is where users add their own list using a form
import React from "react";


function TopMovieList() {
    return (
      <div>
        <h1>Add Movie</h1>
        <form>
          <div>
            <input type="text" name="movie name" placeholder="Movie Name" />
          </div>
          <div>
            <input type="image" name="image" placeholder="Image" />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }

export default TopMovieList

