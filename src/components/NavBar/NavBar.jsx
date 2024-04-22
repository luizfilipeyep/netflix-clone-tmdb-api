import { Link } from "react-router-dom";

import "./navbar.css"
import Brand from "../../../public/assets/netflix-brand.svg"
import { FaSearch } from "react-icons/fa";

function NavBar() {
  window.addEventListener("scroll", () => {
    var header = document.querySelector("nav")
    header.classList.toggle("sticky", window.scrollY > 0)
  })

  return ( 
    <>
      <nav className="nav">
        <span>
          <Link to="/">
            <img src={Brand} alt="Logo da Netflix" />
          </Link>
          <Link to="/">Início</Link>
          <Link to="/series">Séries</Link>
          <Link to="/movies">Filmes</Link>
        </span>

        <a href="#"><FaSearch className="searchIcon" /></a>
      </nav>
    </>
   );
}

export default NavBar;