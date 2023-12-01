import React from "react";
import { Link } from "react-router-dom";

export default function SampleList() {
  const [list, setList] = React.useState([]);
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setList(data));
  }, []);

  const vanElements = list.map((item) => (
    <div key={item.id} className="item-tile">
      <Link to={`/host/list/${item.id}`}>
        <div className="item-info">
          <h3>{item.name}</h3>
        </div>
      </Link>
    </div>
  ));

  return (
    <div className="van-list-container">
      <h1>Explore our List detail sample</h1>
      <div className="van-list">{vanElements}</div>
    </div>
  );
}
