export const simpleRoutes = `[
 {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/howitworks",
    element: <HowItWorks />,
  },
]`

export const definitionOfDinamicRoutes =
  `[
 {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/howitworks",
    element: <HowItWorks />,
  },
  {
    path: "dinamic/:id",
    element: <DinamicRoutes /> // /dinamic/1
  }
]`
export const dinamicRoutes = `
import { useParams } from "react-router-dom";

const DinamicRoutes = () => {
  const params = useParams();

  return (
    <div>
      <h1>Parametro id = {params.id}</h1>
    </div>
  );
}

export default DinamicRoutes;`

export const definitionOfNestedRoutes =
`{
    path: "/routes",
    element: <RoutesComponent />,
    children: [
      {
        path: "",
        element: <SimpleRoutes />
      },
      {
        path: "dinamic/:id",
        element: <DinamicRoutes />
      },
      {
        path: "nested",
        element: <NestedRoutes />,
        children: [
          {
            path: "",
            element: <FirstNestedView />
          },
          {
            path: "example1",
            element: <Nested1 />,
            children: [
              {
                path: "example2",
                element: <div>Ejemplo 2</div>
              }
            ]
          },
        ]
      },
    ]
  },`

export const definitionOfComponents =
`import { Link, Outlet } from "react-router-dom";

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
      <Outlet /> // Renderiza el componente que coincida con la ruta
    </div>
  );
}

export default NestedRoutes;
`

export const definitionOfPrivateRoute =
`{
    path: "/",
    element: <PrivateRoute />,
    children: [
      {
        path: "",
        element: <App />,
      },
    ]
  },`

  export const definitionOfPrivateRouteComponent =
  `import { Navigate, Outlet } from "react-router-dom"

const PrivateRoute = () => {
  const user = JSON.parse(localStorage.getItem('user'))

  return user ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateRoute`

export const route=

`import { useParams } from "react-router-dom";

function UserProfile() {
  // Extraemos el parámetro dinámico "id" de la URL
  const { id } = useParams();

  return (
    <div>
      <h2>Perfil del usuario</h2>
      <p>ID del usuario: {id}</p>
    </div>
  );
}

export default UserProfile;`

export const routestext=


`import { useSearchParams } from "react-router-dom";

function SearchPage() {
  // Extraemos los parámetros de búsqueda de la URL
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

  const handleSearch = (e) => {
    e.preventDefault();
    const newQuery = e.target.elements.query.value;
    setSearchParams({ query: newQuery });
  };

  return (
    <div>
      <h2>Página de búsqueda</h2>
      <form onSubmit={handleSearch}>
        <input type="text" name="query" defaultValue={query || ""} />
        <button type="submit">Buscar</button>
      </form>
      {query && <p>Resultados de la búsqueda para: {query}</p>}
    </div>
  );
}

export default SearchPage;`
