import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import instance from "../../api/axios";

import SearchBar from "../SearchBar/SearchBar";
import Filtro from "../Filtros/Filtro";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserFriends,
  faStar,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

import BgBackup from "../../img/bg_backup.jpg";
import LogoRed from "../../img/logo_red.jpg";

const Results = () => {
  const [project, updateProject] = useState({});
  const [isLoading, updateIsLoading] = useState(true);
  const [error, updateError] = useState("");
  const { cidade, id } = useParams();
  const [rating, setRating] = useState("");
  let avaliacao;

  const filtroClick = (event) => {
    avaliacao = event.target.value;
    setRating(parseInt(avaliacao));
  };
  useEffect(() => {
    instance
      .get(`search?entity_id=${id}&entity_type=city&q=${cidade}&count=100`, {})
      .then((resp) => {
        updateProject(resp.data);
        updateIsLoading(false);
      })
      .catch((error) => {
        updateError(error.message);
        updateIsLoading(false);
      });
  }, [cidade]);

  if (isLoading) {
    return (
      <div className="main_spinner">
        <h1>
          Buscando
          <FontAwesomeIcon icon={faSpinner} spin />
        </h1>
      </div>
    );
  }
  if (error) {
    return (
      <div className="main_erros">
        <h1>Erro: {error}</h1>
      </div>
    );
  }

  return (
    <>
      <div className="search-down">
        <Link to="/">
          <img src={LogoRed} alt="" />
        </Link>

        <div className="search-b">
          <SearchBar value={cidade} />
        </div>
      </div>

      <div className="restaurant container">
        <Filtro onClick={filtroClick} />
        <div className="restaurant_grid">
          {project.restaurants.map((r) =>
            r.restaurant.user_rating.aggregate_rating >= rating &&
            r.restaurant.user_rating.aggregate_rating < rating + 2 ? (
              <div key={r.restaurant.id}>
                <img src={r.restaurant.featured_image || BgBackup} alt="" />
                <div className="restaurants">
                  <h1>{r.restaurant.name}</h1>
                  <p>{r.restaurant.location.address}</p>
                  <span>
                    <p>
                      {r.restaurant.user_rating.aggregate_rating == 0
                        ? "Sem Avaliações"
                        : null}
                    </p>
                    <FontAwesomeIcon
                      className="infos-nota"
                      icon={{ faStar }}
                      style={{
                        display:
                          r.restaurant.user_rating.aggregate_rating >= 1
                            ? "flex"
                            : "none",
                      }}
                    />
                    <FontAwesomeIcon
                      className="infos-nota"
                      icon={faStar}
                      style={{
                        display:
                          r.restaurant.user_rating.aggregate_rating >= 2
                            ? "flex"
                            : "none",
                      }}
                    />
                    <FontAwesomeIcon
                      className="infos-nota"
                      icon={faStar}
                      style={{
                        display:
                          r.restaurant.user_rating.aggregate_rating >= 3
                            ? "flex"
                            : "none",
                      }}
                    />
                    <FontAwesomeIcon
                      className="infos-nota"
                      icon={faStar}
                      style={{
                        display:
                          r.restaurant.user_rating.aggregate_rating >= 4
                            ? "flex"
                            : "none",
                      }}
                    />
                    <FontAwesomeIcon
                      className="infos-nota"
                      icon={faStar}
                      style={{
                        display:
                          r.restaurant.user_rating.aggregate_rating >= 5
                            ? "flex"
                            : "none",
                      }}
                    />
                  </span>
                  <div className="restaurants-infos">
                    <div className="infos_cost">
                      <FontAwesomeIcon
                        className="infos_cost-icon"
                        icon={faUserFriends}
                      />
                      R${r.restaurant.average_cost_for_two}
                    </div>
                    <div className="infos_cuisines">
                      {r.restaurant.cuisines}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Results;
