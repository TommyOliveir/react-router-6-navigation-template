import React from "react";
import { useParams, NavLink, Outlet } from "react-router-dom";

export default function SampleListDetail() {
  const params = useParams();
  const [list, setList] = React.useState(null);

  React.useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then((res) => res.json())
      .then((data) => setList(data));
  }, [params.id]);

    const activeStyles = {
      fontWeight: "bold",
      textDecoration: "underline",
      color: "#c70b0b",
    };

  return (
    <div className="list-detail-container">
      {list ? (
        <div className="list-detail">
          <h2>{list.username}</h2>

          <p>{list.id}</p>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}

      <nav className="host-van-detail-nav" style={{display: "flex", gap: 10}}>
        <NavLink
          to="."
          end
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Details
        </NavLink>
        <NavLink
          to="pricing"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Pricing
        </NavLink>
        <NavLink
          to="photos"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Photos
        </NavLink>
      </nav>
      <Outlet context={{list}} />
    </div>
  );
}
