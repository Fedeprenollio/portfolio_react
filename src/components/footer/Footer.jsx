import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import { FaReact } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className=" container-fluid mx-0 footer h-auto text-center">
      <div className="row p-3 bg-dark  text-secondary ">
        {/* logo */}
        <div className=" col-xs-12 col-md-6 col-lg-3 mb-2">
          <FaReact style={{"fontSize":"10rem"}}/>
          {/* <img
            width="100px"
            className="rounded-circle"
            src="https://res.cloudinary.com/dewegl2jr/image/upload/v1666721949/fungi/mushroom-illustration-logo-vector-design-260nw-1747652519_e6d1qk.webp"
            alt=""
          /> */}
        </div>
        {/* INFO */}
        <div className=" col-6 col-md-6 col-lg-3 mb-2 mt-2">
          <p className="h4">Federico Prenollio</p>
          <p className="h6">Cruz del Eje - Córdoba</p>
          <p className="h6"> React Developer</p>
          
        </div>
        {/* Redes */}
        <div className=" col-6 col-md-6 col-lg-3 mb-2">
          {/* <p>Redes</p> */}
         
          <Nav.Link
            className="mb-2"
            href="https://github.com/Fedeprenollio"
            target="_blank"
            rel="noopener noreferrer"
          >
             <i style={{"fontSize":"3rem"}} className={`bi bi-github me-3`}></i>
          </Nav.Link>
          <Nav.Link
            className="mb-2"
            href="https://www.linkedin.com/in/federico-prenollio/"
            target="_blank"
            rel="noopener noreferrer"
          >
             <i style={{"fontSize":"3rem"}} className={`bi bi-linkedin me-3`}></i>
          </Nav.Link>
        </div>
        {/* contactos */}
        <div className=" col-6 col-md-6 col-lg-3 mb-2 mt-2">
          {/* <p>Contactos</p> */}
          <Nav.Link
            className="mb-2"
            href="https://walink.co/1f57f6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="46"
              height="46"
              fill="currentColor"
              classeName="bi bi-whatsapp"
              viewBox="0 0 16 16"
            >
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </svg>
          </Nav.Link>
          <Nav.Link as={NavLink} className="mb-2" to="/contact">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="46"
              height="46"
              fill="currentColor"
              classeName="bi bi-envelope-check"
              viewBox="0 0 16 16"
            >
              <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
              <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z" />
            </svg>
          </Nav.Link>
        </div>
      </div>
    </div>
  );
};
