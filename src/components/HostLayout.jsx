import {  NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "red",
  };
  return (
    <>
      <nav className="host-nav" style={{ display: "flex", gap: "8px" }}>
        <NavLink
          // to="/host"
          to="." //. link to current route
          //end props - stop the active route host when route is in other route - it duplicates if no end props
          //try to comment end prop and check active
          end
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Dashboard
        </NavLink>
        <NavLink
          // to="/host/income"
          to="income" // relative link
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Income
        </NavLink>
        <NavLink
          to="reviews"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Reviews
        </NavLink>
        <NavLink
          to="backlinksample"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          BackLinkSample
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
