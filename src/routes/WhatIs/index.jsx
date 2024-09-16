import { Link } from 'react-router-dom';
import './index.css';

const About = () => {
  const whatIsList = [

  ];

  return (
    <div>
      <h1>¿Que es React Router?</h1>
      <h2>
        React Router es una biblioteca para React que permite la navegación entre distintas páginas sin recargar la aplicación completa. Es ideal para aplicaciones de una sola página (SPA), facilitando una experiencia fluida y rápida.
      </h2>
      <ol>
        {whatIsList.map((item, index) => (
          <li className="list" key={index}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </li>
        ))}
      </ol>
      <Link to="/howitworks" className="button">
        Siguiente
      </Link>
    </div>
  );
}

export default About;
