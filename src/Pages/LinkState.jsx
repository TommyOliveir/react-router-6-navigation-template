import { Link, useLocation } from "react-router-dom";

function LinkState() {
  const location = useLocation();
  console.log(location);

  const search = location.state?.search || "";

  return (
    <div>
      <Link to={`..${search}`} relative="path">
        back
      </Link>
      <p className="note">
        {" "}
        back without losing filter -{" "}
        <span style={{ fontWeight: "bold" }}>
          uselocation and LINK STATE
        </span>{" "}
        is use here
      </p>
      <div>
        {" "}
        <h1>LinkState/history State</h1>
      </div>
    </div>
  );
}

export default LinkState;
