import { Link, Outlet } from "react-router-dom";

function ProtectedRouteWithLoaders() {
  return (
    <>
      <div>ProtectedRouteWithLoaders</div>
      <Link to="nestedProtectedWithLoaders">
        nestedProtectedRouteWithLoaders
      </Link>
      <Outlet/>
    </>
  );
}

export default ProtectedRouteWithLoaders;
