import { Link } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { appText, rootText, routesText } from './texts';

const HowItWorks = () => {
  return (
    <div>
      <h1>¿Como lo instalo?</h1>
      <div>
        <h3>
          Primero necesitamos instalar React Router en nuestro proyecto. Para ello,
          abrimos una terminal y ejecutamos el siguiente comando:
        </h3>

        <SyntaxHighlighter language="javascript" style={dracula}>
          {`npm install react-router-dom`}
        </SyntaxHighlighter>

        <h3>
          {` Ahora que tenemos React Router instalado, podemos empezar a utilizarlo en
          nuestro proyecto.
          Primero, reemplazamos el <App /> de nuestro archivo de rutas por un
        <RouterProvider /> que recibe un objeto de rutas.`}
        </h3>

        <code>src/index.jsx</code>

        <SyntaxHighlighter showLineNumbers language="jsx" style={dracula}>
          {rootText}
        </SyntaxHighlighter>

        <code>src/routes/index.jsx</code>

        <SyntaxHighlighter showLineNumbers language="jsx" style={dracula}>
          {routesText}
        </SyntaxHighlighter>

        <code>src/routes/home/app.jsx</code>

        <SyntaxHighlighter showLineNumbers language="jsx" style={dracula}>
          {appText}
        </SyntaxHighlighter>


        <Link to="/routes" className="button">
          Siguiente
        </Link>
      </div>
    </div>
  );
}

export default HowItWorks;
