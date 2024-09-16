import { useState } from "react";
import { Link } from "react-router-dom";
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { useSearchParams } from "react-router-dom";

import { routestext } from "../texts";

const UseSearchParams = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [inputValue, setInputValue] = useState(searchParams.get('search') || '');

    const handleChange = (e) => {
        setInputValue(e.target.value);
        setSearchParams({ search: e.target.value });
    }

    return (
        <div>
            <h1>useSearchParams</h1>
            <p>El hook <code>useSearchParams</code> se utiliza para obtener los parámetros de la URL.</p>
            <h3>Ejemplo Basico</h3>

            <input type="text" value={inputValue} onChange={handleChange} />

            <h2>Los parametros de la URL son:</h2>
            <p>{searchParams.get('search')}</p>

            <SyntaxHighlighter showLineNumbers language="jsx" style={dracula}>
                {routestext}
            </SyntaxHighlighter>
            <Link to='/thanks' className = "button">
                Siguiente
            </Link>
        </div>
    );
}

export default UseSearchParams;
