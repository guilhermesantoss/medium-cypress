import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [show, setShow] = useState(false);

  function showName() {
    setShow(true);
  }
  
  return (
    <>
      <h1 id="titulo">Criando meu primeiro teste E2E</h1>
      <input 
        type="text"
        placeholder="nome"
        value={name}
        id="input"
        onChange={e => setName(e.target.value)}
      />
      <button
        id="botao"
        onClick={showName}
      >
        Clicar
      </button>
      { show && (
        <h1 id="nome">Meu nome é: {name}</h1>
      )}
    </>
  );
}

export default App;
