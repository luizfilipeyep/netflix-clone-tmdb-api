import axios from "axios";
import { useState, useEffect } from "react";

import "./titlecard.css"


import { FaGreaterThan } from "react-icons/fa";

const titleURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY
const wallpaperURL = import.meta.env.VITE_WALLPAPER

function TitleCard({ tID }) {
  const titleID = tID

  const [title, setTitle] = useState([])

  useEffect(() => {
    axios
      .get(`${titleURL}${titleID}?${apiKey}&language=pt-BR`)
      .then((response) => {
        setTitle(response.data)
      })
  }, [])
  
  console.log(title.title)
  

  return (
    <>
        <div className="card">
          <a href="#">
            <div className="info">
              <h1>
                {title.title}
                <span>
                  <FaGreaterThan />
                </span>
              </h1>
            </div>
            <img src={`${wallpaperURL}${title.backdrop_path}`} alt="" />
          </a>
        </div>
    </>
  );
}

export default TitleCard;