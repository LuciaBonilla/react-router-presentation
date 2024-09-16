import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { simpleRoutes } from "../texts";
import { Link } from "react-router-dom";

const SimpleRoutes = () => {
  return (
    <div>
      <p>Las rutas son la forma en que se define la navegación en una aplicación de React Router. Las rutas se definen como un array de objetos, donde cada objeto representa una ruta. Cada objeto tiene dos propiedades: <code>path</code> y <code>element</code>.</p>
      <SyntaxHighlighter showLineNumbers language="json" style={dracula}>
        {simpleRoutes}
      </SyntaxHighlighter>

      <Link to='dinamic/1'>
      Siguiente
      </Link>
    </div>
  );
}

export default SimpleRoutes;
