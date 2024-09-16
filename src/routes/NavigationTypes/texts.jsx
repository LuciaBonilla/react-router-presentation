export const navigate = `
<input
  id="inputRouteToNavigate"
  type="text"
  placeholder="Enter some text"
  value={inputValue}
  onChange={(e) => setInputValue(e.target.value)}
/>
<Navigate to={\`/navigationTypes/navigate/\${inputValue}\`} replace={true} />
`;

export const link = `<Link to='/navigationTypes/link/1' className="button">
    Dirección 1
</Link>

<Link to='/navigationTypes/link/2' className="button">
    Dirección 2
</Link>

<Link to='/navigationTypes/link/3' className="button">
    Dirección 3
</Link>`

export const navLink = `
<NavLink
  to='/navigationTypes/navLink/1'
  className={({ isActive }) => \`\${isActive ? 'bigButton' : 'button'}\`}
>
  Dirección 1
</NavLink>

<NavLink
  to='/navigationTypes/navLink/2'
  className={({ isActive }) => \`\${isActive ? 'bigButton' : 'button'}\`}
>
  Dirección 2
</NavLink>

<NavLink
  to='/navigationTypes/navLink/3'
  className={({ isActive }) => \`\${isActive ? 'bigButton' : 'button'}\`}
>
  Dirección 3
</NavLink>`;

export const useNavigateCode = `
const UseNavigateExplanation = () => {

    const navigate = useNavigate(); // Hook useNavigate inicializado

    // Función que ejecuta la navegación
    const goToAbout = () => {
        navigate('/about');  // Navega a la ruta /about
    };

     return (
        <div>
    {/* Botón que navega a la página About */}
            <button onClick={goToAbout} className="button">
                Ir a la página About
            </button>
        </div>
    );
}
`;

export const useLocationCode = `
const UseLocationExplanation = () => {
    const location = useLocation(); // Se inicializa el Hook useLocation

    return (
        <div>
          <p>
            La propiedad más común que se usa es <code>pathname</code>, que indica la ruta actual.
            En este momento, estás en: <strong>{location.pathname}</strong>
          </p>
        </div>
    );
}
`;
