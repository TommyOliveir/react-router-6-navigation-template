
import {  useLoaderData } from "react-router-dom";
import { getVans } from "../../../api";

export function loader({ params }) {
  console.log(params);
  return getVans(params.id);
}

export default function VanDetail() {
  // const params = useParams();
  // const [van, setVan] = React.useState(null);
    const van = useLoaderData();

  // React.useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
  //     .then((res) => res.json())
  //     .then((data) => setVan(data));
  // }, [params.id]);

  return (
    <div className="van-detail-container">
      {van ? (
        <div className="van-detail">
         
          <h2>{van.username}</h2>

          <p>{van.id}</p>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
