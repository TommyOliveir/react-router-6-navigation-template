import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getVans } from "../../../api";

export default function Vans() {
  const [vans, setVans] = React.useState([]);

  React.useEffect(() => {
    async function loadVans() {
      const data = await getVans();
      setVans(data);
    }

    loadVans();
  }, []);

  const [searchParams] = useSearchParams();
  const typeFilter = searchParams.get("filter");
  console.log(typeof typeFilter);
  const [selectId, setSelectId] = React.useState(null);
  console.log("id", typeof selectId);
  // const number =  1
  const filterbyId = "?filter=" + selectId;

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

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectId(selectedValue);
  };

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <select onChange={handleSelectChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>

      <Link to={filterbyId}>find by ID</Link>
      <div className="van-list">{vanElements}</div>
    </div>
  );
}
