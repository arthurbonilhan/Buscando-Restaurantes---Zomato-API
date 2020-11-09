import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

const ratingsValues = [1, 2, 3, 4, 5];
const costValues = [50, 80, 110];
const cozinhas = [
  "Árabe",
  "Brasileira",
  "Chinesa",
  "Francesa",
  "Frutos do mar",
  "Italiana",
  "Japonesa",
  "Mexicana",
  "Peruana",
];

const Filters = (props) => {
  return (
    <div className="filtro">
      <div className="filtro_ratings">
        <h4>Notas:</h4>
        <div>
          {ratingsValues.map((rating) => {
            return (
              <div key={rating}>
                <label>
                  <input
                    id={rating}
                    type="checkbox"
                    value={rating}
                    name="rating"
                    onClick={props.onClick}
                  />
                  <span>
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ display: rating >= 1 ? "flex" : "none" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ display: rating >= 2 ? "flex" : "none" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ display: rating >= 3 ? "flex" : "none" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ display: rating >= 4 ? "flex" : "none" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ display: rating >= 5 ? "flex" : "none" }}
                    />
                    {/* <FontAwesomeIcon className="filtro-star" icon={faStar} /> {} */}
                  </span>
                </label>
              </div>
            );
          })}
        </div>
      </div>
      <div className="filtro_cost">
        <h4>Custo medio:</h4>
        <div>
          {costValues.map((cost) => {
            return (
              <div key={cost}>
                <label>
                  <input
                    type="checkbox"
                    value={cost}
                    name="cost"
                    onClick={props.onClick}
                  />
                  <span>Até R${cost}</span>
                </label>
              </div>
            );
          })}
        </div>
      </div>
      <div className="filtro_cost">
        <h4>Tipo de comida:</h4>
        <div>
          {cozinhas.map((cozinhas) => {
            return (
              <div key={cozinhas}>
                <label>
                  <input
                    type="checkbox"
                    name="cozinhas"
                    onClick={props.onClick}
                  />
                  <span>{cozinhas}</span>
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Filters);
