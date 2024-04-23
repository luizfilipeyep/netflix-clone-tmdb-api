import { BrowserRouter, Routes, Route } from "react-router-dom"

import NavBar from "./components/NavBar/NavBar"
import Home from "./components/Home/Home"
import Series from "./components/Series/Series"
import Movies from "./components/Movies/Movies"
import Title from "./components/Title/Title"

// https://api.themoviedb.org/3/movie/848326?api_key=19d258c2ec32a67c20927f058ef1e585&language=pt-BR
// 

import "./index.css"

function App() {
  return (
    <>      
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/series" element={<Series />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="title/:id" element={<Title />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
