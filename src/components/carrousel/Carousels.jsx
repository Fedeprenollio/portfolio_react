import React from "react";
import { Carousel } from "react-bootstrap";

export const Carousels = ({ workDetail }) => {
  return (
    <Carousel className="container " variant="dark" style={{ width: "60%" }}>
      {workDetail.img.map((img) => {
        return (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img}
              alt="First slide"
            />
            {/* <Carousel.Caption className="d-none d-md-block">
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};
