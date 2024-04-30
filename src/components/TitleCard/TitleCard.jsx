import "./titlecard.css"

import { FaGreaterThan } from "react-icons/fa";

function TitleCard() {
  return ( 
    <>
      <section className="carousel">
        <div className="card">
          <a href="#">
            <div className="info">
              <h1>
                Rua do Medo: 1994 - Parte 1
                <span>
                  <FaGreaterThan />
                </span>
              </h1>              
            </div>
            <img src="https://image.tmdb.org/t/p/original/vu5Y8qFqlzcboDbbZIMTAgj0KLb.jpg" alt="" />
          </a>
        </div>
      </section>
    </>
   );
}

export default TitleCard;