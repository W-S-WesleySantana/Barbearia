import { useState } from 'react';
import { Container } from './styles';

export function ProtectedRoute({ children }) {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [senhaInput, setSenhaInput] = useState('');
  const [erro, setErro] = useState(false);

  // DEFINA  SENHA 
  const SENHA_CORRETA = '123456'; 

  const handleLogin = (e) => {
    e.preventDefault();
    if (senhaInput === SENHA_CORRETA) {
      setIsAuthenticated(true);
      setErro(false);
    } else {
      setErro(true);
    }
  };

 
  if (isAuthenticated) {
    return children;
  }

  return (
    <Container >
      <h2>Acesso Restrito</h2>
      <p>Digite a senha para acessar o Painel Adm:</p>
      
      <form onSubmit={handleLogin}>
        <input
          type="password"
          placeholder="Digite a senha..."
          value={senhaInput}
          onChange={(e) => setSenhaInput(e.target.value)}

        />
        <button type="submit">
          Entrar
        </button>
      </form>

      {erro && <p style={{ color: 'red', marginTop: '10px' }}>Senha incorreta!</p>}
    </Container>
  );
}