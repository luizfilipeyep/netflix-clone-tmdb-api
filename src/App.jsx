import { BrowserRouter, Routes, Route } from "react-router-dom"

import NavBar from "./components/NavBar/NavBar"
import Home from "./components/Home/Home"
import Series from "./components/Series/Series"
import Movies from "./components/Movies/Movies"
import Title from "./components/Title/Title"


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
