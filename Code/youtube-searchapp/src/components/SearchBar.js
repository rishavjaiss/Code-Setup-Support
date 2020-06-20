import React, { useState } from "react";
import "../styles/SearchBar.css";

function SearchBar(props) {
  const [searchQuery, setSearchQuery] = useState("");
  //   const apiKey = props.apiKey;
  const updateSearchResults = props.updateSearchResults;
  const url =
    "https://www.googleapis.com/youtube/v3/search/?key=AIzaSyDuMmyEyZkQIE0dDLl6XBdrSQqUyNPrmKI&q=" +
    searchQuery +
    "&part=snippet,id&order=date&maxResults=10";

  let onUpdateSearchInput = (event) => {
    setSearchQuery(event.target.value);
  };

  let getSearchResults = (event) => {
    if (searchQuery) {
      event.preventDefault();
      fetch(url)
        .then((response) => response.json())
        .then((searchResults) => {
          updateSearchResults(searchResults.items);
        })
        .catch((error) => {
          alert("An error occured while fetching data.");
        });
    }
  };

  return (
    <form id="search-bar-form" onSubmit={getSearchResults}>
      <div className="input-group">
        <input
          className="form-control col-md-5"
          placeholder="Search"
          onChange={onUpdateSearchInput}
          required
        />
        &nbsp;&nbsp;
        <button type="submit" className="btn btn-outline-danger">
          SEARCH
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
