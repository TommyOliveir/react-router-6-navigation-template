
import { Link, Outlet } from "react-router-dom";

export default function HostLayout() {
  return (
    <>
      <nav
        className="host-nav"
        style={{ display: "flex", gap: "4px" }}
      >
        <Link to="/host">Dashboard</Link>
        <Link to="/host/income">Income</Link>
        <Link to="/host/reviews">Reviews</Link>
      </nav>
      <Outlet />
    </>
  );
}
