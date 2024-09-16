import { Link, useNavigate } from 'react-router-dom';
import { useNavigateCode } from '../texts';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const UseNavigateExplanation = () => {

    const navigate = useNavigate(); // Se incializa el Hook useNavigate

    // Función que ejecuta la navegación
    const goToAbout = () => {
        navigate('/about');  // Se Navega hacia la ruta /about
    };

    return (
        <div>
            <h3>useNavigate()</h3>
            <p>
                <code>useNavigate()</code> es un hook proporcionado por React Router que te permite
                navegar entre rutas de forma programática. A diferencia de <code>&lt;Link&gt;</code>,
                que se usa de manera declarativa en el JSX, <code>useNavigate()</code> te permite
                realizar la navegación en respuesta a eventos o lógica de tu aplicación.
            </p>

            <code>src/routes/Routes/navigationTypes/useNavigate/index.jsx</code>
            <SyntaxHighlighter showLineNumbers language="jsx" style={dracula}>
                {useNavigateCode}
            </SyntaxHighlighter>

            <button onClick={goToAbout} className="button" style={{ display: 'inline-block', marginRight: '10px' }}>
                Ir a la página About
            </button>

            <Link to='/navigationTypes/useLocation' className="button" style={{ display: 'inline-block' }}>
                Siguiente
            </Link>

        </div>
    );
}

export default UseNavigateExplanation;

