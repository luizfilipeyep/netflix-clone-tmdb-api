import axios from "axios"
import { useState, useEffect } from "react"

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY


function Home() {
  const [topMovies, setTopMovies] = useState([])

  useEffect(() => {
    axios
      .get(`${moviesURL}top_rated?${apiKey}`)
      .then((response) => {console.log(response.data.results)})
  }, [])

  // const getTopRatedMovies = async (url) => {
  //   const res = await fetch(url)
  //   const data = await res.json

  //   console.log(data)
  // }

  // useEffect(() => {
  //   const topRatedUrl = `${moviesURL}top_rated?${apiKey}`
  //   getTopRatedMovies(topRatedUrl)
  // }, [])

  return ( 
    <>      
      home
    </>
   );
}

export default Home;