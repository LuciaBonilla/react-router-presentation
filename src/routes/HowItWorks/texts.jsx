export const rootText = `import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";

import { BrowserRouter } from './routes/index.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={BrowserRouter} />
  </StrictMode>,
)
`

export const routesText = `import { createBrowserRouter } from "react-router-dom";

import App from './Home/App.jsx'
import About from './About/index.jsx';

export const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />
  }
])`

export const appText = `
import reactLogo from '../../assets/react.svg'
import { Link } from 'react-router-dom'

import './App.css'

function App() {
  return (
    <div>
      <div className='home'>
        <div className='home--inline'>
          <img src={reactLogo} alt="react logo" className="logo" />
          <h1 className='title'>React Router</h1>
        </div>
        <Link to='/about' className='button'>Empezar</Link>
      </div>
      <div className='home--footer'>
        Mathias Sellanes, Mauro Machado, Matias Alvez, Enzo di Sacco
      </div>
    </div>
  )
}

export default App`
