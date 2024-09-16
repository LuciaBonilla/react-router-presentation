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