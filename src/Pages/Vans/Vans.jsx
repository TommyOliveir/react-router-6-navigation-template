import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getVans } from "../../../api";

export default function Vans() {
  const [vans, setVans] = React.useState([]);
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const typeFilter = searchParams.get("filter");
  console.log(typeFilter);
  const [selectId, setSelectId] = React.useState(null);
  console.log("id", typeof selectId);
  // const number =  1
  const filterbyId = "?filter=" + selectId;

  React.useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getVans();
        setVans(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    loadVans();
  }, []);

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

   if (loading) {
     return <h1 aria-live="polite">Loading...</h1>;
   }

   if (error) {
     return <h1 aria-live="assertive">There was an error: {error.message}</h1>;
   }


  return (
    <div className="van-list-container">
      <h1>Happy Path and Sad Path sample of getting Api - check code Api</h1>
      <h4>filter by ID</h4>
      <select onChange={handleSelectChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>

      <Link to={filterbyId}>
        <button>click to find by ID</button>
      </Link>
      <div className="van-list">{vanElements}</div>
    </div>
  );
}
