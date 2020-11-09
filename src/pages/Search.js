import React from "react";
import SearchBar from "../components/SearchBar/SearchBar";

import LogoWhite from "../img/logo_white.jpg";

function Search() {
  return (
    <>
      <div className="search-main">
        <div className="search-logo">
          <img src={LogoWhite} alt="" />
        </div>
        <div className="search-center">
          <div className="search-busc">
            <div className="search-busc_text">
              <h1>
                Descubra os melhores <br /> restaurantes em sua cidade
              </h1>
            </div>
            <SearchBar />
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
