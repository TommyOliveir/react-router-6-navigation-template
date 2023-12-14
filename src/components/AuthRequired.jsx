import { Outlet, Navigate } from "react-router-dom";

function AuthRequired() {
  const isLoggedIn = false;
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
}

export default AuthRequired;
