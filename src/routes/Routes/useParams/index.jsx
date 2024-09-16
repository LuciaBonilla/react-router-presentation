import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { route, routestext } from '../texts';





const UseParams = () => {
    const params = useParams();

    return (
        <div>
            <h1>useParams()</h1>
            <p>El hook <code>useParams</code> Se utiliza para obtener parámetros dinámicos de la URL, como en rutas tipo /user/:id.</p>
            <h3>Ejemplo Basico</h3>
            <SyntaxHighlighter showLineNumbers language="jsx" style={dracula}>
                {route}
            </SyntaxHighlighter>


            <Link to='/useSearchParams' className="button"> 
                Siguiente
            </Link>
        </div>
    );
}

export default UseParams;