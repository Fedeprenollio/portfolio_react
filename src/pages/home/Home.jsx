import React from "react";
import { Nav } from "react-bootstrap";
import { Works } from "../works/Works";

export const Home = () => {
  return (
    <div className="container2 container d-flex flex-column align-items-center justify-content-center mt-3 text-center">
      <h1 className=" title mb-4">Federico Prenollio</h1>
      <h2 className="">Fullstack developer</h2>

      <div className="icons">
        <ul class="ul d-flex ">
          <li className="li">
            <Nav.Link
              className="mb-2  "
              href="https://www.linkedin.com/in/federico-prenollio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-linkedin"></i>
            </Nav.Link>
          </li>
          <li className="li">
            <Nav.Link
              className="mb-2 list-inline-item"
              href="https://github.com/Fedeprenollio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="bi bi-github"></i>
            </Nav.Link>
          </li>
        </ul>
      </div>

      <p>
        Soy egresado hace 10 años de la Universidad
        Nacional de Córdoba como Farmacéutico. Luego de muchos años de dedicarme
        a la farmacia, decidí dedicarme full time y profesionalmente a la
        programación, una temática que siempre me apasionó. Recientemente
        he finalizado el bootcamp de Soy Henry y estoy buscando un ambiente
        laboral donde pueda seguir aprendiendo, tomando desafíos con
        responsabilidad y dedicación.
      </p>
      <p>En éste porfolio te voy a mostrar algunos trabajos que estoy realizando para seguir capacitandome mientras espero mi primera oportunidad laboral</p>

      
    </div>
  );
};
