import React, {useState} from "react";
import Home from "./Home"
import {Route, Switch} from "react-router-dom"
import MovieList from "./MovieList";
import TopMovieList from "./TopMovieList";
import NavBar from "./NavBar";


function App() {
  const [search, setSearch] = useState('')

  function handleSearch(newSearch) {
      setSearch(newSearch)
  }

  


  return (
    <div>
      <NavBar />
      <Switch>
    <Route path="/MovieList">
        <MovieList onSearch={handleSearch} search={search} />
        </Route>
        <Route path="/TopMovieList">
        <TopMovieList />
      </Route>
      <Route exact path="/">
      <Home />
    </Route>
        </Switch>

        </div>
  );
}

export default App;
