// import React from 'react'
import { Link, useSearchParams } from "react-router-dom";

const swCharacters = [
  { name: "Luke Skywalker", type: "Jedi" },
  { name: "Darth Vader", type: "Sith" },
  { name: "Emperor Palpatine", type: "Sith" },
  { name: "Yoda", type: "Jedi" },
];

function UseSearchParams() {
  const [searchParams, setSearchParams] = useSearchParams();
  //    const [searchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  


  const displayedCharacters = typeFilter
    ? swCharacters.filter((char) => char.type.toLowerCase() === typeFilter)
    : swCharacters;

  const charEls = displayedCharacters.map((char) => (
    <div key={char.name}>
      <h3
        style={{ color: char.type.toLowerCase() === "jedi" ? "blue" : "red" }}
      >
        Name: {char.name}
      </h3>
      <p>Type: {char.type}</p>
      <hr />
    </div>
  ));

  function genNewSearchParamString(key, value) {
    const sp = new URLSearchParams(searchParams);
    if (value === null) {
      sp.delete(key);
    } else {
      sp.set(key, value);
    }
    return `?${sp.toString()}`;
  }

    
  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  return (
    <div>
      UseSearchParams
      <div>
        {/* //use when there is a prior query and dont want to overlap but add another query parameter */}
        <p className="note">
          {" "}
          use when there is a prior query and dont want to overlap but add
          another query parameter
        </p>
        <Link to={genNewSearchParamString("type", "jedi")}>Jedi</Link>
        <Link to={genNewSearchParamString("type", "sith")}>Sith</Link>
        <Link to={genNewSearchParamString("type", null)}>Clear</Link>
      </div>
      <div>
        {/* //use when there is a prior query and dont want to overlap but add another query parameter setter solution  */}
        <p className="note">
          {" "}
          use when there is a prior query and dont want to overlap but add
          another query parameter (setter solution{" "}
          <span style={{ fontWeight: "bold" }}>setSearchParams </span>)
        </p>
        <button onClick={() => handleFilterChange("type", "jedi")}>Jedi</button>
        <button onClick={() => handleFilterChange("type", "sith")}>Sith</button>
        <button onClick={() => handleFilterChange("type", null)}>Clear</button>
      </div>
      <p className="note">
        {" "}
        normal button - change color when query parameter change{" "}
      </p>
      <div style={{ display: "flex", gap: 5 }}>
        {/* you can use link too and SAMPLES below
        {/* <Link to="?type=jedi">Jedi</Link> 
        <Link to="?type=sith">Sith</Link>
        <Link to=".">Clear</Link> */}
        {/* <button onClick={() => setSearchParams("?type=jedi")}>Jedi</button>
        <button onClick={() => setSearchParams("type=jedi")}>Jedi</button>
        <button onClick={() => setSearchParams("?type=sith")}>Sith</button>
        <button onClick={() => setSearchParams("")}>Clear</button> */}

        <button
          className={`jedi ${typeFilter === "jedi" ? "selected" : ""}`}
          onClick={() => setSearchParams({ type: "jedi" })}
        >
          Jedi
        </button>
        <button
          className={`sith ${typeFilter === "sith" ? "selected" : ""}`}
          onClick={() => setSearchParams({ type: "sith" })}
        >
          Sith
        </button>
        <button onClick={() => setSearchParams({})}>Clear</button>
      </div>
      <hr />
      {charEls}
      {/* search: searchParams.toString() will get query param without ?*/}
      <Link to={"linkState"} state={{ search: `?${searchParams.toString()}` }}>
        LINK STATE/HISTORY STATE - go to other link without losing filter
      </Link>
      <p>check Link prop named state</p>
    </div>
  );
}

export default UseSearchParams;
