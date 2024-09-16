import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { navigate } from "../texts";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const NavigateExplanation = () => {
    const [inputValue, setInputValue] = useState('');

    return (
        <div>
            <h2>Navigate</h2>
            <p>
                El elemento <code>&lt;Navigate&gt;</code> simplemente cambia la ruta actual al ser renderizado.
            </p>
            <h3>Dirección actual: /navigationTypes/navigate/{inputValue}</h3>

            <input 
                id="inputRouteToNavigate" 
                type="text" 
                placeholder="Dirección deseada" 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} 
                className="input" 
            />
            <Navigate to={`/navigationTypes/navigate/${inputValue}`} replace={true} />

            <br />
            <code>src/routes/Routes/DynamicRoutes/index.jsx</code>
            <SyntaxHighlighter showLineNumbers language="jsx" style={dracula}>
                {navigate}
            </SyntaxHighlighter>

            <Link to='/navigationTypes/link' className="button">
                Siguiente
            </Link>
        </div>
    );
}

export default NavigateExplanation;