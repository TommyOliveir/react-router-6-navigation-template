import React from "react";
import { Link, useSearchParams, useLoaderData } from "react-router-dom";
import { getVans } from "../../../api";

export function loader() {
  return getVans();
}

export default function Vans() {
  const vans = useLoaderData()
  // const [vans, setVans] = React.useState([]);
  const [searchParams] = useSearchParams();
  // const [loading, setLoading] = React.useState(false);
  // const [error, setError] = React.useState(null);

  const typeFilter = searchParams.get("filter");
  console.log(typeFilter);
  const [selectId, setSelectId] = React.useState(null);
  console.log("id", typeof selectId);
  // const number =  1
  const filterbyId = "?filter=" + selectId;

  // React.useEffect(() => {
  //   async function loadVans() {
  //     setLoading(true);
  //     try {
  //       const data = await getVans();
  //       setVans(data);
  //     } catch (err) {
  //       setError(err);
  //     } finally {
  //       setTimeout(() => {
  //         setLoading(false);
  //       }, 1000);
  //     }
  //   }

  //   loadVans();
  // }, []);

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

  // if (loading) {
  //   return <h1 aria-live="polite">Loading...</h1>;
  // }

  // if (error) {
  //   return <h1 aria-live="assertive">There was an error: {error.message}</h1>;
  // }

  return (
    <div className="van-list" style={{ padding: "2em" }}>
      <div className="van-list-description">
        <h2>Introduction</h2>
        <p>
          In this section, we demonstrate the Happy Path and Sad Path scenarios
          for retrieving API data. Please review the provided code for the API
          implementation. and api.js
        </p>
        <h2>Data Layer API</h2>
        <p>we integrated Loader, useloaderData</p>
        <h2>Benefits of using Loader</h2>
        <p>It will fetch the data before rendering the component while using useEffect renders the component then load the api data</p>
      </div>
      <div
        className="van-list-body"
        style={{ padding: "20px", border: "solid 2px red", margin: "2em" }}
      >
        <h2>filter by ID</h2>
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
    </div>
  );
}
