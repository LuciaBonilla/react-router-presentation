import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { definitionOfPrivateRoute, definitionOfPrivateRouteComponent } from "../texts";
import { Link } from 'react-router-dom';

const PrivateRouteExplanation = () => {
  return (
    <div>
      <h1>Las rutas privadas son rutas que solo se pueden acceder si se cumple una condición por ejemplo, el usuario esta logueado</h1>
      <h2>Estas rutas se manejan utilizando rutas anidadas, a continuación un ejemplo</h2>

      <code>src/routes/index.jsx</code>
      <SyntaxHighlighter showLineNumbers language="jsx" style={dracula}>
        {definitionOfPrivateRoute}
      </SyntaxHighlighter>

      <code>src/routes/Routes/PrivateRoutes/index.jsx</code>
      <SyntaxHighlighter showLineNumbers language="jsx" style={dracula}>
        {definitionOfPrivateRouteComponent}
      </SyntaxHighlighter>

      <Link to='/navigationTypes/navigate/1' className="button">
        Siguiente
      </Link>
    </div>
  );
}

export default PrivateRouteExplanation;
