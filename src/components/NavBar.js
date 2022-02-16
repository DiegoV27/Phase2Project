import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

    const linkStyles = {
        display: "inline-block",
        width: "90px",
        padding: "10px",
        margin: "0 6px 6px",
        background: "blue",
        textDecoration: "none",
        color: "white",
      };
    return (
      <div>
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      > Home
            </NavLink>
            <NavLink
        to="/MovieList"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        All Movies
            </NavLink>
            <NavLink
        to="/TopMovieList"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
       Your Top List
        </NavLink>
      </div>
      
    )
}


export default NavBar