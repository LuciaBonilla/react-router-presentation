import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { definitionOfComponents, definitionOfNestedRoutes } from "../../texts";
import { Link } from 'react-router-dom';

const firstNestedView = () => (
  <div>
    <h1> Las rutas anidadas son una forma de anidar rutas dentro de otras rutas. </h1>

    <code>src/routes/index.jsx</code>
    <SyntaxHighlighter showLineNumbers language="jsx" style={dracula}>
      {definitionOfNestedRoutes}
    </SyntaxHighlighter>

    <code>src/routes/Routes/NestedRoutes/index.jsx</code>
    <SyntaxHighlighter showLineNumbers language="jsx" style={dracula}>
      {definitionOfComponents}
    </SyntaxHighlighter>

    <Link to='/routes/private' className="button">
      Siguiente
    </Link>
  </div>
);

export default firstNestedView;
