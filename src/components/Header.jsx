import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "red",
  };
  return (
    <header className="header">
      <Link className="site-logo" to="/">
        Ranger
      </Link>
      <nav style={{ display: "flex", gap: "8px" }}>
        <NavLink
          to="."
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Home
        </NavLink>
        <NavLink
          to="/host"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Host
        </NavLink>
        <NavLink
          to="/about"
          //   className={({ isActive }) => (isActive ? "my-link" : null)} see css
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          About
        </NavLink>

        <NavLink
          to="/vans"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          VansAnd-useSearchParams
        </NavLink>

        <NavLink
          to="useSearchParams"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          useSearchParams
        </NavLink>
      </nav>
    </header>
  );
}
