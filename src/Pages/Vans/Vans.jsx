import React from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function Vans() {
  const [vans, setVans] = React.useState([]);
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setVans(data));
  }, []);

  const [searchParams] = useSearchParams();
  const typeFilter = searchParams.get("filter");
console.log(typeof typeFilter)
    
  const filterVansElements = typeFilter
    ? vans.filter((user) => user.id === Number(typeFilter))
    : vans;
  
  const vanElements = filterVansElements.map((van) => (
    <div key={van.id} className="van-tile">
      <Link to={`/vans/${van.id}`}>
        <div className="van-info">
          <h3>{van.name}</h3>
        </div>
      </Link>
    </div>
  ));

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list">{vanElements}</div>
    </div>
  );
}
