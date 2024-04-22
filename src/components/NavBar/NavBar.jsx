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
          <a href="#">
            <img src={Brand} alt="Logo da Netflix" />
          </a>
          <a href="#">Início</a>
          <a href="#">Séries</a>
          <a href="#">Filmes</a>
        </span>

        <a href="#"><FaSearch className="searchIcon" /></a>
      </nav>
    </>
   );
}

export default NavBar;