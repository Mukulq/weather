import React, { useEffect, useState } from "react";

function SearchBar(props) {
  const [query, setQuery] = useState("");
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const search = () => {
    if (query !== "") {
      fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=1842c904530a43dd8ca184346241705 &q=${query}&days=6&aqi=no&alerts=no`
      )
        .then((res) => res.json())
        .then((data) => {
          props.setResult(data);
        });
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        onChange={handleInputChange}
        placeholder="Type your city name"
      />
      <button type="button" onClick={search}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
