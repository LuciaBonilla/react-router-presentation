import { Outlet } from "react-router-dom";

const Nested1 = () => {

  return (
    <div>
      <h3>Ejemplo 1</h3>

      <Outlet />
    </div>
  );
}

export default Nested1;
