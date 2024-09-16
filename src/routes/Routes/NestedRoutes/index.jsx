import { Link, Outlet } from "react-router-dom";

import './index.css';

const NestedRoutes = () => {
  return (
    <div>
      <div className='buttons'>
        <Link to='' className='button'>
          volver al inicio
        </Link>

        <Link to='example1' className='button'>
          ver ejemplo 1
        </Link>

        <Link to='example1/example2' className='button'>
          ver ejemplo 2
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

export default NestedRoutes;
