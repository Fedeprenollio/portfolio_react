import React from "react";

export const GridDetail = ({ workDetail }) => {
  return (
    <div className="container">
      <div class="row    justify-content-around">
        <div class=" col-12 col-md-5 border ">
          <h3>Tecnologias principales:</h3>
          <ul>
            {workDetail.tecno.map((wD, index) => {
              return (
                <li key={index} className="  mx-3 h6">
                  {wD[0]}
                </li>
              );
            })}
          </ul>
        </div>
        <div class="col-12 col-md-5 border ">
          <h3>Habilidades practicadas</h3>
          <ul>
            {workDetail.hability.map((hab, index) => {
              return (
                <li key={index} className="h6  mx-3 ">
                  {hab}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
