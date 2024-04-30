import axios from "axios"
import { useState, useEffect } from "react"

import "./home.css"

import { FaPlay } from "react-icons/fa";

import TitleCard from "../../components/TitleCard/TitleCard";
import Slider from "../../components/Slider/Slider";

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY
const wallpaperURL = import.meta.env.VITE_WALLPAPER
const movieID = "533535"

function Home() {
  const [topMovies, setTopMovies] = useState([])

  useEffect(() => {
    axios
      .get(`${moviesURL}${movieID}?${apiKey}&language=pt-BR`)
      .then((response) => {
        setTopMovies(response.data)
      })
  }, [])

  console.log(topMovies.title)

  return ( 
    <> 
      <section className="hero">
        <img src={`${wallpaperURL}${topMovies.backdrop_path}`} />     
        <div className="about">
          <h1>{topMovies.title}</h1>
          <p>{topMovies.overview}</p>
          <span>
            <a href="#"><FaPlay /> Assistir</a>
          </span>
        </div>
      </section>

      <Slider />
      
    </>
   );
}

export default Home;