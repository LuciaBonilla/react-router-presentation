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

export default App
