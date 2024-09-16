import { Link, useLocation } from 'react-router-dom';
import { useLocationCode } from '../texts';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const UseLocationExplanation = () => {
    const location = useLocation(); // Hook useLocation inicializado

    return (
        <div>
            <h3>useLocation()</h3>
            <p>
                El hook <code>useLocation()</code> proporciona acceso al objeto de ubicación actual de React Router.
                Esto permite saber en qué ruta el usuario esta actualmente, y obtener detalles como <code>pathname</code>,
                <code>search</code> (parámetros de consulta), y <code>state</code>.
            </p>

            <p>
                La propiedad más común que se usa es <code>pathname</code>, que indica la ruta actual.
                En este momento, estás en: <strong>{location.pathname}</strong>
            </p>

            <code>src/routes/Routes/navigationTypes/useLocation/index.jsx</code>
            <SyntaxHighlighter showLineNumbers language="jsx" style={dracula}>
                {useLocationCode}
            </SyntaxHighlighter>

            {/* Link para avanzar a la siguiente página */}
            <Link to='/useParams' className="button">
                Siguiente
            </Link>
        </div>
    );
}

export default UseLocationExplanation;
