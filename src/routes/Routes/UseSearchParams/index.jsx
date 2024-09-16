import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { routestext } from "../texts";
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';



const useSearchParams = () => {
    return (
        <div>
            <h1>useSearchParams</h1>
            <p>El hook <code>useSearchParams</code> se utiliza para obtener los parámetros de la URL.</p>
            <h3>Ejemplo Basico</h3>
            <SyntaxHighlighter showLineNumbers language="jsx" style={dracula}>
                {routestext}
            </SyntaxHighlighter>
            <Link to='/start' className = "button"> 
                Siguiente?
            </Link>
        </div>
    );



}

export default useSearchParams;