import { NavLink, Link } from "react-router-dom";
import { navLink } from "../texts";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const NavLinkExplanation = () => {

    return (
        <div>
            <h2>NavLink</h2>
            <p>El elemento <code>&lt;NavLink&gt;</code>, al igual que <code>&lt;Link&gt;</code> redirecciona al ser clickeado, sin embargo, también es capaz de almacenar información acerca del estado de la página.</p>

            <div className="buttons">
                <NavLink
                    to='/navigationTypes/navLink/1'
                    className={({ isActive }) => `${isActive ? 'bigButton' : 'button'}`}
                >
                    Dirección 1
                </NavLink>

                <NavLink
                    to='/navigationTypes/navLink/2'
                    className={({ isActive }) => `${isActive ? 'bigButton' : 'button'}`}
                >
                    Dirección 2
                </NavLink>

                <NavLink
                    to='/navigationTypes/navLink/3'
                    className={({ isActive }) => `${isActive ? 'bigButton' : 'button'}`}
                >
                    Dirección 3
                </NavLink>
            </div>


            <br></br>
            <code>src/routes/Routes/navigationTypes/navLink/index.jsx</code>
            <SyntaxHighlighter showLineNumbers language="jsx" style={dracula}>
                {navLink}
            </SyntaxHighlighter>

            <Link to='/navigationTypes/useNavigate' className="button">
                Siguiente
            </Link>
        </div>
    );
}

export default NavLinkExplanation;
