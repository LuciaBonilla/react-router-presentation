import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem('user', JSON.stringify({ name: 'John Doe' }));

    navigate('/');
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
}

export default Login;
