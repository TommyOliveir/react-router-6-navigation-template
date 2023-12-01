import { useOutletContext } from "react-router-dom"



function Details() {
        const { list } = useOutletContext();
  return (
    <div>
      Details
      <h2>name: {list.name} </h2>
      <p className="note">this is from useOutletContext</p>
    </div>
  );
}

export default Details