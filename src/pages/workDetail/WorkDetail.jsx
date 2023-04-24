import React from "react";
import { Carousel } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { works } from "../../works";
import { FaBeer } from "react-icons/fa";
import { Carousels } from "../../components/carrousel/Carousels";
import { IconsTecnologies } from "../../components/iconsTecnologies/IconsTecnologies";
import { GridDetail } from "../../components/gridDetail/GridDetail";
import { useScrollToTop } from "../../../customHooks/useScrollToTop"; 

export const WorkDetail = () => {
  useScrollToTop()
  const { id } = useParams();
  console.log(works);
  const workDetail = works.find((w) => w.id.toString() === id.toString());
  console.log(workDetail.link[0]);

  return (
    <div className="container-fluid">
      <h1 className="display-1 ms-3">{workDetail.name}</h1>

      <div className="container">
        <i className={`${workDetail.link[0]} me-3`}></i>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={workDetail.link[1]}
          variant="primary"
        >
          Ir a la pagina
        </a>
      </div>

      <div className="container mb-3">
        {workDetail.github.map((el, index) => {
          return (
            <>
              <i className={`${el[0]} me-3`}></i>
              <a
                className="me-3 "
                target="_blank"
                rel="noopener noreferrer"
                href={el[2]}
                variant="primary"
              >
                Ir al repo del {el[1]}
              </a>
            </>
          );
        })}
      </div>

      <Carousels workDetail={workDetail} />

      <div className="container">
        {workDetail.detail.map((d) => {
          return <p className="mt-1">{d}</p>;
        })}
      </div>

      <IconsTecnologies workDetail={workDetail} />

      <GridDetail workDetail={workDetail} />
    </div>
  );
};
