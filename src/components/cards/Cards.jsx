import React from "react";
import { Button, Card, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

export const Cards = ({ work }) => {
  return (
    <div className="container-fluid  mt-5 col mb-1">
      <Card className="bg-custom-color " style={{ "width": "18rem"}}>
        <NavLink to={`/works/${work.id}`} className="text-center">
          <Card.Img
            className="img  mt-2"
            variant="top"
            src={work.img[0]}
            style={{ width: "95%" }}
          />
        </NavLink>
        <Card.Body>
          <Card.Title>{work.name}</Card.Title>
          <Card.Text className=" text-truncate">{work.info}</Card.Text>
          <Nav.Link as={NavLink} to={`/works/${work.id}`}>
            Detalle
          </Nav.Link>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={work.link[1]}
            variant="primary"
          >
            Ir a la pagina
          </a>
        </Card.Body>
      </Card>
    </div>
  );
};
