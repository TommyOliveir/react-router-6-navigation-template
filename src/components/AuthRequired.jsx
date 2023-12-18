import { Outlet, Navigate } from "react-router-dom";

function AuthRequired() {
  const isLoggedIn = false;
  if (!isLoggedIn) {
    return (
      <Navigate to="/login" state={{ message: "You must log in first" }} />
    );
  }
  return <Outlet />;
}

export default AuthRequired;
