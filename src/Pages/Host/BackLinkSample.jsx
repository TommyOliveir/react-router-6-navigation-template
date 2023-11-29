import { Link, Outlet } from "react-router-dom";

function BackLinkSample() {
  return (
    <div>
    
      <div>
        <Link to='back'>
          sample nested link
        </Link>
        <Outlet/>
      </div>
    </div>
  );
}

export default BackLinkSample;
