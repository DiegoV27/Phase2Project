import React from "react";
import Home from "./Home"
import {Route, Switch} from "react-router-dom"
import MovieList from "./MovieList";
import TopMovieList from "./TopMovieList";

function App() {
  return (
    <div>
       <Switch>
      <Route path="/">
      <Home />
    </Route>
    <Route path="/MovieList">
        <MovieList />
        </Route>
        <Route path="/TopMovieList">
        <TopMovieList />
      </Route>
      </Switch>
        </div>
  );
}

export default App;
