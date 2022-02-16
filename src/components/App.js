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

  const style = {
    backgroundColor: "#ebfbff",
    padding: "30px 0",
    flexDirection: "row",
    width: "100vw",
    height: "100%",
  }  


  return (
      <header style={style}>
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
        </header>
      
  );
}

export default App;
