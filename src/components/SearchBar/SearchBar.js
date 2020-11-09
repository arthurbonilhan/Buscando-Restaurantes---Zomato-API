import React, { Component } from "react";
import { Link } from "react-router-dom";

import instance from "../../api/axios";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [],
      searchTerm: this.props.value || "",
      showSuggestions: false,
      cityId: 0,
    };
  }

  onClickSugestion = (name) => {
    this.setState({ searchTerm: name, showSuggestions: false });
  };

  onSearchInputChange = (event) => {
    this.setState({ searchTerm: event.target.value, showSuggestions: true });

    setTimeout(() => {
      this.search();
    }, 1000);
  };

  search = () => {
    if (this.state.searchTerm) {
      instance
        .get("/cities", {
          params: {
            q: this.state.searchTerm,
            count: 1,
          },
        })
        .then((response) => {
          const suggestions = response.data.location_suggestions;
          this.setState({
            suggestions: suggestions,
            cityId: !suggestions[0] == undefined ? suggestions[0].id : suggestions[0].id,
          });
        });
    }
  };

  render() {
    return (
      <div id="search-bar">
        <div className="search-input">
          <input
            type="text"
            onChange={(event) => this.onSearchInputChange(event)}
            placeholder="Digite sua cidade"
            value={this.state.searchTerm}
            key={this.state.searchTerm.id}
          />
          <Link
            className="enter"
            to={`/resultados/${this.state.cityId}/${this.state.searchTerm}`}
          >
            Busca
          </Link>
          {this.state.suggestions.map(
            (r) =>
              this.state.showSuggestions && (
                <button
                  className="busc"
                  key={r.id}
                  onClick={() => this.onClickSugestion(r.name)}
                >
                  {r.name}
                </button>
              )
          )}
        </div>
      </div>
    );
  }
}

export default SearchBar;
