import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { definitionOfDinamicRoutes, dinamicRoutes } from "../texts";
import { Link, useParams } from "react-router-dom";

const DinamicRoutes = () => {
  const params = useParams();

  return (
    <div>
      <p>Las rutas dinamicas son rutas que contienen parametros. Estos parametros se definen en la ruta con dos puntos y un nombre. Por ejemplo, la ruta <code>/dinamic/:id</code> tiene un parametro llamado <code>id</code>.</p>
      <h1>Parametro id = {params.id}</h1>

      <h3>Codigo de la ruta dinamica</h3>
      <SyntaxHighlighter showLineNumbers language="jsx" style={dracula}>
        {definitionOfDinamicRoutes}
      </SyntaxHighlighter>

      <code>src/routes/Routes/DynamicRoutes/index.jsx</code>
      <SyntaxHighlighter showLineNumbers language="jsx" style={dracula}>
        {dinamicRoutes}
      </SyntaxHighlighter>

      <Link to='/routes/nested' className="button">
        Siguiente
      </Link>
    </div>
  );
}

export default DinamicRoutes;
