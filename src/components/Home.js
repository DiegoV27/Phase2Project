import React from "react"

function Home() {

    const homeStyle = {
        backgroundSize: "cover",
        padding: "10px 5px",
        textAlign: "center",
        contentAlign: "center",
        color: "white",
        fontSize: "22px",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
        textShadow: "0 0 25px black",
       
       
       backgroundImage: `url("https://blog.ipleaders.in/wp-content/uploads/2021/07/disney-magic-kingdom-castle-illustration.jpg")`
    }

    return (
        <div style={homeStyle}>
            <h1>Welcome!</h1>
            <h2></h2>
            <p>Looking for the Top Disney Movies of All Time? This app allows you to see all top movies, Also you can create your own top list!</p>
            <li>Navigation: Home: Learn about app and features.</li>
            <li>All Movies: Displays all Top 10 movies.</li>
            <li>Your TopList: Create your own personal Top Disney Movie List.</li>
           
     
        </div>
    )

   

  

  }

  export default Home 