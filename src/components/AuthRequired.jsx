import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../loggedInContext";

function AuthRequired() {
  const {isLoggedIn} = useAuth();
  // const isLoggedIn = false;
  if (!isLoggedIn) {
    return (
      <Navigate to="/login" state={{ message: "You must log in first" }} />
    );
  }
  return <Outlet />;
}

export default AuthRequired;
