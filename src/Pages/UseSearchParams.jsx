// import React from 'react'
import { useSearchParams } from 'react-router-dom';


const swCharacters = [
  { name: "Luke Skywalker", type: "Jedi" },
  { name: "Darth Vader", type: "Sith" },
  { name: "Emperor Palpatine", type: "Sith" },
  { name: "Yoda", type: "Jedi" },
];


 
function UseSearchParams() {
    const [searchParams, setSearchParams] = useSearchParams()
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
  return (
    <div>
      UseSearchParams
      <div style={{ display: "flex", gap: 5 }}>
        {/* you can use link too and SAMPLES below
        {/* <Link to="?type=jedi">Jedi</Link> 
        <Link to="?type=sith">Sith</Link>
        <Link to=".">Clear</Link> */}
        {/* <button onClick={() => setSearchParams("?type=jedi")}>Jedi</button>
        <button onClick={() => setSearchParams("type=jedi")}>Jedi</button>
        <button onClick={() => setSearchParams("?type=sith")}>Sith</button>
        <button onClick={() => setSearchParams("")}>Clear</button> */}
        <button onClick={() => setSearchParams({ type: "jedi" })}>Jedi</button>
        <button onClick={() => setSearchParams({ type: "sith" })}>Sith</button>
        <button onClick={() => setSearchParams({})}>Clear</button>
      </div>
      <hr />
      {charEls}
    </div>
  );
}

export default UseSearchParams