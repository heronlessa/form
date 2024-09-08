import React, { useState } from 'react';
import './App.css'; 

function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleAcessar = () => {
    if (email === 'teste@pucpr.br' && senha === 'teste') {
      setMensagem('Acessado com sucesso!');
    } else {
      setMensagem('Usuário ou senha incorretos!');
    }
  };

  return (
    <div className="container">
      <h1 className="title">Login PUCPR</h1>
      <div className="input-group">
        <label htmlFor="email">E-mail:</label>
        <input 
          type="email" 
          id="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
      </div>
      <div className="input-group">
        <label htmlFor="senha">Senha:</label>
        <input 
          type="password" 
          id="senha" 
          value={senha} 
          onChange={(e) => setSenha(e.target.value)} 
        />
      </div>
      <button className="access-button" onClick={handleAcessar}>Acessar</button>
      <label className="message">{mensagem}</label>
    </div>
  );
}

export default App;