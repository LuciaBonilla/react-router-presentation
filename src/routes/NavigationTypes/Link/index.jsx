import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { link } from "../texts";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const LinkExplanation = () => {

    return (
        <div>
            <h2>Link</h2>
            <p>El elemento <code>&lt;Link&gt;</code> redirecciona al ser clickeado</p>

            <div className="buttons">
                <Link to='/navigationTypes/link/1' className="button">
                    Dirección 1
                </Link>

                <Link to='/navigationTypes/link/2' className="button">
                    Dirección 2
                </Link>

                <Link to='/navigationTypes/link/3' className="button">
                    Dirección 3
                </Link>
            </div>

            <br></br>
            <code>src/routes/Routes/navigationTypes/link/index.jsx</code>
            <SyntaxHighlighter showLineNumbers language="jsx" style={dracula}>
                {link}
            </SyntaxHighlighter>

            <Link to='/navigationTypes/navLink' className="button">
                Siguiente
            </Link>
        </div>
    );
}

export default LinkExplanation;
