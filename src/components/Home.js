import React from "react"

function Home() {

    const homeStyle = {
        backgroundSize: "cover",
        padding: "10px 5px",
        textAlign: "center",
        contentAlign: "center",
        color: "white",
        fontSize: "25px",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
        textShadow: "0 0 10px black",
       
       
       backgroundImage: `url("https://blog.ipleaders.in/wp-content/uploads/2021/07/disney-magic-kingdom-castle-illustration.jpg")`
    }

    return (
        <div style={homeStyle}>
            <h1>Welcome!</h1>
            <h2></h2>
            <p>Looking for the Top Disney Movies of All Time? </p>
            <p>This app allows you to see Disney top movies</p>
            <p>Also you can create your own top list!</p>
            <ul>NAVIGATIONS: </ul>
            <ul>Home: Learn about the app features</ul>
            <ul>All Movies: Displays all Top 10 movies</ul>
            <ul>Your Top list: Create your own personal Top Disney Movie List</ul>
        </div>
    )

   

  

  }

  export default Home 