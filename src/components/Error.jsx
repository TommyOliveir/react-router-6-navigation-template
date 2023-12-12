import { useRouteError } from "react-router-dom"

function Error() {
    const error = useRouteError()
  return (
    <div>
      <h1>Error: {error.message}</h1>
      <p> {error.status}</p>
    </div>
  );
}

export default Error