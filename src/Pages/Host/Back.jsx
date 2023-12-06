import { Link } from "react-router-dom";
//back to relative path not to route
function Back() {
  return (
    <>
      <div>Back</div>
      <Link to='..' relative="path">Back relative path(relative prop)</Link>
    </>
  );
}

export default Back;
