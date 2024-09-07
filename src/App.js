import React, { useState } from "react";
import SearchBar from "./Components/SearchBar";
import SearchResults from "./Components/SearchResults";

function App() {
  const currentDate = new Date();
  const [result, setResult] = useState([]);
  console.log(result);
  return (
    <div className="main">
      <SearchBar result={result} setResult={setResult} />
      <SearchResults data={result} />
    </div>
  );
}
export default App;
