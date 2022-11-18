import React from "react";
import { SiRedux } from "react-icons/si";

import * as Icons from "react-icons/si";
import * as Iconss from "react-icons/tb";

/* Your icon name from database data can now be passed as prop */
export const DynamicFaIcon = ({ name }) => {
  const IconComponent = Icons[name] || Iconss[name] ;

  if (!IconComponent) {
    // Return a default one
  return "hola"
    // return <Icons.SiRedux style={{ height: "3rem", width: "3rem" }} />;
  }

  return <IconComponent style={{ height: "3rem", width: "3rem" }} />;
};

export const IconsTecnologies = ({ workDetail }) => {
  return (
    <div className="container text-center">
      <h3>Tecnologias usadas</h3>
      <ul className="icons " style={{ fontSize: "3rem" }}>
        {workDetail.tecno.map((wD, index) => {
          if (wD.length > 1 && wD[1].includes("-")) {
            return (
              <li className=" d-inline-block mx-3 text-center">
                <i key={index} className={`${wD[1]} me-3`}></i>
                <h4>{wD[0]}</h4>
              </li>
            );
          }
          if (wD[1]?.split(" ").length === 1 && wD[1]) {
          
            return (
              <li className=" d-inline-block mx-3 text-center">
                <DynamicFaIcon name={wD[1]} />{" "}
                <h4>{wD[0]}</h4>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};
